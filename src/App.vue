<template>
  <div class="main">
    <Navigation />
    <router-view v-bind:cities="cities"/>
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseinit";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data() {
    return {
      APIkey: "349ec1dd769429e0244aac8ecd5240d3",
      cities: [],
    };
  },

  created() {
    this.getCityWeather();
  },

  methods: {
    getCityWeather() {
      let firebaseDB = db.collection("cities");

      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async (doc) => {
          if (doc.type === "added") {
            try {
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                  doc.doc.data().city
                }&units=metric&lang=it&appid=${this.APIkey}`
              );
              const data = response.data;
              firebaseDB
                .doc(doc.doc.id)
                .update({
                  currentWeather: data,
                })
                .then(() => {
                  this.cities.push(doc.doc.data());
                });
            } catch (err) {
              console.log(err);
            }
          }
        });
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
  font-family: "Quicksand", sans-serif;
}

.main {
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;

  .container {
    padding: 0 20px;
  }
}
</style>
