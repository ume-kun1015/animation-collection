<template>
  <div class="ume-slide-menu">
    <transition name="background">
      <div v-if="showSlideMenu" class="background" @click="close">
        <div class="close-button">&times;</div>
      </div>
    </transition>

    <transition name="menu">
      <div v-if="showSlideMenu" class="menu">
        <div class="menu-item-wrapper">
          <div class="menu-item" @click="close">
            <span>page1</span>
          </div>

          <div class="menu-item" @click="close">
            <span>page2</span>
          </div>

          <div class="menu-item" @click="close">
            <span>page3</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  model: {
    prop: 'showSlideMenu',
    event: 'close',
  },

  props: {
    showSlideMenu: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit('close', false)
    },
  },
})
</script>

<style lang="scss" scoped>
.ume-slide-menu {
  .background-enter-active {
    transition: opacity 0.15s;
  }

  .background-enter,
  .background-leave-to {
    opacity: 0;
  }

  .menu-enter-active {
    transition: all 0.15s ease;
  }

  .menu-leave-active {
    transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .menu-enter,
  .menu-leave-to {
    transform: translateX(10%);
    opacity: 0;
  }

  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 98;
    top: 0;
    right: 0;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.6);

    .close-button {
      position: absolute;
      top: 0;
      left: 25px;
      font-size: 36px;
      color: #fff;
    }
  }

  .menu {
    height: 100%;
    width: 64%;
    max-width: 320px;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    background-color: #f3f3f3;
    overflow-x: hidden;

    .menu-item-wrapper {
      background-color: #fff;
      padding-top: 40px;
      padding-bottom: 52px;
    }

    .menu-item {
      display: block;
      cursor: pointer;
      margin: 0 20px;
      padding: 17px 0;
      font-size: 16px;
      font-weight: bold;
      border-bottom: thin solid #c7c7cc;
      color: #4a4a4a;
      text-decoration: none;
      line-height: 1;

      span {
        vertical-align: middle;
      }
    }
  }
}
</style>
