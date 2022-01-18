<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name : "App",

  data() {
    return {
      APIkey : "349ec1dd769429e0244aac8ecd5240d3",
      city : "Verona",
    }
  },

  created() {
    this.getCurrentWeather();
  },

  methods: {
    getCurrentWeather() {
      axios.get(
        `api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=it&appid=${this.APIkey}`
      ).then(res => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }
</style>
