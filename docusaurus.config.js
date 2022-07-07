// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lava Docs',
  tagline: 'Decentralizing Web3 Infra',
  url: 'https://docs.lavanet.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lavanet',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/lavanet/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-segment",
      {
        apiKey: "DQPhWiY1Diy8ywBu7fXgqLyii8HR3cXD"
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lava Docs',
        logo: {
          alt: 'Lava Docs Logo',
          src: 'img/volcano_emoji.png',
        },
        items: [
          {
            label: 'Access Web3 APIs ⚡️',
            position: 'left',
            to: 'gateway-access',
          },
          {
            label: 'Power-up Lava 🌋',
            position: 'left',
            to: 'power-lava',
          },
          {
            href: 'https://github.com/lavanet/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Lava. Docs built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
