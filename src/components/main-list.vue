<template>
  <ul class="main-list">
      <li class="main-list-item"
        v-for="vacancy in vacancies"
        :key="vacancy.id"
      >
        <main-list-left-side
          :vacancy="vacancy"
        />
        <div class="main-list__right-side"
          v-for="tool in vacancy.languages"
          :key="tool"
        >
          <p class="main-list__right-side-filter">{{ tool }}</p>
        </div>
      </li>
  </ul>
</template>

<script>

import vacancies from '@/assets/data'
import MainListLeftSide from '@/components/main-list-left-side.vue'

export default {
  data() {
    return {
      vacancies
    }
  },

  components: {
    MainListLeftSide
  },

  computed: {
    
  },

  methods: {
    
  }
}

</script>

<style>

</style>