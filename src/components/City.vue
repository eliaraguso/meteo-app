<template>
  <div class="city">
      <span>{{this.city.city}}</span>
      <div class="weather">
          <span>{{Math.round(this.city.currentWeather.main.temp)}}&deg;</span>
          <img :src="require(`../../public/conditions/${this.city.currentWeather.weather[0].icon}.png`)" alt="">
      </div>
      <div class="video">
          <video autoplay loop muted :src="require(`../../public/videos/${this.city.currentWeather.weather[0].icon}.mp4`)"></video>
      </div>
  </div>
</template>

<script>
export default {
    name: "City",
    props: ['city'],
    created() {
        console.log(this.city);
    },
}
</script>

<style lang="scss" scoped>

</style>