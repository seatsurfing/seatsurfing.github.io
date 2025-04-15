// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Seatsurfing',
  tagline: 'Open Source solution for desk sharing, room reservation, and co-working in your organization.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://seatsurfing.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seatsurfing', // Usually your GitHub org/user name.
  projectName: 'seatsurfing.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  clientModules: [
    require.resolve('./_matomo.js'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Seatsurfing',
          src: 'img/seatsurfing.svg',
          srcDark: 'img/seatsurfing_white.svg',
        },
        items: [
          { to: '/sign-up', label: 'Sign up', position: 'left' },
          { to: '/pricing', label: 'Pricing', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/seatsurfing/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Seatsurfing',
            items: [
              {
                label: 'Create free account',
                to: 'sign-up/',
              },
              {
                label: 'Pricing',
                to: 'pricing/',
              },
              {
                label: 'Documentation',
                to: 'docs/',
              },
              {
                label: 'Blog',
                to: 'blog/',
              },
              {
                label: 'Support',
                to: 'support/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Status',
                href: 'https://status.seatsurfing.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/seatsurfing/',
              },
              {
                label: 'Docker Hub',
                href: 'https://hub.docker.com/u/seatsurfing',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Imprint',
                to: 'imprint/',
              },
              {
                label: 'Terms',
                to: 'terms/',
              },
              {
                label: 'Privacy Policy',
                to: 'privacy-policy/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Seatsurfing GmbH.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}
