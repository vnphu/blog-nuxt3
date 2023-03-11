<template>
  <div class="card">
    <div class="content-box">
      <h1 class="card-title">{{ data.title }}</h1>
      <p class="card-content">
        {{ data.description }}
      </p>
      <span class="see-more">See More</span>
    </div>
    <div class="date-box">
      <span class="month">{{ moment(data.created_at).format('MMMM') }}</span>
      <span class="date">{{ moment(data.created_at).format('DD') }}</span>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
const props = defineProps({
  data: {
    type: Object
  }

})
console.log(props.data);
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;500;700;800;900;1000&display=swap');


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}

body {
  background-color: #181a1f;
  padding: 0px 50px;

}


.card {
  padding-top: 100px;
  transform-style: preserve-3d;
  background-image: url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: center center;
  width: 100%;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;

  &:hover {
    background-position: 80% 20%;
    transform: rotate3d(0.5, 1, 0, 30deg);
  }
}

.content-box {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.811);
  border-radius: 0px 0px 10px 10px;
  box-shadow: rgba(0, 115, 255, 0.925) 0px 20px 50px -25px, ;
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  transition: all .5s ease-in-out;
  padding: 50px 25px 25px 25px;
  transform-style: preserve-3d;


  .card-title {
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);

    &:hover {
      transform: translate3d(0px, 0px, 50px);
    }
  }

  .card-content {
    padding-top: 15px;
    font-size: 12px;
    color: rgb(185, 185, 185);
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);

    &:hover {
      transform: translate3d(0px, 0px, 50px);
    }
  }

  .see-more {
    display: block;
    font-weight: 900;
    font-size: 11px;
    text-transform: uppercase;
    color: rgb(0, 136, 255);
    padding-top: 15px;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);

    &:hover {
      transform: translate3d(0px, 0px, 50px);
    }
  }
}

.date-box {
  position: absolute;
  top: 75px;
  left: 25px;
  height: 60px;
  width: 70px;
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgb(0, 102, 255) 0px 20px 60px 0px, rgb(0, 200, 255) 0px 18px 36px -18px;
  transform: translate3d(0px, 0px, 50px);

  span {
    display: block;
    text-align: center;
  }

  .month {
    color: white;
    font-size: 11px;
    font-weight: 700;
  }

  .date {
    font-size: 20px;
    font-weight: 900;
    color: rgb(0, 136, 255);
  }
}

.card2 {
  filter: hue-rotate(150deg);
}

.card3 {
  filter: hue-rotate(300deg);
}

.card4 {
  filter: hue-rotate(90deg);
}
</style>