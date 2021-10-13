module.exports = {
    title: 'Story Mapping for Jira',
    tagline: 'Focus on user value & prioritize the right work',
    url: 'https://storymapping.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/FreeIcon.svg',
    organizationName: 'Realigned Technologies Ltd', // Usually your GitHub org/user name.
    projectName: 'storymapping', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true
        },
        navbar: {
            style: 'dark',
            title: 'Story Mapping for Jira',
            logo: {
                alt: 'Story Mapping for Jira Logo',
                src: 'img/StoryMapIcon.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {to: 'blog', label: 'Blog', position: 'left'},
                {
                    to: 'https://marketplace.atlassian.com/1224357',
                    label: 'Download free',
                    position: 'left',
                    target: '_blank'
                },
                {
                    to: 'https://marketplace.atlassian.com/1224417',
                    label: 'Try Pro!',
                    position: 'left',
                    target: '_blank'
                },
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
                            to: 'https://journeymapping.app',
                        },
                        {
                            label: 'Read Confirmations for Confluence',
                            to: 'https://realigned.io/readconfirmations',
                        },
                        {
                            label: 'Personal Dashboards for Confluence',
                            to: 'https://realigned.io/personaldashboards',
                        },
                        {
                            label: 'Enhanced Sharing for Confluence',
                            to: 'https://realigned.io/enhancedsharing',
                        },
                    ],
                },
                {
                    title: 'Important Links',
                    items: [
                        {
                            label: 'Support',
                            href: 'https://realignedtechnologies.atlassian.net/servicedesk/customer/portals',
                            target: '_blank'
                        },
                        {
                            label: 'EULA',
                            href: 'https://docz.realignedtechnologies.com/eula',
                        },
                        {
                            label: 'Privacy',
                            href: 'https://docz.realignedtechnologies.com/privacypolicy',
                        },
                    ],
                },
                {
                    title: 'Consultancy',
                    items: [
                        {
                            label: "Realigned Services",
                            to: 'https://realigned.ch',
                            target: '_blank'
                        },
                        {
                            label: 'Realigned Learning',
                            href: 'https://realigned.work',
                            target: '_blank'
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Realigned Logo',
                src: '/img/RealignedLogo.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Realigned Technologies Ltd. `,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.

                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.

                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    scripts: [
        {
            /** <script async defer data-domain="storymapping.app" src="https://plausible.io/js/plausible.js"></script> **/
            src: "https://dev8000.realigned.tech/js/plausible.js",
            "data-domain": "storymapping.app",
            async: true,
            defer: true
        }
    ],
};
