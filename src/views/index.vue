<template>
  <div class="index-root-view-css">
    <img class="index-root-img-css"
         :src="logo">
    <span class="index-root-text-view-css">{{ text }}</span>
  </div>
</template>

<script>

import {ESLaunchManager, ESPage} from "@extscreen/es-core";
import logo from '../assets/logo.png'

export default {
  name: 'index',
  mixins: [ESPage],
  data() {
    return {
      text: 'Hello Quick TV UI ~',
      logo
    };
  },
  methods: {
    onESCreate(params) {
      setTimeout(() => {
        ESLaunchManager.launchAfterFinishESPage({
          url: 'home'
        })
      }, 2000)
    },
  },
  components: {}
};
</script>

<style scoped>

.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.index-root-img-css{
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

.index-root-text-view-css {
  font-size: 50px;
  color: black;
}

</style>
