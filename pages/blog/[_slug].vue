<template>
  <div class="blog">
    <h1>{{ data?.title }}</h1>
    <div v-if="data">
      <ContentRendererMarkdown :value="data" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
// const {data} = 
const { data } = await useAsyncData('blog', () => queryContent('blog', `${route.params._slug}`).findOne())
useContentHead(data?._value)
</script>

<style scoped>
.blog {
  max-width: 700px;
  margin: auto;
  padding: 40px 20px;
}

html {
  font-size: 62.5%;
}

/* Style headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 1rem 0;
  font-weight: bold;
  line-height: 1.2;
  color: slategray;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}

/* Style paragraphs */
p {
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 1.5;
}

/* Style links */
a {
  color: #0077c0;
  text-decoration: underline;
}

a:hover {
  color: #005c9e;
  text-decoration: none;
}

/* Style lists */
ul {
  margin: 1rem 0;
  list-style-type: disc;
  padding-left: 1.5rem;
}

ol {
  margin: 1rem 0;
  list-style-type: decimal;
  padding-left: 1.5rem;
}

/* Style blockquotes */
blockquote {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-left: 3px solid #ddd;
  font-style: italic;
}

/* Style code blocks */
pre {
  margin: 1rem 0;
  background-color: #f5f5f5;
  padding: 1rem;
  overflow: auto;
}

code {
  font-family: monospace;
  font-size: 0.9rem;
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}

/* Style images */
img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}
</style>