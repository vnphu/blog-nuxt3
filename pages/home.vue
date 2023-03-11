<template>
  <Space direction="vertical">
    <Space wrap>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
    </Space>
    <Space wrap>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </Space>
  </Space>
</template>

<script setup lang="ts">
definePageMeta({

})
</script>

<style scoped></style>