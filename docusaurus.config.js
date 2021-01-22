module.exports = {
  title: 'Story Mapping for Jira',
  tagline: 'The most powerful Story Mapping app on the Atlassian Marketplace',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/FreeIcon.svg',
  organizationName: 'Realigned Technologies Ltd', // Usually your GitHub org/user name.
  projectName: 'storymapping', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      style: 'dark',
      title: 'Story Mapping for Jira',
      logo: {
        alt: 'Story Mapping for Jira Logo',
        src: 'img/FreeIcon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Other Apps',
          items: [
            {
              label: 'Journey Mapping for Jira',
              to: 'https://google.ch',
            },
            {
              label: 'Read Confirmations for Confluence',
              to: 'docs/doc2/',
            },
            {
              label: 'Personal Dashboards for Confluence',
              to: 'docs/doc2/',
            },
            {
              label: 'Enhanced Sharing for Confluence',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Important Links',
          items: [
            {
              label: 'Support',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'EULA',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Privacy',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Consultancy',
          items: [
            {
              label: "Realigned Services",
              to: 'https://realigned.ch',
            },
            {
              label: 'Realigned Learning',
              href: 'https://realigned.work',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: '/static/img/realigned.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Realigned Technologies Ltd. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
