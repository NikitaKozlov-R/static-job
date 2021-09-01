<template>
  <div class="main-header"></div>
</template>

<script>

  export default {}

</script>

<style>
  .main-header {
    width: 100vw;
    height: 112px;
    background-image: url('~@/assets/img/bg-header-desktop.svg');
    background-color: var(--color-primary);
  }
  @media screen and (max-width: 376px) {
    .main-header {
      background-image: url('~@/assets/img/bg-header-mobile.svg');
    }
  }
</style>