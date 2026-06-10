import {themes} from 'prism-react-renderer';

const config = {
  title: 'Novel Map',
  tagline: '学习路线图',
  favicon: 'img/favicon.ico',
  url: 'https://lyy351.github.io',
  baseUrl: '/Novel_Map/',
  onBrokenLinks: 'throw',
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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/lyy351/Novel_Map/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Novel Map',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/docs', label: '教程', position: 'left'},
        {to: '/labs', label: '实验室', position: 'left'},
        {to: '/roadmaps/pytorch', label: 'PyTorch路线', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Novel Map`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

export default config;
