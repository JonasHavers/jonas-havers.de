module.exports = {
  title: "Jonas Havers",
  description: "Freelance Software Developer",
  // ga: "UA-118295679-1",
  markdown: {
    anchor: { permalink: false }
  },
  head: [
    [
      "meta",
      { "http-equiv": "content-type", content: "text/html; charset:UTF-8" }
    ],
    ["meta", { name: "x-ua-compatible", content: "IE:edge" }],
    ["meta", { name: "HandheldFriendly", content: "True" }],
    ["meta", { name: "MobileOptimized", content: "320" }],
    ["meta", { "http-equiv": "cleartype", content: "on" }],
    ["meta", { name: "theme-color", content: "#3C3C3B" }],
    ["meta", { name: "msapplication-TileColor", content: "#3C3C3B" }],
    ["meta", { name: "author", content: "Jonas Havers" }],
    ["meta", { property: "og:site_name", content: "jonas-havers.de" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:url", content: "http://jonas-havers.de" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Jonas Havers - Freelance Software Engineer"
      }
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Jonas Havers is a remote working Freelance Software Engineer that helps product teams build complex web applications for the cloud."
      }
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@JonasHavers" }],
    ["meta", { name: "twitter:url", content: "http://jonas-havers.de" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Jonas Havers - Freelance Software Engineer"
      }
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content: "Jonas Havers is a remote working Freelance Software Engineer that helps product teams build complex web applications for the cloud."
      }
    ]
  ],
  themeConfig: {
    search: true,
    editLinks: false,
    logo: "/logo.svg",
    footer: {
      author: "Jonas Havers",
      legalUrl: "/legal-notice/"
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Articles", link: "/articles/" },
      {
        text: "Profiles",
        items: [
          { text: "Twitter", link: "https://twitter.com/JonasHavers" },
          { text: "GitHub", link: "https://github.com/JonasHavers" },
          { text: "Medium", link: "https://medium.com/@jonashavers" },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/jonashavers/"
          },
          { text: "XING", link: "https://www.xing.com/profile/Jonas_Havers" }
        ]
      }
    ]
  }
};
