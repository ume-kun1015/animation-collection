<template>
  <div ref="modal" class="ume-expandable-bottom-modal">
    <div class="modal-content-title" @click="toggleExpand">
      <p class="title">title</p>

      <up-arrow v-if="!expanded" class="icon icon-arrow-up" />
      <down-arrow v-else class="icon icon-arrow-down" />
    </div>

    <div class="content-wrapper">
      <div class="content-inner">
        <div class="content">content</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import UpArrow from '~/assets/fonts/up-arrow.svg?inline'
import DownArrow from '~/assets/fonts/down-arrow.svg?inline'

type Data = {
  expanded: boolean
  defaultHeight: number
  transitionSeconds: number
}

export default Vue.extend({
  components: {
    UpArrow,
    DownArrow,
  },

  model: {
    prop: 'expanded',
    event: 'toggleExpand',
  },

  data(): Data {
    return {
      expanded: false,
      defaultHeight: 48,
      transitionSeconds: 0.2,
    }
  },

  watch: {
    expanded(newValue) {
      if (newValue) {
        return
      }

      ;(this.$refs.modal as HTMLElement).style.height = `${this.defaultHeight}px`
    },

    transitionSeconds(newValue) {
      ;(this.$refs.modal as HTMLElement).style.transition = `${newValue}s ease-out`
    },
  },

  mounted() {
    ;(this.$refs.modal as HTMLElement).style.transition = `${this.transitionSeconds}s ease-out`
  },

  methods: {
    expandUpTo(height: number) {
      this.expanded = true
      ;(this.$refs.modal as HTMLElement).style.height = `${height}px`
    },

    shrink() {
      this.expanded = false
      ;(this.$refs.modal as HTMLElement).style.height = `${this.defaultHeight}px`
    },

    toggleExpand() {
      this.expanded ? this.shrink() : this.expandUpTo(window.screen.height * 0.7)
    },
  },
})
</script>

<style lang="scss" scoped>
.ume-expandable-bottom-modal {
  width: 100vw;
  height: 48px;
  position: fixed;
  top: auto;
  right: 0;
  left: 0;
  bottom: 0;
  background: white;
  cursor: pointer;
  box-shadow: 0 -9px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  z-index: 97;

  .modal-content-title {
    position: relative;
    height: 48px;
    background-color: #108775;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0 0;

    .title {
      margin: 6px auto;
      width: 80%;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #000;
      line-height: 1;
    }

    .icon {
      display: block;
      text-align: left;
      fill: #000;
      position: absolute;
      right: 20px;
      height: 14px;
      width: 14px;
    }
  }

  .content-wrapper {
    background-color: #00c58e;
    height: 100%;

    .content-inner {
      height: 100%;
      display: flex;
      justify-content: center;
      padding-top: 100px;

      .content {
        color: white;
        font-size: 32px;
        font-weight: bold;
      }
    }
  }
}
</style>
