<template>
  <!-- banner -->

  <div class="ds-banner">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <figure>
            <img src="@/assets/images/profile-image.jpg" />
          </figure>
        </div>
        <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <section>
            <h1>
              <span>HI THERE</span>
              I’m Như Phú <br />
              Frontend Developer
            </h1>
            <ul class="ds-numbervalulist">
              <li>
                <strong>3+</strong>
                <span>Experience</span>
              </li>
              <li>
                <strong>10+</strong>
                <span>Projects</span>
              </li>
              <li>
                <strong>10+</strong>
                <span>Happy Clients</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- banner -->

  <!-- about -->
  <div class="ds-about-section">
    <div class="container">
      <section>
        <h2 class="ds-heading">About Me</h2>
        <p>
          My name is NHƯ PHÚ and I am a frontend developer with experience in
          both web and app development. I have a passion for creativity and
          love exploring new technologies and trends in the industry. I am
          constantly seeking opportunities to learn and expand my skillset,
          always striving to stay up-to-date with the latest tools and
          techniques. As a developer, I strongly believe in the importance of
          communication and empathy. I am an active listener, and I work hard
          to understand the needs of my clients and users to create a seamless
          and enjoyable experience for them. Thank you for considering me for
          any opportunities that may come my way.
        </p>
        <div class="ds-button-sec text-center">
          <a href="mailto:vonhuphu117@gmail.com" class="ds-button">Contact me</a>
        </div>
      </section>
    </div>
  </div>
  <!-- about -->

  <!--  Skills -->
  <div class="ds-skills-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="ds-heading">Core Skills</h2>
          <ul class="ds-skills-list">
            <li>JavaScript</li>
            <li>VueJs</li>
            <li>NuxtJs</li>
            <li>VueX</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>Laravel</li>
            <li>CSS</li>
            <li>SCSS/SASS</li>
            <li>Gulp</li>
            <li>PWAs</li>
            <li>Git</li>
            <li>Github/Gitlab</li>
            <li>Figma</li>
          </ul>
        </div>
        <!-- <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 class="ds-heading">Other Skills</h2>
            <ul class="ds-skills-list">
              <li>Storyblok</li>
              <li>PWAs</li>
              <li>Responsive Web Design</li>
              <li>React</li>
              <li>Vuetify</li>
            </ul>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({

})
useHead({
  title: 'About',
})
</script>

<style scoped></style>