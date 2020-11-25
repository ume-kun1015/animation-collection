<template>
  <div class="expandable-modal-index">
    <h1>expandable-modal</h1>

    <nuxt-link to="/" class="top-link">
      <p>navigate to top page</p>
    </nuxt-link>

    <p v-if="$device.isDesktopOrTablet">open this page in mobile</p>

    <ume-expandable-bottom-modal v-else :width="180" class="gallery" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  expanded: boolean
}

export default Vue.extend({
  data(): Data {
    return {
      expanded: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.expandable-modal-index {
  padding: 20px;

  .top-link {
    display: block;
    margin: 20px 0;
  }
}
</style>
