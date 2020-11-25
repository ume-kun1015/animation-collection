<template>
  <div class="accordion-index">
    <h1>accordion</h1>

    <nuxt-link to="/" class="top-link">
      <p>navigate to top page</p>
    </nuxt-link>

    <ume-accordion
      v-for="(group, index) in groups"
      :key="group.id"
      :expanded="accordionExpanded[index]"
      :expandable="group.children.length > 0"
      class="accordion"
      @click-header-arrow="toggleExpandAccordion($event, index)"
    >
      <template v-slot:header>
        <p>{{ group.name }}</p>
      </template>

      <template v-slot:content>
        <ul v-if="group.children.length > 0">
          <li v-for="groupChild in group.children" :key="`${group.id}-${groupChild.id}`">
            <div class="child-img">
              <img :src="groupChild.src" />
            </div>
          </li>
        </ul>
      </template>
    </ume-accordion>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { ImageGroup } from '~/types/image'

type Data = {
  groups: ImageGroup[]
  accordionExpanded: boolean[]
}

export default Vue.extend({
  data(): Data {
    const groups = [
      {
        id: 1,
        name: 'scenes',
        children: [
          { id: 1015, src: 'https://picsum.photos/id/1015/200/300' },
          { id: 1016, src: 'https://picsum.photos/id/1016/200/300' },
          { id: 1018, src: 'https://picsum.photos/id/1018/200/300' },
          { id: 1019, src: 'https://picsum.photos/id/1019/200/300' },
          { id: 102, src: 'https://picsum.photos/id/102/200/300' },
        ],
      },
      {
        id: 2,
        name: 'scenes',
        children: [
          { id: 244, src: 'https://picsum.photos/id/244/200/300' },
          { id: 237, src: 'https://picsum.photos/id/237/200/300' },
          { id: 200, src: 'https://picsum.photos/id/200/200/300' },
          { id: 219, src: 'https://picsum.photos/id/219/200/300' },
          { id: 169, src: 'https://picsum.photos/id/169/200/300' },
        ],
      },
    ]

    return {
      groups,
      accordionExpanded: [true, ...groups.slice(1, groups.length).map(() => false)],
    }
  },

  computed: {
    accordionClass() {
      return (opened: boolean) => {
        return opened ? 'opened' : ''
      }
    },
  },

  methods: {
    toggleExpandAccordion(expanded: boolean, ingredientCategoryIndex: number) {
      this.accordionExpanded = this.accordionExpanded.map((_) => false)
      this.accordionExpanded[ingredientCategoryIndex] = expanded
    },
  },
})
</script>

<style lang="scss" scoped>
.accordion-index {
  padding: 20px;

  .top-link {
    display: block;
    margin: 20px 0;
  }

  ul {
    display: flex;

    li {
      margin: 20px;

      .child-img {
        img {
          height: 300px;
        }
      }
    }
  }
}
</style>
