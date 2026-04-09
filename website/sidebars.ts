import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '欢迎',
    },
    {
      type: 'category',
      label: 'Harness AI',
      collapsed: false,
      items: [
        'platform/harness-ai/overview',
        'platform/harness-ai/harness-agents',
        'platform/harness-ai/code-agent',
        'platform/harness-ai/harness-skills',
        'platform/harness-ai/support-agent',
        'platform/harness-ai/devops-agent',
        'platform/harness-ai/ci-agent',
        'platform/harness-ai/release-agent',
        'platform/harness-ai/harness-create-with-ai',
        'platform/harness-ai/effective-prompting-ai',
      ],
    },
  ],
};

export default sidebars;
