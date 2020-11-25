<template>
  <div class="popup-index">
    <h1>popup-menu</h1>

    <nuxt-link to="/" class="top-link">
      <p>navigate to top page</p>
    </nuxt-link>

    <div class="button" @click="toggleShowPopup">click here to toggle popup</div>

    <ume-popup v-model="showPopup" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  showPopup: boolean
}

export default Vue.extend({
  data(): Data {
    return {
      showPopup: false,
    }
  },

  methods: {
    toggleShowPopup() {
      this.showPopup = !this.showPopup
    },
  },
})
</script>

<style lang="scss" scoped>
.popup-index {
  padding: 20px;

  .top-link {
    display: block;
    margin: 20px 0;
  }
}
</style>
