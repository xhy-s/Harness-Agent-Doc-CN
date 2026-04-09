---
slug: /platform/harness-ai/overview
---

# Harness AI 概述

Harness 平台利用 Harness AI 革新软件交付流程。通过将 AI 能力与强大的 DevOps 工具、功能和实践相结合，Harness 平台简化和加速软件交付生命周期，并使团队能够快速交付高质量应用程序。其 AI 驱动的预测分析、持续验证和高级发布编排能力使团队能够推动创新、提高效率，并最终提供卓越的用户体验。

## 启用 AI

要在您的 Harness 账户中启用模块特定的 AI 功能，请执行以下操作：

#### Navigation 1.0

1. 进入 Account Settings。
2. 选择 Account Resources，然后选择 Default Settings。
3. 选择 Harness AI 磁贴。
4. 启用 Harness AI 设置。
5. 可选：选择 Allow Overrides，如果您希望能够为单个项目启用/禁用 AI。

#### Navigation 2.0

1. 进入 Account Settings。
2. 在 General 下，选择 Default Settings。
3. 选择 Harness AI 磁贴。
4. 启用 Harness AI 设置。
5. 可选：选择 Allow Overrides，如果您希望能够为单个项目启用/禁用 Harness AI。

有关 navigation 2.0 的更多信息，请访问 Harness navigation 2.0。

## Harness AI 功能

| Module | Feature | Description | Availability |
|--------|---------|-------------|---------------|
| Platform | Harness Agents | 在 Pipelines 内运行的自主 AI 代理——在 SDLC 全流程中构建、部署、测试、修复和优化，从提交到生产。 | Generally available |
| Platform | DevOps Agent | 通过自然语言提示创建和管理 Pipelines、Stages、Steps、Services、Environments、Connectors 和 Secrets 的 AI 代理。 | Generally available |
| Platform | DevOps Agent (Error Analyzer) | 用于 Pipeline 故障的 AI 驱动的根因分析，提供自动修复建议和 YAML 自动修复。 | Generally available |
| Platform | DevOps Agent (Policy Generation) | 生成和集成 Open Policy Agent (OPA) Rego 策略以满足合规标准。 | Generally available |
| Platform | DevOps Agent (Pipeline Summarizer) | 生成 Pipeline、执行和依赖资源的自然语言摘要。 | Generally available |
| Platform | DevOps Agent (Resource Creation) | 通过对话式 AI 提示创建 Services、Environments、Connectors 和 Secrets。 | Generally available |
| Platform | Support Agent | AI 驱动的第一线支持，回答产品问题和文档查询。 | Generally available |
| Platform | Dashboard Intelligence | 通过交互式 AI 提示定制仪表板和小组件级控制。 | Generally available |
| Platform | MCP Server | Model Context Protocol 服务器，支持与 Cursor、Windsurf、Claude Desktop 和 VS Code 等外部 AI 工具集成。 | Generally available |
| Code Repository | PR Summaries & Code Review | AI 生成的 PR 描述，包含代码变更分析、文件级摘要和影响评估。 | Generally available |
| Code Repository | Semantic Code Search | 理解整个代码库语义的自然语言代码搜索。 | Generally available |
| Code Agent | Code Agent | 用于智能代码生成、实时代码建议、自动测试生成、上下文代码解释和交互式聊天的 IDE 扩展。 | Beta |
| Code Agent | API Spec Generation | 使用 AI 从代码库生成 OpenAPI 和 Swagger API 规范。 | Beta |
| CI | Troubleshoot CI builds | 使用 Harness AI DevOps Agent 根因分析解决构建失败问题。 | Generally available |
| CI | DevOps Agent (Multi-Module Pipeline Creation) | AI DevOps Agent 创建 CI、CD、IACM、IDP、SCS、STO、DB DevOps 和 Chaos Engineering Pipelines 和 Stages。 | Generally available |
| CD | Troubleshoot CD deployments | 使用 AI 根因分析 (RCA) 解决部署失败问题。 | Generally available |
| IaCM | DevOps Agent (IaCM Pipeline Creation) | AI DevOps Agent 创建用于使用 Terraform 和其他 IaC 工具配置基础设施的 Infrastructure as Code Management Pipelines。 | Generally available |
| CCM | Generate governance rules | 生成资产治理规则以优化云支出。 | Generally available |
| STO | Security remediation | AI 驱动的漏洞分析和修复建议。 | Generally available |
| CE | ChaosGuard | 使用 ChaosGuard 生成混沌实验条件。 | Generally available |
| FME | Release Agent | 具有文档摘要和实验结果分析的 AI 驱动的发布智能。 | Generally available |
| SEI | AI Productivity Insights | 开发者生产力、AI 工具采用影响和工程指标（包括 DORA 和 SPACE 框架）的 AI 分析。 | Generally available |
| AI SRE | AI Scribe Agent | 通过实时监控 Slack、Zoom 和 Microsoft Teams 进行自动事件文档记录。 | Generally available |
| AI Test Automation | AI Test Copilot | 具有意图驱动测试、自动步骤分解和 AI 断言的自然语言测试生成。 | Generally available |

## Harness AI 条款和数据隐私信息

请访问以下 Harness 法律页面了解 Harness AI 数据隐私和使用条款的信息：

- Harness AI Terms
- Harness AI Data Privacy

## 常见问题

### Harness AI 支持哪些自然语言？

Harness AI 可以用英语、荷兰语、西班牙语、法语、德语、印地语、韩语、普通话等多种常用语言生成内容。

### Harness AI 支持编程语言之间的代码翻译吗？

是的。Harness AI 提供由大型语言模型 (LLM) 驱动的 advanced code translation 功能。您可以使用自然语言提示轻松地将一种编程语言的逻辑转换为另一种。例如，您可以说"将这个 Python 脚本转换为 Java"或"将此 C++ 逻辑重构为 Go"。

### Harness AI 支持哪些编程语言？

Harness AI 支持多种编程语言，包括但不限于 JavaScript、Python、Java、C#、Ruby、Go 和 TypeScript。

### 支持哪些应用交付功能？

Harness AI 旨在通过将智能自动化直接引入 IDE 来提高开发者生产力。它支持以下应用交付功能：

- IDE 中的内联自动补全
- 通过聊天进行多文件编辑和代码生成
- 代理任务完成（例如重构）
- 构建文件生成
- 非代码产物
- Prompt-to-App（从提示创建和部署）

### Harness AI 支持哪些代理功能？

Harness AI 原生支持基于事件的触发器，如提交、bug 创建或测试失败。这些工作流可以通过与 Git hooks、问题跟踪器或 CI/CD Pipelines 的集成进行配置——允许组织构建能够对定义的事件做出反应的自动化助手。

### Harness AI 是否支持多模态输入进行调试？

Harness AI 通过以下方式支持全面的多模态调试：

- Stack traces：高级解析和分析，具有上下文感知的根因识别。
- UI errors：UI 错误截图的视觉分析。
