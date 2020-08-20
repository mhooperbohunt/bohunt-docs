module.exports = {
  title: 'Bohunt Wokingham IT Docs',
  tagline: 'A simple documentation for IT Support at Bohunt Wokingham',
  url: 'https://bohunt-docs.vercel.app/',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'mhooperbohunt', // Usually your GitHub org/user name.
  projectName: 'bohunt-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bohunt Wokingham IT Docs',
      logo: {
        alt: 'Bohunt IT Docs',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/ad',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/mhooperbohunt/bohunt-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
     
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://bohuntwokingham.co.uk">Bohunt Wokingham</a>, Application Created by <a href="https://machooper.com">Mac Hooper</a>`,
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
            'https://github.com/mhooperbohunt/bohunt-docs/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mhooperbohunt/bohunt-docs/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
