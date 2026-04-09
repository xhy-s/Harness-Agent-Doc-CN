---
slug: /platform/harness-ai/harness-agents
---

# Harness Agents

:::info

Agent 模板是开源的，可在 GitHub 上获取。

:::

Harness Agents 是在 Harness Pipelines 内执行 DevOps 任务的 AI 驱动的自主工作者。与依赖脆弱脚本或外部机器人不同，团队可以使用 Harness Pipelines 作为 AI 驱动的自动化安全控制平面——将治理、可观测性和灵活性结合在一个流程中。

Agents 是 Pipeline 原生的——它们继承 Pipeline 的上下文、权限、secrets 和治理控制，同时在您的 SDLC 全流程中执行多步骤操作。Pipelines 成为 AI 自动化的编排层——能够在企业控制下生成、修复和优化软件交付。

Runtime: Harness Pipeline Engine | Models: Anthropic, OpenAI, Gemini

---

## 什么是 Harness Agents？

Agents 超越了简单的 AI 聊天。在底层，一个 agent 是一个包含一个或多个 AI 驱动步骤的 stage 的 pipeline。这些步骤调用 LLM（Claude、Gemini、Codex 或 Harness Coding Agent），可以作为 step template 在任何 pipeline 中引用。Agents 可在 Account、Org 和 Project 级别使用，并显示在 Step Palette 的 Agents 部分。

### Pipeline 原生执行

Agents 作为一等 Pipeline 步骤运行——而不是外部脚本或 webhook 回调。它们共享 Pipeline 的执行上下文、secrets、connectors 和 RBAC 范围。每个操作都被记录、审计和治理。Agents 可以与标准 Harness Pipeline 步骤组合，意味着您可以在单个工作流中组合 AI 驱动的步骤与现有的构建、测试、部署和审批步骤。

### System 和 Custom Agents

Harness 提供两类 agents：

- **System Agents** — Harness 维护的预构建 agents，自动加载到您的账户中，开箱即用。这些 agents 不可编辑，但可以 fork 创建自定义变体。
- **Custom Agents** — 使用 Agent Steps 和标准 Harness Pipeline 步骤构建的用户定义 agents。Custom agents 可以通过 GitX 存储在 Git 中、进行版本控制，并在整个组织中共享。它们遵循与其他 Pipeline 步骤相同的 OPA 治理。

System Agents 可以在 Account、Org 或 Project 级别 fork 和自定义。Forked agents 成为 Pipeline 模板，您可以独立扩展、版本控制和管理。

### 上下文感知智能

Agents 访问您的 Knowledge Graph — Pipelines、基础设施、Services、Configs 和历史记录。它们了解您的环境并根据实际平台状态做出决策，而不是通用建议。Harness AI 在构建、测试和发布中建立记忆——自动优化性能、可靠性和治理。组织规则和记忆跨会话持久化，编码团队约定和领域知识。

### 示例：Code coverage agent pipeline

```yaml
version: 1
pipeline:
  clone:
    depth: 1
    ref:
      name: <+inputs.branch>
      type: branch
    repo: <+inputs.repo>
    connector: "<+inputs.gitConnector>"
  stages:
    - name: code-coverage
      steps:
        - name: coding_agent              # ← AI-powered step
          run:
            container:
              image: harness/codecov:coding-agent
            with:
              max_iterations: "300"
              code_coverage: "true"
              verify: "true"
              prompt: "Analyze the current codebase and identify test coverage. Generate comprehensive unit tests to increase overall coverage to at least 90% and each file coverage to at least 80%. Generate a CONCISE COVERAGE.md file."
            env:
              ANTHROPIC_API_KEY: <+inputs.llmConnector.token>
        - name: push_and_create_pr        # ← Opens PR with tests
          run:
            container:
              image: harness/coding-agent-pr-skill
            env:
              PLUGIN_PR_TITLE: "Code Coverage: Automated coverage increase by Harness AI"
              PLUGIN_CREATE_PR: "true"
        - name: post_coverage_comment     # ← Posts report to PR
          run:
            container:
              image: harness/coding-agent-comment-skill
      platform:
        os: linux
        arch: arm64
  inputs:
    llmConnector:
      type: connector              # LLM provider connector
    gitConnector:
      type: connector              # SCM connector
    repo:
      type: string
    branch:
      type: string
      default: main
```

Agent 模板是包含元数据、YAML、文档和 logo 的模块化 Pipeline 定义。在 thisrohangupta/agents 浏览模板。

---

## 架构

Agents 由三层组成：执行运行时（Harness Pipelines）、智能层（LLM + Knowledge Graph）和工具层（MCP + Harness APIs）。每一层都是独立可配置的。

有关架构的交互式视觉概述，请参阅 Harness Agents Architecture Diagram。

- Runtime
- Intelligence
- Tools and MCP
- Governance

