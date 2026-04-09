---
slug: /platform/harness-ai/code-agent
---

# Harness AI Code Agent

Harness AI Code Agent 由一套工具组成，通过智能代码生成、实时代码建议、自动测试生成、上下文代码解释和聊天功能来增强您的编码体验。

Harness AI Code Agent 旨在与您的工作流程无缝集成，目前作为 Visual Studio Code 的扩展提供。

## 安装和设置

Harness AI Code Agent 目前作为 Visual Studio Code 扩展提供。可以直接从相应的 marketplace 安装。

### VS Code

### 身份验证

安装扩展后，您需要登录 Harness 账户以在 IDE 中启用 Harness 模型。您可以通过点击 IDE 右下角的 Harness 图标并从下拉菜单中选择 **Harness login** 来触发身份验证流程。

点击登录按钮后，您将被重定向到 Harness 登录页面以输入您的凭据。

## 使用 Harness AI Code Agent：主要功能

Harness AI Code Agent 提供以下主要功能：代码生成、聊天功能和内联编辑。

### 代码生成

观看 Harness AI Code Agent 的演示。

在此演示中，了解 Harness AI Code Agent 如何帮助在 VS Code 内部构建、完成和迭代真实的 Django 代码——将其视为您的 AI 结对编程伙伴。

代码生成的工作方式是显示实时的内联代码建议。建议基于正在编写的代码上下文以及工作区中的相关文件和代码片段生成。

向用户显示建议后，他们可以完全接受或逐字接受，从而在最终确定之前进行自定义。

### 弹出菜单

当您在编辑器中选择代码并右键点击时，会出现一个弹出菜单，提供以下选项：将选定代码添加到聊天会话、修复语法或拼写错误、修复代码、优化代码、编写文档字符串或为代码添加注释。

### Harness AI Code Agent 的聊天功能

Harness AI 提供了一个强大的交互式聊天功能，可以回答编码问题、提供解释、生成新文件、编写测试并协助调试。您可以通过点击 IDE 左侧边栏上的 Harness 图标来访问聊天功能。这将打开一个聊天窗口，您可以在这里输入问题或请求，代码 agent 将用相关信息或代码建议进行回复。

## Harness AI Code Agent 的聊天：功能和用法

### 快捷键

您可以通过点击聊天窗口顶部的 `...` 查看快捷键列表。

### 引用整个代码库

当 VS Code 启动时，Harness AI Code Agent 会为当前工作区中的所有代码建立索引。这种语义索引使整个代码库都可作为聊天会话的上下文。默认情况下，聊天功能使用当前文件的上下文来提供相关建议和答案。您可以通过在输入提示时按 cmd + enter 来引用整个代码库。或者，您可以在提示中使用 `@codebase` 来引用整个代码库。

您可以通过点击聊天窗口顶部的 `...` 来刷新代码库索引。

### 添加引用

您可以通过添加与您的查询相关的特定文件或库的引用来增强代码 agent 的能力。要添加引用，只需在聊天窗口中输入 `@`，会出现一个弹出窗口，允许您选择要引用的文件或库。

### 上下文提供器

上下文提供器允许您将相关内容作为查询输入上下文。Harness 支持多种上下文提供器，可与代码 agent 配合使用以提高响应准确性。

包括的示例：

- `@Codebase`：从代码库中引用最相关的片段。
- `@File`：引用当前工作区中的任何文件。
- `@Search`：引用代码库搜索的结果，类似于您在 VS Code 搜索中看到的内容。

## API 规范生成

Harness AI Code Agent 可以从您的代码库生成 API 规范，帮助您创建和维护准确的 API 文档。使用聊天功能或内联提示，您可以基于现有代码生成 OpenAPI（Swagger）规范。

### 生成 API 规范

提示 agent 生成 API 规范。例如：

- "为此文件中的 API 端点生成 OpenAPI 规范。"
- "基于我的 REST API 路由创建 Swagger 规范。"
- "以此项目中所有 API 端点作为 OpenAPI 3.0 规范记录。"

