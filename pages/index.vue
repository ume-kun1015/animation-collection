<template>
  <div class="index-page">
    <h1>animations</h1>

    <ul class="row">
      <li v-for="(animation, index) in animations" :key="index" class="col-md-4">
        <nuxt-link :to="`/${animation}`" class="card">
          <p>{{ animation }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  animations: string[]
}

export default Vue.extend({
  data(): Data {
    return {
      animations: ['accordion', 'expandable-modal', 'gallery', 'popup', 'slide-menu'],
    }
  },
})
</script>

<style lang="scss" scoped>
.index-page {
  padding: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 30%;
      margin: 16px;

      @media only screen and (max-width: $breakpoint-mobile) {
        width: 42%;
        margin: 12px;
      }

      .card {
        display: block;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow,
          0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
        padding: 16px;
        cursor: pointer;
        text-decoration: none;
        height: 60px;

        @media only screen and (max-width: $breakpoint-mobile) {
          padding: 16px;
          height: 80px;
        }

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
        }

        p {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
