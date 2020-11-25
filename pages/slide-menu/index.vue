<template>
  <div class="slide-menu-index">
    <h1>slide-menu</h1>

    <nuxt-link to="/" class="top-link">
      <p>navigate to top page</p>
    </nuxt-link>

    <div class="button" @click="toggleShowSlideMenu">click here to toggle slide menu</div>

    <ume-slide-menu v-model="showSlideMenu" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  showSlideMenu: boolean
}

export default Vue.extend({
  data(): Data {
    return {
      showSlideMenu: false,
    }
  },

  methods: {
    toggleShowSlideMenu() {
      this.showSlideMenu = !this.showSlideMenu
    },
  },
})
</script>

<style lang="scss" scoped>
.slide-menu-index {
  padding: 20px;

  .top-link {
    display: block;
    margin: 20px 0;
  }
}
</style>