### 功能

- 查看生成的规范并将其保存到您的项目。
- 端点发现 — 分析代码库以识别 API 路由、方法和参数。
- Schema 生成 — 基于数据模型和类型创建请求/响应 schema。
- 文档提取 — 从代码注释、文档字符串和类型注解中提取描述。
- 格式支持 — 以 OpenAPI 3.0（YAML 或 JSON）和 Swagger 2.0 格式生成规范。

### 示例

使用 `@Codebase` 上下文提供器的聊天功能：

```
@Codebase Generate an OpenAPI 3.0 specification for all REST endpoints in this project, including request/response schemas and authentication requirements.
```

## 故障排除

### 网络问题

#### 配置证书

如果您的网络需要自定义证书，您需要在 config.json 中配置它们。

点击 Harness 聊天窗口中的齿轮图标可以打开 Harness AI Code Agent 的 config.json 文件。

在每个 "models" 数组条目中为 "Harness" 添加 requestOptions.caBundlePath，如下所示：

```json
{
  "models": [
    {
      "title": "Harness",
      ...
      "requestOptions": {
        "caBundlePath": "/path/to/cert.pem"
      }
    }
  ],
  ...
}
```

您还可以将 requestOptions.caBundlePath 设置为多个证书路径的数组。

#### VS Code 代理设置

如果您使用 VS Code 并且需要通过代理发出请求，您可能已经通过 VS Code 的代理服务器支持设置好了。要仔细检查是否已启用，请使用 cmd/ctrl + , 打开发设置并搜索"Proxy Support"。除非设置为"off"，否则 VS Code 负责向代理发出请求。

## 常见问题

### Harness AI Code Agent 使用什么信息来生成代码建议？

Harness AI Code Agent 使用当前文件的内容、正在编写的代码的上下文以及项目中引用的任何相关库或框架来生成准确的代码建议。此外，它使用工作区中的相关代码片段和模式来增强其建议并提供上下文感知的帮助。

### 在聊天功能中提问时是否需要选择一段代码？

不需要，在聊天功能中提问时不需要选择一段代码。聊天功能默认使用可见代码为生成相关答案和建议提供上下文。但是，如果选择的内容在编辑器的可见区域之外，您可以选择特定代码片段以将 agent 的响应集中在特定部分。

### Harness 是否存储我的代码或个人数据？

不，Harness AI Code Agent 不会存储您的代码或个人数据。该工具在设计时考虑到了隐私，确保所有代码建议和交互都在 IDE 内部本地处理。用于生成建议的任何数据都不会发送到外部服务器，保持您工作的机密性。

### Harness AI Code Agent 使用哪些大型语言模型？

Harness AI Code Agent 使用先进的大型语言模型，如 OpenAI 的 GPT-4 和 Gemini Flash。这些模型旨在理解和生成类人文本，使代码 agent 能够提供准确且上下文相关的代码建议和解释。

### Harness AI Code Agent 支持哪些编程语言？

Harness AI Code Agent 支持多种编程语言，包括但不限于 JavaScript、Python、Java、C#、Ruby、Go 和 TypeScript。该工具旨在理解这些语言的语法和语义，从而能够提供准确的代码建议和针对特定语言定制的生成。

### 什么是语言服务器，它是如何工作的？

语言服务器是 Harness AI Code Agent 的一个组件，运行在用户的机器上并与 IDE 通信。语言服务器的作用是生成响应用户查询所需的上下文，方法是从当前打开的标签页和工作区中的文件收集和处理信息。语言服务器还负责生成和向 Harness AI 后端发送请求。

### 聊天功能使用哪些上下文信息？

使用聊天功能时的上下文包括当前文件中的可见代码、项目中引用的相关库或框架、用户在聊天中的先前交互，以及适用的选定代码片段。这允许代码 agent 根据特定编码环境和用户的持续工作提供量身定制的响应。此外，用户可以通过根据需要添加对其他文件或库的引用来增强上下文。
