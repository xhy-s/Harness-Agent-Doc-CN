---
slug: /platform/harness-ai/harness-create-with-ai
---

# Create with Harness AI

Harness AI 让您可以通过自然语言提示生成各种 Harness 平台资源，如 Pipeline、Cloud Cost、CD entities。使用这些确认的示例提示来快速在 Harness 内创建配置。

---

## 工作原理

对于 DevOps 和平台 Automation 使用案例：

1. 在您的项目中打开 Harness AI。
2. 复制示例提示并调整值（connectors、namespaces、repo names 等）。
3. 审查生成的 YAML，保存并运行您的 pipeline。

:::tip

在提示中尽可能具体——包括部署策略、connector 名称或 namespaces 等细节以获得最佳结果。

:::

对于 Cost and Efficiency 使用案例：

1. 在 CCM 中打开 Harness AI
2. 复制示例提示并调整提示参数
3. 创建前审查配置

---

## DevOps 示例提示

### 创建 Pipelines

```text
Generate a Harness CI→CD pipeline that builds a Docker image and pushes to Dockerhub. Add a CD stage to deploy a Kubernetes service to namespace dev on cluster connector k8s-dev. Include variables for IMAGE_TAG and REPLICA_COUNT, and output only valid YAML
```

### 创建 Services

```text
Generate a Kubernetes service definition named portal using Helm with chart path /cd/chart/portal. Expose variables: IMAGE, TAG, REPLICA_COUNT. Include artifact reference to <+input> and config files section.
```

### 创建 Environments

```text
Generate an Environment named staging (type: PreProduction)
```

### 创建 Secrets

:::important

创建 secrets 时，Harness 将创建没有值的 Secret 对象。您必须导航到列表页面中的创建 secret 以提供值。Harness 不会将 secret 值发送到 AI 模型。敏感数据在任何 AI 请求之前都会被剥离。

:::

```text
Create a Secret Text named docker-hub-token. Store in default Secret Manager.
```

### 创建 Connectors

```text
Generate a Docker Registry connector named canary-docker pointing to harness/canary with credentials from secret refs usernameRef: canary and passwordRef: docker-hub-token.
```

### 创建多模块 Pipelines

```text
Create a pipeline with a CI stage to build my app, an STO stage to scan for vulnerabilities, and a CD stage to deploy to production.
```

---

## 提示指南

| Weak Prompt | Strong Prompt |
|-------------|---------------|
| Create a pipeline for my app | Generate a Harness CI→CD pipeline that builds a Docker image and pushes to Dockerhub... |
| Make a Kubernetes service | Generate a Kubernetes service definition named portal using Helm with chart path... |
| Add a secret | Create a Secret Text named docker-hub-token. Store in default Secret Manager. |

---

## 最佳实践

- 提及目标平台（Kubernetes、ECS、Lambda、VM、AWS、GCP）
- 包括 connector 名称和 secret 引用
- 添加 environment 和 service 详细信息
- 指定部署策略（Rolling、Canary、Blue/Green）
- 使用变量以提高灵活性（`IMAGE_TAG`、`SERVICE_NAME`）
