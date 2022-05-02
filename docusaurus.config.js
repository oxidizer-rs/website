/** @type {import('@docusaurus/types').Config} */
const config = {
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
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    announcementBar: {
      id: "archived",
      content:
        "Unfortunately, we have not been able to allocate time and effort to push Oxidizer forward. The code will remain available in GitHub in archived mode and everyone is welcome to fork and work on features as they wish.",
      isCloseable: false,
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
      copyright: `Copyright © 2020 Oxidizer`,
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
        googleAnalytics: {
          trackingID: "UA-175460494-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
}

module.exports = config
