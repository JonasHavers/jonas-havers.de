<template>
    <ul>
        <li v-for="page in blogPages">
          <span class="date">{{ formattedDate(page) }}</span>
          <span class="link">
            <a v-if="!page.frontmatter.externalUrl" :href="page.path" :title="page.title">
              {{ page.title }}
            </a>
            <a v-else :href="page.frontmatter.externalUrl" :title="page.title" target="_blank">
              {{ page.title }}
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
            </a>
            <span v-if="page.frontmatter.externalSite" class="external-site">@ {{ page.frontmatter.externalSite }}</span>
            <span class="language">({{ page.frontmatter.lang }})</span>
          </span>
          <span class="description">{{ description(page) }}</span>
        </li>
    </ul>
</template>

<script>
export default {
  props: ["pages"],
  computed: {
    blogPages() {
      return this.pages
        .filter(page => page.path.startsWith('/articles/'))
        .filter(page => page.frontmatter.date)
        .sort(
          (p1, p2) =>
            new Date(p2.frontmatter.date) - new Date(p1.frontmatter.date)
        );
    }
  },
  methods: {
    formattedDate(page) {
      return page.frontmatter.date.substring(0, 10);
    },
    description(page) {
      return page.frontmatter.meta
        .filter(meta => meta.name === "description")
        .map(meta => meta.content)[0];
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: square;
  margin-bottom: 1.8rem;
}
.external-site {
  font-style: italic;
}
.description {
  display: block;
  color: #444;
}
.date, .external-site, .language, .description {
  font-size: 90%;
}
</style>