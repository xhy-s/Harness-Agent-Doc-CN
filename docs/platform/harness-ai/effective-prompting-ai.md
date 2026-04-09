---
slug: /platform/harness-ai/effective-prompting-ai
---

# Effective Prompting

Harness AI 从自然语言生成各种 Harness Platform entities。本指南展示如何编写有效的提示，包含弱提示与强提示的对比示例。

---

## 为什么提示很重要

Harness AI 在提示清晰、详细且具体时表现最佳。对于 DevOps 使用案例，"create a pipeline"和"create a CI→CD pipeline that builds a Docker image and deploys to Kubernetes"之间的区别就是模糊的生产级 pipeline 和生产级 pipeline 之间的区别。

---

## 提示指南

- **Be specific**：命名 repos、branches、connectors、services、perspectives 和部署策略。
- **Use action words**：以 Generate、Create、Define 开头。
- **Provide inputs**：列出参数如 `IMAGE_TAG`、`REPLICA_COUNT`。
- **Focus**：每个提示一个资源更可靠。
- **Iterate**：从宽泛开始，用更多细节细化。

---

## Pipeline 提示

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| Create a pipeline for my app | Generate a Harness CI→CD pipeline that builds a Docker image and pushes to Dockerhub. Add a CD stage to deploy... | More detailed, includes build, push, and deployment targets. |
| Make a pipeline | Create a pipeline that runs unit tests for python, builds with Dockerfile, scans image with semgrep and deploys to staging using a Rolling strategy. Use GitHub connector rohan-git. | Specifies language, build, scan, deploy, strategy, and connector. |

---

## Service 提示

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| Make a Kubernetes service | Generate a Kubernetes service definition named portal using Helm with chart path /cd/chart/portal. Expose variables: IMAGE, TAG, REPLICA_COUNT. Include artifact references. | Names, chart path, exposed variables, artifact refs. |

---

## Environment 提示

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| Create an environment | Generate an Environment named staging (type: PreProduction) | Defines name and environment type explicitly. |

---

## Secret 提示

:::important

Harness 创建没有值的 secret 对象。您必须在 UI 中手动添加值。Secret 值永远不会发送给 AI。

:::

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| Add a secret | Create a Secret Text named docker-hub-token. Store in default Secret Manager. | Includes type, name, and storage location. |

---

## Connector 提示

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| Make a Docker connector | Generate a Docker Registry connector named canary-docker pointing to harness/canary with credentials from secret refs... | Names, repo, and credential refs. |

---

## 其他提示指南

### 1. 说明资源范围

始终指定资源应该在 Account、Org 还是 Project 级别创建。

```text
Generate a pipeline at the Project scope that uses the staging environment and GitHub connector rohan-git.
```

### 2. 包含运行时输入

用 `<+input>` 标注您希望参数化的变量。

```text
Create a Kubernetes service with IMAGE and TAG as runtime inputs, defaulting to `<+input>`.
```

### 3. 指定部署策略

明确提及策略如 Rolling、Blue/Green 或 Canary。

```text
Create a production pipeline with a Canary deployment using 25%-75% rollout strategy.
```

### 4. 清晰链接 Stages

描述 stages 的顺序并包含门控条件。

```text
Generate a CI pipeline with build → test → deploy stages, add a manual approval before deploy, and notify Slack after success.
```

### 5. 使用迭代提示

从基本资源开始，在后续提示中添加细节进行细化。

**First Prompt:**

```text
Create a pipeline that builds and deploys to staging.
```

**Follow up Prompt:**

```text
Add a canary rollout strategy to the deployment stage.
```

---

## 最佳实践检查清单

- [ ] 提及目标平台（Kubernetes、ECS、Lambda、VM、AWS、GCP）
- [ ] 包括 connector 名称和 secret 引用
- [ ] 添加 environment 和 service 详细信息
- [ ] 指定部署策略（Rolling、Canary、Blue/Green）用于 DevOps 使用案例
- [ ] 使用变量以提高灵活性（`IMAGE_TAG`、`SERVICE_NAME`）
