<template>
  <div class="main-filter"
    v-if="vacancyFilter.length"
  >
    <div class="main-filter__wrap">
      <div class="main-filter__item"
        v-for="(filter, index) in vacancyFilter"
        :key="filter"
      >
        <p class="main-filter__text-filter">{{ filter }}</p>
        <button class="main-filter__remove-btn"
          @click="$emit('remove-filter', index)"
        >
          <img class="main-filter__remove-btn__svg" src="@/assets/img/remove-btn.svg" type="image/svg+xml" draggable="false">
        </button>
      </div>
    </div>
    <button class="main-filter__clear-btn"
      @click="$emit('clear-filters')"
    >
      Clear
    </button>
  </div>
</template>

<script>
export default {
  props: {
    vacancyFilter: Array
  }
}
</script>

<style>
.main-filter {
  position: absolute;
  width: calc(1024px - 48px);
  height: 56px;
  margin: 84px 0 0 0;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 24px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.096), 0 15px 12px hsla(180, 29%, 50%, 0.178);
}
.main-filter__wrap {
  display: flex;
}
.main-filter__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-background);
  border-radius: 4px;
  margin: 0 16px 0 0;
}
.main-filter__text-filter {
  color: var(--color-primary);
  font-size: .7rem;
  font-weight: 700;
  margin: 2px 6px 0 6px;
}
.main-filter__remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  outline: none;
  border: none;
  background-color: var(--color-primary);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.main-filter__remove-btn:hover {
  background-color: var(--color-dark-gray);
}
.main-filter__clear-btn {
  background-color: unset;
  border: none;
  outline: none;
  color: var(--color-primary);
  font-size: .8rem;
  font-weight: 700;
  border-bottom: .1rem solid var(--color-primary);
  line-height: 10px;
  padding: 1px 0;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.main-filter__clear-btn:hover {
  color: var(--color-dark-gray);
  border-bottom: .1rem solid var(--color-dark-gray);
}
</style>