| Component | Description |
|-----------|-------------|
| **Pipeline Engine** | Agents 在 Harness Pipeline 运行时内执行——继承作业语义、并行执行、失败策略、回滚和完整编排模型。无需管理新的运行时。 |
| **Step Templates** | Agents 作为 Step Templates 和 Step Group Templates 打包。通过名称引用它们，在模板库中进行版本控制，并组合到任何 Pipeline 中。Step templates 可以通过 GitX 在 Git 中管理并进行独立版本控制。 |
| **Agents Are Pipelines** | 每个 agent 背后都有一个 Pipeline 定义。Fork 一个 agent，编辑 YAML，发布您自己的变体。完全透明——没有黑盒。 |
| **API Access** | Agents 可以通过 Harness Pipeline API 调用，实现从外部系统和自动化工具链对 AI 驱动工作流的编程执行。 |

---

## 使用场景

Agents 处理那些不能简化为简单脚本但也不需要每次都有人员参与的高价值、判断密集型工作。以下 System Agents 在 agent 库中可用：

### CI: Autofix

当 PR 失败 CI/CD 时，agent 检查日志、测试失败和配置错误，提出具体修复方案，并将其提交到 PR 分支（auto-fix）或添加建议的补丁作为评论供作者应用。将 MTTR 从数小时缩短到数分钟。

### Testing: Code coverage

分析覆盖率报告和代码热点，识别测试不足的模块，生成单元测试（有时是集成测试）以将覆盖率提高到 90%+ 整体和 80%+ 每个文件。打开带有新测试和更新覆盖率报告的 PR——完全自主。

### Code quality: Code review

阅读 PR diff、链接的问题和测试结果，产生意见性评论：总结变更，突出风险区域，检测样式违规和反模式，建议重构，并指出缺失的测试或文档。

### Feature flags: FF cleanup

检测代码和配置中过时或完全推出的 feature flags，验证可以安全删除，并生成删除 flag 定义、flag 检查和相关死代码的 PR。

### CD: Manifest remediator

分析失败的 Kubernetes 部署（事件、kubectl 错误、日志），识别 manifest 中的问题——API 版本、资源限制、selectors、mounts——并生成更正后的 YAML 以及 PR 或 patch。

### CD: Helm chart autofix

审查失败的 Helm chart 部署（values、templates、release 错误），修复 chart 配置问题，如无效 values、缺失 templates、配置错误的 selectors 或版本不匹配，然后提议更新的 chart/values 文件。

### Platform: Onboarding

扫描仓库，推理构建/部署拓扑，并自动创建 CI/CD Pipelines。新仓库在几分钟内获得 Pipelines，而不是几天——激活前需要人工审批。

### Migration: Library upgrade

扫描过时依赖项的项目，推荐安全版本升级，并打开带有更新依赖文件的 PR 以及可选的测试运行以验证更改。支持多种生态系统：

- **Java** — Maven/Gradle 升级（例如 Java 16 到 21）
- **React/TypeScript** — Package.json 和 lockfile 升级（例如 React 16 到 18）
- **Python** — Requirements/Poetry/Pipenv 升级（例如 Python 2 到 3）

### Security: Vulnerability remediation

从扫描结果（SCA、SAST、容器扫描）中获取安全漏洞，识别受影响的代码或依赖，并打开带有针对性修复的 PR——库升级、配置加固或代码更改——连接到失败的 Pipeline。

### Platform: Unified agent

中央编排 agent，可以获取和推理 Services、Environments、Connectors 和 Secrets，并可以直接在您的工作流中创建或更新 Pipelines。使用自然语言提示生成完整的 CI、CD 或组合工作流的 Pipeline 定义。

---

## 设计原则

Agents 不取代您的 Pipeline 基础设施——它们扩展它。相同的 YAML、相同的 RBAC、相同的审计跟踪。新智能，相同控制平面。

| Principle | Description |
|-----------|-------------|
| **Pipeline-native** | Agents 继承 Pipeline 语义——triggers、secrets、environments、失败策略和审批门控。无需学习或保护新的执行模型。 |
| **Model independent** | BYOM 默认。连接 Anthropic、OpenAI 或 Gemini。使用 SaaS 端点或自托管模型。所有 agents 使用标准化的 LLM connector 映射（`token`、`vendor`、`model`、可选 `endpoint`），因此您可以在不重写 agent 定义的情况下交换 providers。 |
| **Forkable and shareable** | 每个 agent 就是一个 Pipeline。Fork System Agents，自定义逻辑，通过 Agent Marketplace 共享。Forked agents 成为 Pipeline 模板，您可以通过 Flexible Templates 扩展、通过 GitX 在 Git 中版本控制和管理。 |
| **Security first** | 默认最小权限。OPA 治理的操作。Scoped tools。效果操作的人员介入。每个 agent 决策都被记录和审查。 |
| **Observable** | 没有隐藏的提示。完整的推理链在 Pipeline 日志中。准确检查 agent 看到、决定和执行的内容。您拥有端到端的行为。 |
| **Enterprise-grade** | 为受监管行业构建。数据驻留控制、RBAC 集成、合规审计跟踪和治理策略，可扩展到数千个 Pipelines。 |

