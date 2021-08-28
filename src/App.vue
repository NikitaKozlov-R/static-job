<template>
  <main>
    <main-header />
    <main-list />
  </main>
</template>

<script>

import MainHeader from '@/components/main-header.vue'
import MainList from '@/components/main-list.vue'

export default {
  name: 'App',
  components: {
    MainHeader: MainHeader,
    MainList: MainList
  }
}

</script>