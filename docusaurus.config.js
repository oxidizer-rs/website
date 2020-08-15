module.exports = {
  title: "Oxidizer",
  tagline: "A Rust ORM based on tokio-postgres and refinery",
  url: "https://oxidizer-rs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "oxidizer-rs", // Usually your GitHub org/user name.
  projectName: "oxidizer-rs.github.io", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      hideOnScroll: false,
      title: "Oxidizer",
      logo: {
        alt: "Oxidizer Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://crates.io/crates/oxidizer",
          label: "Crate",
          position: "right",
        },
        {
          href: "https://github.com/oxidizer-rs/oxidizer",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Oxidizer`,
    },
    googleAnalytics: {
      trackingID: "UA-175460494-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    // algolia: {
    //   apiKey: '',
    //   indexName: 'oxidizer-rs',
    // },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "getting-started",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/oxidizer-rs/website/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/oxidizer-rs/website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
