---
slug: /platform/harness-ai/harness-skills
---

# Harness Skills

Harness Skills 是专业的提示模板，用于教授 AI 编码助手如何与 Harness 平台交互。每个 skill 都封装了完成特定任务所需的领域知识——生成 pipeline YAML、创建 services、调试执行、分析成本等——以便您可以使用自然语言在编辑器中与 Harness 交互。

该仓库设计为一个工作流系统，而不仅仅是提示文件夹。顶级指令（`CLAUDE.md`、`AGENTS.md`、`.github/copilot-instructions.md`）建立共享行为，而各个 skills 则专门从事创建、调试、治理和报告任务。

## Skills 如何工作

Skills 是 AI 编辑器加载为上下文的结构化指令 Markdown 文件。当您调用一个 skill（例如 `/create-pipeline`）时，AI 读取 skill 的指令并使用 Harness MCP Server 工具对 Harness 平台执行操作。

```
自然语言提示 → AI 编辑器加载 skill 指令 → Skill 编排 MCP 工具调用
  → Harness MCP Server → Harness Platform APIs
```

Skills 不直接嵌入 API schema。相反，它们使用 `harness_describe` MCP 工具在运行时发现资源 schema，使 skills 保持轻量且始终最新。

## 前置条件

- AI 编码助手：Claude Code、Cursor、GitHub Copilot、OpenAI Codex 或 Windsurf
- Harness MCP Server：工具执行所需。请参阅 MCP Server 设置。
- Harness API key：生成 API key。

## 设置 Skills

### Claude Code

克隆 skills 仓库并从中启动 Claude Code：

```bash
git clone https://github.com/harness/harness-skills.git
cd harness-skills
claude
```

在 `~/.claude/settings.json` 中配置 Harness MCP server：

