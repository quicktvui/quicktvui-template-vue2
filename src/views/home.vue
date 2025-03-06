<template>
  <div class="home-root-view-css">
    <div class="home-image-root-view-css">
      <img class="home-root-img-css"
           :src="logo">
      <img class="home-root-img-css"
           :src="require('../assets/ext-logo.png')">
      <img class="home-root-img-css"
           src="../assets/vue-logo.png">
    </div>
    <span class="home-root-text-view-css">{{ text }}</span>
  </div>
</template>

<script>

import {ESPage} from "@extscreen/es-core";
import logo from "@/assets/quick-logo.png";

export default {
  name: 'home',
  mixins: [ESPage],
  data() {
    return {
      text: 'Home Page',
      logo
    };
  },
  methods: {
    onESCreate(params) {

    },
  },
  components: {}
};
</script>

<style scoped>

.home-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-image-root-view-css {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.home-root-img-css {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

.home-root-text-view-css {
  font-size: 50px;
  color: black;
}

</style>
