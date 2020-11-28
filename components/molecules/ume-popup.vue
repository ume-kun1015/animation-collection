<template>
  <div class="ume-popup">
    <transition name="background">
      <div v-if="showPopup" class="background" @click.prevent="$emit('change-popup', false)" />
    </transition>

    <transition name="popup">
      <div v-if="showPopup" class="popup-wrapper">
        <ume-close class="icon icon-close" @click.prevent="$emit('change-popup', false)" />

        <div class="image-wrapper">
          <img src="https://picsum.photos/seed/picsum/600/600" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import UmeClose from '~/assets/fonts/close.svg?inline'

export default Vue.extend({
  components: {
    UmeClose,
  },

  model: {
    prop: 'showPopup',
    event: 'change-popup',
  },

  props: {
    showPopup: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.ume-popup {
  .background-enter-active {
    transition: opacity 0.15s;
  }

  .background-enter,
  .background-leave-to {
    opacity: 0;
  }

  .popup-enter-active {
    transition: all 0.25s ease;
  }

  .popup-leave-active {
    transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .popup-enter,
  .popup-leave-to {
    opacity: 0;
  }

  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    background-color: rgba(35, 24, 21, 0.35);
  }

  .popup-wrapper {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    padding: 0.5em 1em;
    z-index: 2;
    display: flex;
    flex-direction: column;

    .icon-close {
      z-index: 3;
      height: 36px;
      fill: white;
      width: 100%;
      margin-bottom: 20px;
    }

    .image-wrapper {
      display: block;

      img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  }
}
</style>
