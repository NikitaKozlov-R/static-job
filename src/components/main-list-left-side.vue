<template>
  <div class="main-list__left-side">
    <img :src="vacancy.logo" type="image/svg+xml">
    <div class="main-list__preview">
      <div class="main-list-item__top-panel">
        <p class="main-list-item__company">{{ vacancy.company }}</p>
      </div>
      <p class="main-list-item__position">{{ vacancy.position }}</p>
      <div class="main-list-item__bottom-panel">
        <p class="main-list-item__parameter">{{ vacancy.postedAt }}</p>
        <p class="main-list-item__parameter">{{ vacancy.contract }}</p>
        <p class="main-list-item__parameter">{{ vacancy.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'vacancy'
  ]
}

</script>

<style>

</style>