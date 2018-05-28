module.exports = {
  title: "Jonas Havers",
  description: "Freelance Software Engineer",
  // ga: "UA-118295679-1",
  markdown: {
    anchor: {
      permalink: false
    }
  },
  head: [
    [
      "meta",
      {
        "http-equiv": "content-type",
        content: "text/html; charset:UTF-8"
      }
    ],
    ["meta", {
      name: "x-ua-compatible",
      content: "IE:edge"
    }],
    ["meta", {
      name: "HandheldFriendly",
      content: "True"
    }],
    ["meta", {
      name: "MobileOptimized",
      content: "320"
    }],
    ["meta", {
      "http-equiv": "cleartype",
      content: "on"
    }],
    ["meta", {
      name: "theme-color",
      content: "#3C3C3B"
    }],
    ["meta", {
      name: "msapplication-TileColor",
      content: "#3C3C3B"
    }],
    ["meta", {
      name: "author",
      content: "Jonas Havers"
    }],
    ["meta", {
      property: "og:site_name",
      content: "jonas-havers.de"
    }],
    ["meta", {
      property: "og:locale",
      content: "en_US"
    }],
    ["meta", {
      property: "og:url",
      content: "https://jonas-havers.de"
    }],
    ["meta", {
      property: "og:image",
      content: "https://jonas-havers.de/jonas-havers.jpg"
    }],
    ["meta", {
      property: "og:type",
      content: "website"
    }],
    ["meta", {
      name: "twitter:card",
      content: "summary"
    }],
    ["meta", {
      name: "twitter:creator",
      content: "@JonasHavers"
    }],
    ["meta", {
      name: "twitter:site",
      content: "@JonasHavers"
    }],
    ["meta", {
      name: "twitter:url",
      content: "https://jonas-havers.de"
    }]
  ],
  themeConfig: {
    search: true,
    editLinks: false,
    lastUpdated: false,
    sidebarDepth: 0,
    sidebar: false,
    logo: "/logo.svg",
    footer: {
      author: "Jonas Havers",
      legalUrl: "/legal-notice/"
    },
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Articles",
        link: "/articles/"
      },
      {
        text: "Profiles",
        items: [{
            text: "Twitter",
            link: "https://twitter.com/JonasHavers"
          },
          {
            text: "GitHub",
            link: "https://github.com/JonasHavers"
          },
          {
            text: "Medium",
            link: "https://medium.com/@jonashavers"
          },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/jonashavers/"
          },
          {
            text: "XING",
            link: "https://www.xing.com/profile/Jonas_Havers"
          }
        ]
      }
    ]
  }
};