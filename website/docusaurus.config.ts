import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Harness Agents 文档',
  tagline: 'Harness 官方 AI Agent 中文文档',
  favicon: 'img/favicon.ico',
  url: 'https://harness-agent-doc-cn.github.io',
  baseUrl: '/',
  organizationName: 'harness-agent-doc-cn',
  projectName: 'harness-agent-doc-cn',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: '../docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/harness-agent-doc-cn/harness-agent-doc-cn/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Harness Agents',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          href: '/docs',
          label: '文档',
        },
        {
          href: 'https://developer.harness.io/docs/platform/harness-ai/harness-agents',
          label: '官方文档',
          position: 'right',
        },
        {
          href: 'https://github.com/harness/harness-skills',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'Harness AI 概述',
              to: '/docs/platform/harness-ai/overview',
            },
          ],
        },
        {
          title: '相关资源',
          items: [
            {
              label: '官方文档',
              href: 'https://developer.harness.io/docs/platform/harness-ai/harness-agents',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/harness/harness-skills',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Harness Agents 中文文档. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
