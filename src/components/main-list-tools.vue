<template>
  <span>
    <div class="main-list__tools">
      <button class="main-list__tool-lang"
        @click="$emit('select-filter', vacancy.role)"
      >
        {{ vacancy.role }}
      </button>
      <button class="main-list__tool-lang"
        @click="$emit('select-filter', vacancy.level)"
      >
        {{ vacancy.level }}
      </button>
      <button class="main-list__tool-lang"
        v-for="tool in vacancy.tools"
        :key="tool"
        @click="$emit('select-filter', tool)"
      >
        {{ tool }}
      </button>
      <button class="main-list__tool-lang"
        v-for="lang in vacancy.languages"
        :key="lang"
        @click="$emit('select-filter', lang)"
      >
        {{ lang }}
      </button>
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
  border: none;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.main-list__tool-lang:focus {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0, 0, 0, 0.425);
}
.main-list__tool-lang:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>