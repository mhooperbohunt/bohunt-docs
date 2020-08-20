module.exports = {
  title: 'Bohunt Wokingham IT Docs',
  tagline: 'A simple documentation for IT Support at Bohunt Wokingham',
  url: 'https://bohunt-docs.vercel.app/',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  organizationName: 'mhooperbohunt',
  projectName: 'bohunt-docs',
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
    themeConfig: {
      colorMode: {
        defaultMode: 'dark',
      },
      // announcementBar: {
      //   id: 'announcement', 
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc', 
      //   textColor: '#091E42', 
      // },
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/mhooperbohunt/bohunt-docs/master/',
        },
        blog: {
          showReadingTime: true,
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
