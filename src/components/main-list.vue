<template>
  <ul class="main-list">
      <li class="main-list-item"
        v-for="vacancy in vacancies"
        :key="vacancy.id"
      >
        <main-list-short-description
          :vacancy="vacancy"
        />
        <main-list-tools
          :vacancy="vacancy"
          @select-filter="$emit('select-filter', $event)"
        />
      </li>
  </ul>
</template>

<script>

import vacancies from '@/assets/data'
import MainListShortDescription from '@/components/main-list-short-description.vue'
import MainListTools from '@/components/main-list-tools.vue'

export default {
  data() {
    return {
      vacancies
    }
  },

  components: {
    MainListShortDescription,
    MainListTools
  }
}

</script>

<style>
.main-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 0 0;
  background-color: var(--color-background);
}
.main-list-item {
  width: 1024px;
  height: 112px;
  margin: 0 0 1rem 0;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.096), 0 15px 12px hsla(180, 29%, 50%, 0.178);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
@media screen and (max-width: 1280px) {
  .main-list-item {
    width: 90%;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 2rem 0;
    box-sizing: border-box;
  }
}
</style>