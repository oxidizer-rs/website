module.exports = {
  title: "Oxidizer",
  tagline: "A Rust ORM based on tokio-postgres and refinery",
  url: "https://oxidizer-rs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "oxidizer-rs",
  projectName: "oxidizer-rs.github.io",
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
    image: "img/oxidizer.png",
    navbar: {
      hideOnScroll: false,
      title: "Oxidizer",
      logo: {
        alt: "Oxidizer Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          href: "https://crates.io/crates/oxidizer",
          label: "Crate",
          position: "left",
        },
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/oxidizer-rs/oxidizer",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://gitter.im/oxidizer-rs",
          label: "Gitter",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Oxidizer`,
    },
    googleAnalytics: {
      trackingID: "UA-175460494-1",
      anonymizeIP: true,
    },
    algolia: {
      apiKey: "595d0ce3168237df0023d3925c8a3675",
      indexName: "oxidizer",
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/oxidizer-rs/website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
