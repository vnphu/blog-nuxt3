<template>
  <div class="profile-card">
    <div class="profile-card-header">
      <div class="profile-image" :style="{ backgroundImage: `url(${user.profile_image})` }"></div>
      <div class="profile-info">
        <h3 class="profile-name">{{ user.name }}</h3>
        <p class="profile-desc">{{ user.location }}</p>
      </div>
    </div>

    <div class="profile-card-body">
      <ul class="status">
        <li>
          <span class="status-value">532</span>
          <span class="status-text">Posts</span>
        </li>

        <li>
          <span class="status-value">1.5m</span>
          <span class="status-text">Followers</span>
        </li>

        <li>
          <span class="status-value">423</span>
          <span class="status-text">Following</span>
        </li>
      </ul>

      <div class="action">
        <a :href="user.website_url" target="_blank" class="btn btn-pink">Follow</a>
        <button class="btn btn-gray-outline">Message</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const config = useRuntimeConfig()
const route = useRoute()
const { data: user, pending, refresh, error } = await useFetch(() => `users/by_username?url=${route.params._username}`, { baseURL: config.public.apiBase }
);
console.log(user);

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

*,
*::after,
*::before {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #600b28;
}

.profile-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.profile-image {
  position: relative;
  top: -60px;
  border-radius: 1rem;
  background-image: url(https://yt3.ggpht.com/ytc/AKedOLSB-oR-xmvVSZXJ3gbK12uvv0AJUvajwxMie_R_uw=s900-c-k-c0x00ffffff-no-rj);
  width: 75%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: auto;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4);
}

.profile-info {
  text-align: center;
  margin-top: -3rem;
  margin-bottom: 1rem;
}

.profile-info>.profile-name {
  color: #212121;
}

.profile-info>.profile-desc {
  color: #666666;
  font-size: 0.9rem;
}

.status {
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 1rem;
  margin-bottom: 1.3rem;
}

.status-value {
  color: #212121;
  font-weight: 700;
}

.status-text {
  font-size: 0.8rem;
  color: #7c7c7d;
}

.action {
  display: flex;
  justify-content: space-between;
}

.btn {
  border: none;
  padding: 0.8em 1.9em;
  border-radius: 0.35rem;
  cursor: pointer;
  font-weight: 600;
}

.btn-pink {
  background: #b82151;
  color: white;
}

.btn-gray-outline {
  border: 1px solid;
  background: transparent;
  color: #b82151;
}

.profile-card-body {
  width: 100%;
}

.status {
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>