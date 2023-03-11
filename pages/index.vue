<template>
  <div class="cards">
    <nuxt-link v-for="item in users" :key="item.id" :to="`${item.user.username}/${item.id}`">
      <CardItem :data="item" />
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

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 24px;
  padding: 24px;
}
</style>