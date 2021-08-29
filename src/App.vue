<template>
  <main>
    <main-header />
    <main-filter />
    <main-list />
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
  }
}
</script>