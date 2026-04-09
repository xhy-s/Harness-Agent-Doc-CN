---
slug: /platform/harness-ai/release-agent
---

# Harness AI Release Agent

## 概述

Release Agent 是一个应用内 AI 聊天机器人，旨在简化 Harness FME 的使用。它通过利用我们的公共文档和博客提供多语言支持、快速响应和基于知识的帮助。

Release Agent 让所有开发者轻松获取所需帮助，而无需离开 Harness 界面。本文档为开发者提供了与 Release Agent 有效协作的技术细节和指南。

## 设置

如果 Release Agent 对您的团队可用，您会在左下角找到 Release Agent 图标。

当您点击 Release Agent 时，聊天将在屏幕右侧打开。您可以点击建议的问题之一开始，或输入您自己的问题。

### 示例问题

- How do I set up a JavaScript SDK in my codebase?
- How do I create and manage feature flags in FME?
- How can I integrate FME with my application using the SDK?
- What are the best practices for naming feature flags and events?
- How do I set up an A/B test in Harness FME?
- Can you explain how FME's targeting rules work?
- How can I use segments to target specific groups of users?
- What data types can I track using FME events for measurement?

## AI Summarize

Release Agent 可以汇总 feature flag 的 Metric details 页面上的指标结果以及实验的 Metric details 页面上的实验结果。

### Feature flag 指标

要在 feature flag 的指标上使用 AI Summarize 按钮：

1. 深入了解 feature flag 的 Metrics impact dashboard 上的指标磁贴，点击 **Summarize**。
2. 查看摘要后，输入您的跟进问题，点击 **Continue conversation in Release Agent**。
3. 如有需要，继续提出其他跟进问题。

### 实验结果和指标

要在实验的结果上使用 AI Summarize 按钮：

1. 深入了解实验的 Metrics dashboard 上的指标，点击 **Summarize**。
2. 查看摘要后，输入您的跟进问题，点击 **Continue conversation in Release Agent**。
3. 如有需要，继续提出其他跟进问题。

## 为您的团队启用 Release Agent

管理员可以在 Admin 设置中启用或禁用 Release Agent。

1. 进入 **FME Settings** > **AI settings**。
2. 选择 **Enable Release Agent** 切换和 **Enable processing of experimentation data** 切换来打开或关闭这些功能。
3. 点击 **Save**。

## 数据使用

### 准确性

虽然我们努力提供准确的信息，但我们无法保证聊天机器人提供的信息的准确性、完整性或及时性。例如，LLM 可能在数字信息的精度和上下文方面存在困难。

### 隐私

您的数据受 Harness 隐私政策保护，已同意使用产品。Release Agent 使用 OpenAI 作为数据子处理器用于数据汇总功能，因此您的数据还受 OpenAI Enterprise 隐私政策的额外保护。

- 您的数据不会用于训练。Harness 和 OpenAI 都不会。
- Harness 将仅发送创建数据汇总所需的最小必要信息给 OpenAI。

## 反馈和支持

有关 Release Agent 的支持查询或问题报告，请通过 support@split.io 提交请求。
