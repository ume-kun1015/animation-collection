<template>
  <div class="gallery-index">
    <h1>gallery</h1>

    <nuxt-link to="/" class="top-link">
      <p>navigate to top page</p>
    </nuxt-link>

    <ume-gallery :images="images" :width="180" class="gallery" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Image } from '~/types/image'

type Data = {
  images: Image[]
}

export default Vue.extend({
  data(): Data {
    return {
      images: [
        { id: 1, src: 'https://picsum.photos/id/1/200/300' },
        { id: 2, src: 'https://picsum.photos/id/2/200/300' },
        { id: 3, src: 'https://picsum.photos/id/3/200/300' },
        { id: 4, src: 'https://picsum.photos/id/4/200/300' },
        { id: 5, src: 'https://picsum.photos/id/5/200/300' },
        { id: 6, src: 'https://picsum.photos/id/6/200/300' },
        { id: 7, src: 'https://picsum.photos/id/7/200/300' },
        { id: 8, src: 'https://picsum.photos/id/8/200/300' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.gallery-index {
  padding: 20px;

  .top-link {
    display: block;
    margin: 20px 0;
  }

  .gallery {
    margin: 0 auto;
    width: 80%;
  }
}
</style>
