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
      :vacancies="filteredVacancy"
    />
  </main>
</template>

<script>
import MainHeader from '@/components/main-header.vue'
import MainList from '@/components/main-list.vue'
import MainFilter from '@/components/main-filter.vue'
import vacancies from '@/assets/data'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainList,
    MainFilter
  },
  data() {
    return {
      vacancyFilter: {
        role: [],
        level: [],
        languages: [],
        tools: [],
      },
      vacancies
    }
  },
  methods: {
    removeFilter(targets) {
      this.vacancyFilter[targets.family].splice(targets.index, 1);
    },
    clearFilters() {
      this.vacancyFilter = {
        role: [],
        level: [],
        languages: [],
        tools: [],
      }
    },
    selectFilter(targets) {
      console.log(targets);
      console.log(this.vacancyFilter);
      if(this.vacancyFilter.length === 8) {
        return false
      }
      if(this.vacancyFilter[targets.family].indexOf(targets.filter) != -1) {
        return false
      }
      this.vacancyFilter[targets.family].push(targets.filter)
    }
  }, 
  computed: {
    filteredVacancy() {
      // vacancies -- оригинальный массив
      // vacancyFilter -- массив фильтров
      // item.languages -- array
      // item.tools -- array
      // item.role -- string
      // item.level -- string

      const isVacancyFilterExists = [
        ...this.vacancyFilter.languages,
        ...this.vacancyFilter.tools,
        ...this.vacancyFilter.role,
        ...this.vacancyFilter.level,
      ].length;

      const arrayTypes = ["languages", "tools"];
      const stringTypes = ["role", "level"];

      if (isVacancyFilterExists) {
        const filter = this.vacancies.filter((item) => {
          const conditions = []; // [true, true]

          for (const vacancyFilterKey in this.vacancyFilter) {
            const vacancyFilter = this.vacancyFilter[vacancyFilterKey];

            if (vacancyFilter.length) {
              if (arrayTypes.includes(vacancyFilterKey)) {
                conditions.push(
                  item[vacancyFilterKey].some((element) =>
                    vacancyFilter.includes(element)
                  )
                );
              }

              if (stringTypes.includes(vacancyFilterKey)) {
                conditions.push(vacancyFilter.includes(item[vacancyFilterKey]));
              }
            }
          }
          console.log(conditions);
          return conditions.every((item) => item);
        });

        return filter;
      }
      return this.vacancies;
    }
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  padding: 0 5%;
  overflow-x: hidden;
}
</style>