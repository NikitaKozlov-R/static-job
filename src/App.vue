<template>
  <main class="main">
    <main-header />
    <main-filter 
      :vacancyFilter="vacancyFilter"
      @remove-filter="removeFilter"
      @clear-filters="clearFilters"
    />
    <main-list 
      @select-filter="selectFilter"
    />
  </main>
</template>

<script>
import MainHeader from '@/components/main-header.vue'
import MainList from '@/components/main-list.vue'
import MainFilter from '@/components/main-filter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainList,
    MainFilter
  },
  data() {
    return {
      vacancyFilter: []
    }
  },
  methods: {
    removeFilter(index) {
      this.vacancyFilter.splice(index, 1);
    },
    clearFilters() {
      this.vacancyFilter = []
    },
    selectFilter(filter) {
      if(this.vacancyFilter.length === 8) {
        alert('You can\'t add more than 8 filters ')
        return false
      }
      if(this.vacancyFilter.indexOf(filter) != -1) {
        return false
      }
      this.vacancyFilter.push(filter)
    }
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>