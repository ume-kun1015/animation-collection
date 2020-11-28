<template>
  <div class="ume-gallery">
    <div @click="previous">
      <left-arrow :class="`icon icon-arrow-left ${previousclickableClass}`" />
    </div>

    <div ref="slide-list-wrapper" class="slide-list-wrapper">
      <ol ref="slide-list" class="slide-list">
        <li v-for="(image, index) in images" :key="index">
          <div class="slide-element" :style="slideElementStyle">
            <img :src="image.src" />
          </div>
        </li>
      </ol>
    </div>

    <div @click="following">
      <right-arrow :class="`icon icon-arrow-right ${followingClickableClass}`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { Image } from '~/types/image'

import RightArrow from '~/assets/fonts/right-arrow.svg?inline'
import LeftArrow from '~/assets/fonts/left-arrow.svg?inline'

const firstDisplayNum = 4

type Data = {
  transformX: number
  offset: number
  largestDisplayedNum: number
}

export default Vue.extend({
  components: {
    RightArrow,
    LeftArrow,
  },

  props: {
    images: {
      type: Array as PropType<Image[]>,
      required: true,
    },

    width: {
      type: Number,
      required: true,
    },
  },

  data(): Data {
    return {
      transformX: 0,
      offset: 24,
      largestDisplayedNum: firstDisplayNum,
    }
  },

  computed: {
    previousclickableClass(): string {
      return this.canSlidePrevious ? 'clickable' : 'non-clickable'
    },

    followingClickableClass(): string {
      return this.canSlideFollowing ? 'clickable' : 'non-clickable'
    },

    canSlidePrevious(): boolean {
      return this.largestDisplayedNum > firstDisplayNum
    },

    canSlideFollowing(): boolean {
      return this.largestDisplayedNum < this.images.length
    },

    slideElementStyle(): { 'min-width': string } {
      return { 'min-width': `${this.width}px` }
    },
  },

  mounted() {
    ;(this.$refs['slide-list-wrapper'] as HTMLElement).style.width = `${(this.width + this.offset) * firstDisplayNum}px`
  },

  methods: {
    previous(): void {
      if (!this.canSlidePrevious) {
        return
      }

      this.transformX += this.width + this.offset
      ;(this.$refs['slide-list'] as HTMLElement).style.transform = `translate(${this.transformX}px, 0)`
      this.largestDisplayedNum--
    },

    following(): void {
      if (!this.canSlideFollowing) {
        return
      }

      this.transformX -= this.width + this.offset
      ;(this.$refs['slide-list'] as HTMLElement).style.transform = `translate(${this.transformX}px, 0)`
      this.largestDisplayedNum++
    },
  },
})
</script>

<style lang="scss" scoped>
.ume-gallery {
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    height: 24px;
    width: 28px;
  }

  .clickable {
    fill: #c7c7cc;
  }

  .non-clickable {
    fill: #d1d1d6;
  }

  .slide-list-wrapper {
    overflow: hidden;
    margin: 0 auto;

    .slide-list {
      transition: 0.5s;
      display: flex;

      .slide-element {
        margin: 0 12px;
      }
    }
  }
}
</style>
