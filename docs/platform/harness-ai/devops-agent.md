---
slug: /platform/harness-ai/devops-agent
---

# Harness AI DevOps Agent

Harness AI DevOps Agent 通过让您轻松创建和编辑步骤、stages 和 pipelines 来简化您的 DevOps 流程。利用大型语言模型的力量，Agent 提供智能建议、自动化重复任务，现在还生成和集成 OPA Rego 策略以帮助您满足合规标准。

AI Models

AI DevOps Agents 使用以下 AI 模型来促进您的 DevOps 任务：

- DevOps Agent: Claude Opus 4.5
- Support Agent: OpenAI GPT-4o
- OPA Agent: OpenAI GPT-4o
- Error Analyzer: OpenAI GPT-4o

## 安装和设置

Harness AI DevOps Agent 直接在 Harness UI 内启用——无需在外部工具或 marketplace 上单独安装。激活 agent 的步骤：

1. 在左侧导航中选择 **Account Settings**。
2. 在 **General** 下，选择 **Default Settings**。
3. 找到 **Harness AI** 并启用 Harness AI 设置。
4. 可选：启用 **Allow Overrides**。这将允许账户中的组织和项目选择覆盖此设置并禁用 agent。

:::note

DevOps Agent 仅通过 Harness UI 提供。

:::

## 使用 Harness AI DevOps Agent：主要功能

身份验证后，您可以利用 agent 的能力来管理您的 DevOps 工作流程。主要功能包括：

| Feature | Description |
|---------|-------------|
| **Step Management** | 创建、编辑和组织 pipelines 中的各个步骤。 |
| **Stage Configuration** | 修改和配置您的 stages。 |
| **Pipeline Orchestration** | 跨所有 Harness 模块构建和更新 pipelines。 |
| **Multi-Module Pipeline Creation** | 为 CI、CD、IACM、IDP、SCS、STO、DB DevOps 和 Chaos Engineering 模块创建 pipelines。 |
| **Resource Creation** | 通过对话提示创建和更新 Services、Environments、Connectors 和 Secrets。 |
| **Policy Generation and Integration** | 生成和集成 Open Policy Agent (OPA) Rego 策略以满足合规标准。 |
| **Error Analyzer** | 用于 pipeline 故障的 AI 驱动的根因分析，提供自动修复建议。 |
| **Pipeline Summarizer** | 生成 pipelines、执行和依赖资源的自然语言摘要。 |

## 多模块 Pipeline 创建

Harness AI DevOps Agent 支持跨所有 Harness 模块创建 pipelines 和 stages，使团队能够构建跨越整个软件交付生命周期的端到端工作流。

支持的模块和 stage 类型：

| Module | Description |
|--------|-------------|
| **CI (Continuous Integration)** | 用于持续集成工作流的构建、测试和扫描 stages。 |
| **CD (Continuous Delivery)** | 具有 rollout 策略、approvals 和环境目标的部署 stages。 |
| **IACM (Infrastructure as Code Management)** | 使用 Terraform 和其他 IaC 工具进行基础设施配置的 pipelines。 |
| **IDP (Internal Developer Portal)** | 用于开发者自服务工作流和自动化的 pipelines。 |
| **SCS (Software Supply Chain Security)** | 供应链安全扫描和 attestation stages。 |
| **STO (Security Testing Orchestration)** | 包括 SAST、DAST 和 SCA 扫描的安全测试 stages。 |
| **DB DevOps** | 数据库 schema 迁移和变更管理 stages。 |
| **Chaos Engineering** | 弹性测试的混沌实验 stages。 |
| **Custom** | 用于专门工作流的自定义 stages 和步骤。 |

## Error Analyzer

Harness AI 通过关联最近的更改、检查依赖项、识别历史模式并推荐特定修复来分析 pipeline 故障。使用此功能可以快速诊断和解决 pipeline 问题，而无需手动调试。

当 pipeline 失败时，Harness AI 执行：

- **变更影响分析** - 识别可能导致失败的最近 pipeline 修改
- **依赖项检查** - 验证外部基础设施和服务的状态
- **历史模式匹配** - 将故障与类似的过去故障进行比较
- **根因分析** - 确定导致问题的特定步骤和命令
- **自动推荐** - 提供带有理由的优先级操作项

## 服务创建和更新

Harness AI 通过对话提示生成完整的服务定义。描述您的应用程序需求，Harness AI 会创建一个完全配置的服务，包含 manifests、artifacts 和 connectors。

## 连接器创建和更新

Harness AI 通过智能推荐来指导您创建连接器，包括身份验证、权限和配置。描述您想要连接的内容，Harness AI 会帮助您设置安全、经验证的连接。

## 环境创建和更新

Harness AI 通过对话提示生成完整的环境定义。描述您的部署目标，Harness AI 会创建一个完全配置的环境，包含基础设施定义和覆盖。

## Secret 创建和更新

Harness AI 帮助您创建 secret 配置，生成具有适当命名、范围和元数据的 secret 对象结构。AI 创建 secret 对象后，您需要在 Harness UI 中手动提供实际 secret 值以确保安全。

## 数据存储和隐私政策

Harness AI 旨在遵循严格的数据隐私和安全原则：

- **训练已禁用** - 所有 AI 集成都禁用了训练。
- **数据不持久化** - 数据不会持久化或暴露给模型 providers。
- **回退机制** - 仅在必要时使用，并遵守严格的保留策略。

## 常见问题

### DevOps Agent 适用于谁？

Enterprise Licenses（包括 Dev360、Service、SI、Users）免费使用 AI DevOps。任何有权访问 pipelines 的模块都有权使用 AI DevOps——不仅限于 CI 或 CD。这包括除 CCM 外的所有 Harness 模块。AI DevOps Agent 的范围将限制在您拥有的许可证范围内。

### 我可以在哪里提交反馈？

请通过发送电子邮件至 Harness Support 或通过 UI（点击左下角的 **Help** 然后 **Give us feedback**）提交反馈。
