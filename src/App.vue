<template>
  <div class="main">
    <Modal v-if="modalOpen" v-on:close-modal="toggleModal" v-bind:APIkey="APIkey"/>
    <Navigation v-on:add-city="toggleModal"  />
    <router-view v-bind:cities="cities" />
  </div>
</template>

<script>
import axios from "axios";
import db from "./firebase/firebaseinit";
import Navigation from "./components/Navigation.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Modal,
  },

  data() {
    return {
      APIkey: "349ec1dd769429e0244aac8ecd5240d3",
      cities: [],
      modalOpen: null,
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
    toggleModal() {
      this.modalOpen = !this.modalOpen;
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
