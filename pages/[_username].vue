<template>
  <div class="page__detail">
    <div class="page">
      <NuxtPage />
    </div>
    <CardProfile />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page__detail {
  display: flex;
  justify-content: space-between;
  padding: 24px;
  gap: 24px;

  .page {
    width: 75%;
  }

  .profile-card {
    width: 25%;
    height: max-content;
    min-width: 300px;
  }
}
</style>