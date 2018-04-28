<template>
    <ul>
        <li v-for="page in blogPages"><span class="date">{{ formattedDate(page) }}</span>: <span class="link"><a :href="page.path" :title="page.title">{{ page.title }}</a></span>
        <span class="description"><small>{{ description(page) }}</small></span></li>
    </ul>
</template>

<script>
export default {
  props: ["pages"],
  computed: {
    blogPages() {
      return this.pages
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
  margin-bottom: 2rem;
}
.date {
  font-size: 0.9rem;
}
.description {
  display: block;
  color: #444;
}
</style>