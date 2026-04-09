---
slug: /platform/harness-ai/support-agent
---

# Harness AI Support Agent

Harness AI Support Agent 是 Harness 平台中的第一线支持。它利用 Harness 文档和知识库内容，通过直接从官方文档中获取相关答案、故障排除指导和上下文示例，为产品问题提供即时解答。

AI Model

Support Agent 使用 OpenAI GPT-4o 来处理您的问题并检索相关文档。

## 概述

Support Agent 旨在帮助开发者和平台用户快速找到答案而不离开工作流程。您无需手动搜索文档，只需用自然语言提问，即可获得准确、上下文相关的回复及相关文档链接。

主要优势：

- **即时答案** - 几秒钟内获得产品问题的回复
- **文档支持** - 所有答案均来自官方 Harness 文档
- **上下文示例** - 直接从文档中检索代码片段、YAML 示例和配置样本
- **会话记忆** - Agent 记住对话中较早的上下文以便跟进问题
- **始终最新** - 拉取最新发布的文档

## 安装和设置

Harness AI Support Agent 作为 Harness AI 功能集的一部分启用。无需单独安装。

1. 在左侧导航中选择 **Account Settings**。
2. 在 **General** 下，选择 **Default Settings**。
3. 找到 **Harness AI** 并启用 Harness AI 设置。
4. 可选：启用 **Allow Overrides** 以允许各个组织和项目覆盖此设置。

启用后，可以通过 Harness AI 助手界面访问 Support Agent。

## 使用 Support Agent

通过 Harness AI 聊天界面访问 Support Agent。Agent 自动识别文档相关问题并检索相关内容。

### 提问

您可以向 Support Agent 询问任何与 Harness 产品、功能或配置相关的问题。Agent 搜索文档知识库并返回相关信息。

示例问题：

- "How do I create a Kubernetes connector?"
- "What are the required permissions for a GitHub connector?"
- "Explain the difference between rolling and canary deployments"
- "How do I configure failure strategies in a pipeline?"

### 获取文档示例

Support Agent 可以从文档中检索特定示例，包括 YAML 配置、API 示例和分步指南。

示例提示：

- "Show me an example of a Kubernetes deployment manifest"
- "Give me a sample pipeline YAML for a CI/CD workflow"
- "What does a Terraform connector configuration look like?"

### 上下文跟进问题

Support Agent 在聊天会话中维护对话上下文。这允许您提出在先前回复基础上构建的跟进问题，而无需重复上下文。

### 故障排除指导

当您遇到错误或问题时，Support Agent 可以帮助您找到相关的故障排除文档。

示例提示：

- "I'm getting a 'delegate not found' error. How do I fix this?"
- "My pipeline is failing with a connection timeout. What should I check?"

## 功能

| Feature | Description |
|---------|-------------|
| **Natural Language Queries** | 用简单的英语提问，获得清晰、简洁的答案。 |
| **Documentation Search** | 搜索所有 Harness 文档以查找相关内容。 |
| **Code Examples** | 直接从文档中检索 YAML、JSON 和代码示例。 |
| **Session Context** | 维护对话历史以进行上下文跟进问题。 |
| **Multi-Module Coverage** | 跨所有 Harness 模块（CI、CD、CCM、STO 等）回答问题。 |

## 数据隐私

Support Agent 遵循与所有 Harness AI 功能相同的数据隐私政策：

- **不用于训练** - 您的问题不用于训练 AI 模型
- **临时处理** - 问题实时处理，不存储
- **仅限公共文档** - 答案来源于公共 Harness 文档

## 限制

Support Agent 旨在根据 Harness 文档回答问题。它有以下限制：

- **文档范围** - 只能回答官方文档中涵盖的问题
- **无账户访问** - 无法查看或访问您的特定账户配置
- **无操作执行** - 无法创建或修改资源（请使用 DevOps Agent）
- **仅限公共文档** - 无法访问内部或私人文档

## 常见问题

### Support Agent 是否适用于所有许可证类型？

是的，所有启用 Harness AI 的 Harness 用户都可以使用 Support Agent，无论许可证类型如何。

### Support Agent 可以访问我的账户数据吗？

不能，Support Agent 仅可访问公共 Harness 文档。它无法查看您的 pipelines、配置、secrets 或任何特定于账户的数据。

### Support Agent 使用的文档有多新？

Support Agent 拉取最新发布的 Harness 文档。文档更新后会在 Support Agent 回复中反映。

### Support Agent 可以记住之前的会话吗？

不能，当您开始新的聊天会话时，会话上下文会被清除。每个新会话都会重新开始，不会记住之前的对话。
