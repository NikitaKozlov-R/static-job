<template>
  <span class="main-list__tools-wrap">
    <div class="main-list__tools">
      <button class="main-list__tool-lang"
        @click="$emit('select-filter', {filter: vacancy.role, family: 'role'})"
      >
        {{ vacancy.role }}
      </button>
      <button class="main-list__tool-lang"
        @click="$emit('select-filter', {filter: vacancy.level, family: 'level'})"
      >
        {{ vacancy.level }}
      </button>
      <button class="main-list__tool-lang"
        v-for="tool in vacancy.tools"
        :key="tool"
        @click="$emit('select-filter', {filter: tool, family: 'tools'})"
      >
        {{ tool }}
      </button>
      <button class="main-list__tool-lang"
        v-for="lang in vacancy.languages"
        :key="lang"
        @click="$emit('select-filter', {filter: lang, family: 'languages'})"
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
  font-size: .6rem;
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
@media screen and (max-width: 1280px) {
  .main-list__tools {
    flex-wrap: wrap;
    margin: 8px 0 16px;
    border-top: 1px solid var(--color-dark-primary);
  }
  .main-list__tool-lang {
    font-size: .8rem;
    margin: 8px 8px 0 0;
  }
  .main-list__tools-wrap {
    width: 100%;
  }
}
</style>