
<template>
  <div class="layout">
    <div>
      <header class="ds-header" id="site-header">
        <div class="container">
          <div class="ds-header-inner">
            <!-- logo -->
            <nuxt-link to="/" class="ds-logo"> <span>P</span>Phú Dev</nuxt-link>
            <!-- logo -->
            <!-- social -->
            <ul class="ds-social">
              <li>
                <a href="https://github.com/vnphu" target="_blank"><i class="ri-github-fill"></i></a>
              </li>
              <li>
                <a href="https://fb.com/vnp117" target="_blank"><i class="ri-facebook-box-fill"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vnphu" target="_blank"><i class="ri-linkedin-fill"></i></a>
              </li>
              <li>
                <nuxt-link to="/about"><i class="ri-profile-fill"></i></nuxt-link>
              </li>
            </ul>
            <!-- social -->
          </div>
        </div>
      </header>
      <div :style="{ padding: '20px' }">
        <div class="layout__page">
          <NuxtPage></NuxtPage>
        </div>
      </div>
      <footer class="layout-footer-center">2023 &copy; Phú Dev</footer>
    </div>
  </div>
</template>
<script setup>
const menu = reactive([
  {
    name: 'Home',
    slug: '/'
  },
  { name: 'Blog', slug: 'blog' },
  {
    name: 'About',
    slug: '/about'
  }

])
</script>

<style scoped lang="scss">
.layout__page {
  min-height: 60vh;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

.layout-footer-center {
  text-align: center;
}

.layout .ivu-layout-header {
  background: #191a23;
}

.layout-topMiddleBottom .ivu-menu-light {
  background: none;
  color: #fff
}

.ivu-layout-header {
  padding: 0;
  background: none;
}

.layout .ivu-layout-header {
  background: none;
}

.menu__item {
  font-size: 18px;
  color: #191a23;
  margin: 10px;
  text-transform: capitalize;
}
</style>