```json
{
  "mcpServers": {
    "harness-mcp-v2": {
      "command": "npx",
      "args": ["-y", "harness-mcp-v2"],
      "env": {
        "HARNESS_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

Skills 从 `CLAUDE.md` 文件和 `skills/` 目录自动发现。按名称调用 skill：

```
/create-pipeline
Create a CI pipeline for a Node.js app that builds, tests, and pushes a Docker image to ECR
```

### Cursor

Cursor 从 `.cursor/rules/harness.mdc` 自动加载项目规则。

1. 在 Cursor 中打开 `harness-skills` 文件夹。
2. 在 `~/.cursor/mcp.json` 中配置 MCP server：

```json
{
  "mcpServers": {
    "harness-mcp-v2": {
      "command": "npx",
      "args": ["-y", "harness-mcp-v2"],
      "env": {
        "HARNESS_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

1. 使用 `@file` 引用 skills：

```
@harness-skills/skills/create-pipeline/SKILL.md
Create a CI pipeline for my Go microservice
```

### GitHub Copilot

GitHub Copilot 从 `.github/copilot-instructions.md` 自动加载指令。

1. 在 VS Code 中打开 `harness-skills` 文件夹。
2. 在 `.vscode/mcp.json` 中配置 MCP server：

```json
{
  "servers": {
    "harness-mcp-v2": {
      "command": "npx",
      "args": ["-y", "harness-mcp-v2"],
      "env": {
        "HARNESS_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

1. 使用 `#file` 引用 skills：

```
#file:harness-skills/skills/debug-pipeline/SKILL.md
diagnose why my deploy pipeline failed
```

### OpenAI Codex

Codex 将 `AGENTS.md` 文件作为系统指令自动加载。

1. 将仓库克隆到您的工作目录：

```bash
git clone https://github.com/harness/harness-skills.git
```

1. 在 Codex MCP 配置中配置 MCP server：

```json
{
  "mcpServers": {
    "harness-mcp-v2": {
      "command": "npx",
      "args": ["-y", "harness-mcp-v2"],
      "env": {
        "HARNESS_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

1. 在提示时将 skill 文件作为上下文引用：

```
Using the instructions in harness-skills/skills/debug-pipeline/SKILL.md,
diagnose why my deploy pipeline failed
```

### Windsurf 和其他 AI 编辑器

Skills 是纯 Markdown 文件，带有 YAML frontmatter。它们适用于任何支持以下内容的 AI 编码工具：

- 系统指令：使用 `CLAUDE.md` 作为项目级上下文。
- MCP servers：连接 Harness MCP Server 以获取 API 访问。
- 文件上下文：在提示中引用各个 `skills/*/SKILL.md` 文件。

## 操作模型

最好的 Harness skills 遵循相同的控制流，即使它们针对不同的资源类型：

1. **首先建立范围** — 在列出、创建、更新或删除资源之前确认 account、org 和 project 上下文。
2. **在生成依赖项之前验证依赖项** — 不要引用尚未确认存在的 connectors、secrets、environments、infrastructure 或 templates。
3. **在编写有效负载之前发现 schema** — 使用 `harness_describe` 和 API 验证反馈，而不是猜测字段名称或有效负载形状。

## 工作流模式

| Workflow mode | Representative skills | When to use |
|-------------|----------------------|-------------|
| Create and scaffold | `/create-pipeline`, `/create-service`, `/create-connector`, `/create-template` | 您需要定义或生成新的 Harness 资源及其 YAML 或 MCP 有效负载 |
| Run and debug | `/run-pipeline`, `/debug-pipeline`, `/migrate-pipeline`, `/manage-delegates` | 您已有资源并需要执行、诊断或修复行为 |
| Govern and secure | `/manage-roles`, `/manage-users`, `/create-policy`, `/security-report`, `/audit-report` | 您需要 RBAC、策略、合规性或安全工作流 |
| Analyze and report | `/dora-metrics`, `/analyze-costs`, `/scorecard-review`, `/template-usage` | 您需要结构化报告、建议或采用分析 |

## 可用的 Skills

### Pipeline 和模板创建

| Skill | Description |
|-------|-------------|
| `/create-pipeline` | 生成 v0 pipeline YAML（CI、CD、approvals、matrix strategies） |
| `/create-pipeline-v1` | 生成 v1 simplified pipeline YAML — alpha: internal testing only |
| `/create-template` | 创建可重用的 step、stage、pipeline 或 step group templates |
| `/create-trigger` | 创建 webhook、scheduled 和 artifact triggers |
| `/create-agent-template` | 创建 AI 驱动的 agent templates — alpha: internal testing only |

### 资源管理

| Skill | Description |
|-------|-------------|
| `/create-service` | 创建服务定义（Kubernetes、Helm、ECS、Lambda） |
| `/create-environment` | 创建环境定义及覆盖 |
| `/create-infrastructure` | 创建基础设施定义 |
| `/create-connector` | 创建 connectors（Git、cloud、registries、clusters） |
| `/create-secret` | 创建 secrets（text、file、SSH、WinRM） |

### 访问控制和 Feature Flags

| Skill | Description |
|-------|-------------|
| `/manage-users` | 管理用户、用户组和服务账户 |
| `/manage-roles` | 管理角色分配和 RBAC |
| `/manage-feature-flags` | 创建、列出、切换和删除 feature flags |

### 操作和调试

| Skill | Description |
|-------|-------------|
| `/run-pipeline` | 执行 pipelines，监控进度，处理 approvals |
| `/debug-pipeline` | 分析执行失败，诊断根因 |
| `/migrate-pipeline` | 将 pipelines 从 v0 转换为 v1 格式 |
| `/template-usage` | 跟踪模板依赖项和采用情况 |
| `/manage-delegates` | 监控 delegate 健康状况和管理 tokens |

### 平台智能

| Skill | Description |
|-------|-------------|
| `/analyze-costs` | 云成本分析和优化（CCM） |
| `/security-report` | 漏洞报告、SBOMs、合规性（SCS/STO） |
| `/dora-metrics` | DORA 指标和工程绩效（SEI） |
| `/gitops-status` | GitOps 应用健康和同步状态 |
| `/chaos-experiment` | 创建和运行混沌实验 |
| `/scorecard-review` | 服务成熟度评分卡（IDP） |
| `/audit-report` | 审计跟踪和合规报告 |
| `/create-policy` | 为供应链安全创建 OPA 治理策略 |

## 端到端工作流

Skills 可以链接在一起用于多步骤工作流。依赖其他资源的资源必须按正确顺序创建。

### 新微服务设置

按顺序使用这些 skills：

1. `/create-connector` — Git、Docker registry 和 Kubernetes cluster connectors
2. `/create-secret` — connector 身份验证的凭据
3. `/create-service` — 引用 connectors 的服务定义
4. `/create-environment` — 目标环境配置
5. `/create-infrastructure` — 目标集群的基础设施定义
6. `/create-pipeline` — 引用 service、environment 和 infrastructure 的 CI/CD pipeline
7. `/create-trigger` — 自动化 pipeline 的 webhook 或 schedule trigger

### 调试失败的部署

典型顺序：

1. `/run-pipeline` — 识别最新执行或重现问题
2. `/debug-pipeline` — 分类失败并检查根因
3. `/template-usage` — 检查共享模板是否传播了问题
4. `/manage-delegates` — 如果相关，调查 delegate 容量或连接性

### 代码感知的 Pipeline 生成

`/create-pipeline` skill 包含代码库分析功能。它可以扫描您的项目文件以自动检测：

- 来自源文件的语言和运行时（`package.json` → Node.js、`go.mod` → Go）
- 来自构建配置的构建工具（`Dockerfile`、`webpack.config.js`、`pom.xml`）
- 来自测试配置的测试框架（`jest.config.*`、`pytest.ini`）
- 来自 manifest 的部署目标（`Chart.yaml` → Helm、`task-definition.json` → ECS）

这允许 skill 生成针对您的项目定制的 pipeline YAML，而无需手动配置。

## Skill 结构

每个 skill 位于 `skills/ /SKILL.md`，遵循一致的结构：

```
skills/create-pipeline/
├── SKILL.md              # Skill 定义（必需）
└── references/           # 补充文档（可选）
    ├── native-steps.md
    ├── v0-pipeline-schema.md
    └── codebase-analysis.md
```

`SKILL.md` 文件包含：

- **Frontmatter**：名称、描述、版本、MCP server 依赖项和许可证元数据。
- **Instructions**：带 MCP 工具调用和参数的阶段化步骤。
- **Examples**：真实的调用场景和工作示例。
- **Performance notes**：验证检查、权衡和优化指导。
- **Troubleshooting**：常见错误和恢复步骤。

`references/` 子目录中的参考文件提供了补充知识，如 schema 定义、决策树和模板库，AI 根据需要加载。

## MCP 工具

Skills 使用 Harness MCP Server，它提供由 `resource_type` 分派的 10 个通用工具：

| Tool | Purpose |
|------|---------|
| `harness_list` | 列出资源 |
| `harness_get` | 获取资源详情 |
| `harness_create` | 创建资源 |
| `harness_update` | 更新资源 |
| `harness_delete` | 删除资源 |
| `harness_execute` | 执行操作 |
| `harness_search` | 跨资源搜索 |
| `harness_describe` | 获取资源 schema |
| `harness_diagnose` | 诊断问题 |
| `harness_status` | 检查系统状态 |

## 项目结构

```
harness-skills/
├── skills/
│   ├── create-pipeline/
│   │   ├── SKILL.md
│   │   └── references/
│   ├── create-template/
│   │   └── SKILL.md
│   ├── debug-pipeline/
│   │   └── SKILL.md
│   └── ...
├── references/              # 共享的仓库级 playbook
├── templates/               # 共享的仓库级输出模板
├── examples/
│   ├── v0/                  # v0 pipeline 示例
│   ├── v1/                  # v1 pipeline 示例
│   ├── templates/
│   ├── triggers/
│   ├── services/
│   ├── environments/
│   ├── connectors/
│   └── ...
├── .cursor/rules/harness.mdc
├── .github/copilot-instructions.md
├── AGENTS.md
├── CLAUDE.md
└── CONTRIBUTING.md
```

## 下一步

- [Harness Skills repository](https://github.com/harness/harness-skills)
- [Harness MCP Server](https://developer.harness.io/docs/platform/harness-ai/mcp-server)
- [Contributing guide](https://github.com/harness/harness-skills/blob/main/CONTRIBUTING.md)
