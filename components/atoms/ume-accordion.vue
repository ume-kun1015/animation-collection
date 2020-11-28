<template>
  <div class="ume-accordion">
    <div class="header" @click="$emit('click-header-arrow', !expanded)">
      <slot name="header" />

      <down-arrow v-if="expandable" class="icon" :class="{ rotate: expanded }" />
    </div>

    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <div v-if="expanded" ref="content" class="content">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import DownArrow from '~/assets/fonts/down-arrow.svg?inline'

export default Vue.extend({
  components: {
    DownArrow,
  },

  model: {
    prop: 'expanded',
    event: 'expand',
  },

  props: {
    expanded: {
      type: Boolean,
      required: true,
    },

    expandable: {
      type: Boolean,
      required: true,
    },
  },

  mounted() {
    if (this.$refs.content) {
      ;(this.$refs.content as HTMLElement).style.height = `${(this.$refs.content as HTMLElement).clientHeight}px`
    }
  },

  methods: {
    beforeEnter(el: HTMLElement) {
      el.style.height = '0'
    },

    enter(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px'
    },

    beforeLeave(el: HTMLElement) {
      el.style.height = el.scrollHeight + 'px'
    },

    leave(el: HTMLElement) {
      el.style.height = '0'
    },
  },
})
</script>

<style lang="scss" scoped>
.ume-accordion {
  border-radius: 6px;
  padding-top: 16px;

  .header {
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    padding-bottom: 16px;
    border-bottom: solid 1px #d1d1d6;

    .icon {
      display: block;
      fill: #c7c7cc;
      height: 14px;
      width: 14px;
      transform: rotate(0deg);
      transition-duration: 0.3s;
    }

    .rotate {
      transform: rotate(180deg);
      transition-duration: 0.3s;
    }
  }

  .content {
    padding: 0 12px;
    overflow: hidden;
    transition: 0.3s ease-out;
  }
}
</style>