---

## 安全和治理

代理自动化引入了新的攻击面——提示注入、工具副作用、数据泄露。Harness Agents 安全模型建立在显式约束而非隐式信任之上。

| Control | Description |
|---------|-------------|
| **Scoped permissions** | Agents 继承 Pipeline RBAC。它们只能访问 Pipeline 执行上下文允许的资源、connectors 和 secrets。Agents 在 Project、Org 和 Account 级别可用——Project-scoped agent 仅在该项目内可用。 |
| **Agent RBAC** | Agents 的专用权限：View、Edit、Create、Execute 和 Delete。如果用户在 account 级别有 Pipeline 执行访问权限，他们可以运行 account-level agents。 |
| **OPA policy gates** | 每个效果操作在执行前都会根据 OPA 策略进行评估。根据声明性规则进行阻止、警告或要求审批。Agent 步骤遵循与其他 Pipeline 步骤相同的 OPA 治理。 |
| **Allow-listed tools** | Agents 只能调用明确声明的工具。没有环境权限。工具规范像代码一样进行审查和版本控制。 |
| **Visible artifacts only** | Agents 创建 PR、评论和日志——而不是静默变更。每个输出都对团队可见以供审查和审批。 |
| **MCP Gateway proxy** | 外部 MCP 服务器调用通过 Harness MCP Gateway 进行过滤和代理——实现允许列表、速率限制和内容检查。 |
| **Compliance audit trail** | 完整思维链日志。模型输入、工具调用、输出和决策被捕获用于 SOC 2、FedRAMP 和企业合规要求。 |

---

## Agents vs. 传统自动化

| Dimension | Scripts and Webhooks | Standalone AI Assistants | Harness Agents |
|-----------|---------------------|-------------------------|----------------|
| Execution model | External processes, custom infrastructure | API calls, no pipeline context | Pipeline-native steps with full orchestration |
| Context | Manual wiring via env vars | Chat history only | Knowledge Graph — services, infra, history |
| Governance | DIY approval scripts | None / per-provider | OPA policies, RBAC, audit logs |
| Model flexibility | Hard-coded API calls | Vendor lock-in | BYOM — Anthropic, OpenAI, Gemini, per-agent |
| Extensibility | Custom code for each integration | Plugin-dependent | MCP + forkable agents + marketplace |
| Observability | Custom logging | Chat logs | Full reasoning chain in pipeline logs |
| API access | Custom orchestration | No pipeline integration | Pipeline API for programmatic execution |

---

## Roadmap

:::note

以下所有日期均为暂定预测，可能会有所变更。

:::

### February 2026 — Foundation release

Agent 运行时、LLM Connectors（Anthropic、OpenAI、Gemini — SaaS 和自托管），以及 System Agent 模板包括：Autofix、Code Coverage、Code Review、FF Cleanup、Manifest Remediator、Helm Chart Autofix、Onboarding、Library Upgrades（Java、React、Python）、Vulnerability Remediation 和 Unified Agent。Pipeline YAML 集成、Step Templates、Agent RBAC 和用于 agent 执行的 Harness Auth。

### April 2026 — Agent extensibility (MVP 1)

Fork 和自定义 agents。跨 Pipelines 引用 agents。用于引导首次体验的 Onboarding Agent。包含策展社区 agents 的 Agent Marketplace。

### H2 2026 — Autonomous operations (Planned)

事件驱动的 agent 触发器（ incidents、drift detection、SLA breaches）。用于复杂工作流的多 agent 编排。具有内容检查和策略强制的 Advanced MCP Gateway。

---

## 开始使用

Harness Agents 可作为开源 Pipeline 模板使用。将 agent 添加到 Pipeline 时，从 Step Palette 的 Agents 部分选择它。您可以选择 System Agents 和 Custom Agents，并在运行时提供所需输入或在 Pipeline 中定义它们为固定值：

- **Connector** — 使用哪个 LLM connector（Anthropic、OpenAI 或 Gemini）
- **Prompt** — 自定义 agent 行为的可选扩展提示
- **Environment variables** — agent 所需的任何环境变量
- **Secrets** — 如果 agent 需要访问受保护资源

探索 agent 模板并在您的 Harness Pipelines 中试用：

- [Agent Templates on GitHub](https://github.com/thisrohangupta/agents)
- [Interactive Architecture Overview](https://developer.harness.io/docs/harness-ai/harness-agents#architecture)
