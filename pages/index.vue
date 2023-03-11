<template>
  <div>
    <nuxt-link :to="slug" class="card" v-for="{ slug, title } in users" :key="slug">
      <div style="text-align:center">
        <h3>{{ title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const page = ref(1);
const { data: users, pending, refresh, error } = await useFetch(() => `articles?tag=nuxt&state=rising&page=${page.value}`, { baseURL: config.public.apiBase }
);
console.log(users, 'users');

</script>

<style scoped>
.list {
  display: gird !important;
  grid-template: repeat(4, 1fr);
}
</style>