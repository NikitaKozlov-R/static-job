<template>
  <span>
    <div class="main-list__tools">
      <p class="main-list__tool-lang">
        {{ vacancy.role }}
      </p>
      <p class="main-list__tool-lang">
        {{ vacancy.level }}
      </p>
      <p class="main-list__tool-lang"
        v-for="tool in vacancy.tools"
        :key="tool"
      >
        {{ tool }}
      </p>
      <p class="main-list__tool-lang"
        v-for="lang in vacancy.languages"
        :key="lang"
      >
        {{ lang }}
      </p>
    </div>
  </span>
</template>

<script>
export default {
  props: [ 'vacancy' ]
}
</script>

<style>
.main-list__tools {
  display: flex;
  margin: 0 24px 0 0;
}
.main-list__tool-lang {
  font-size: 0.6rem;
  font-weight: 700;
  border-radius: 4px;
  padding: 8px 6px 6px 6px;
  margin: 0 0 0 8px;
  background-color: var(--color-background);
  color: var(--color-primary);
  cursor: pointer;
}
</style>