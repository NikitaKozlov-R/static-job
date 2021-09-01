<template>
  <div class="main-list__short-description">
    <img class="main-list__short-description__logo" :src="vacancy.logo" type="image/svg+xml" draggable="false">
    <div class="main-list__preview">
      <div class="main-list-item__top-panel">
        <p class="main-list-item__company">{{ vacancy.company }}</p>
        <p class="main-list-item__company--new"
          v-if=" vacancy.new ">
          NEW!
        </p>
        <p class="main-list-item__company--featured"
          v-if=" vacancy.featured ">
          FEATURED
        </p>
      </div>
      <p class="main-list-item__position">{{ vacancy.position }}</p>
      <div class="main-list-item__bottom-panel">
        <p class="main-list-item__parameter">{{ vacancy.postedAt }}</p>
        <p class="main-list-item__dot">&middot;</p>
        <p class="main-list-item__parameter">{{ vacancy.contract }}</p>
        <p class="main-list-item__dot">&middot;</p>
        <p class="main-list-item__parameter">{{ vacancy.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [ 'vacancy' ]
}

</script>

<style>
.main-list__short-description {
  display: flex;
  align-items: center;
  height: 64px;
}
.main-list__short-description__logo {
  width: 64px;
  height: 64px;
  margin: 0 0 0 24px;
}
.main-list__preview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 0 16px;
  height: 100%;
}
.main-list-item__top-panel {
  display: flex;
  align-items: center;
}
.main-list-item__company {
  color: var(--color-primary);
  font-size: .8rem;
  font-weight: 700;
}
.main-list-item__company--new {
  color: white;
  font-size: .6rem;
  font-weight: 700;
  padding: 6px 6px 4px 6px;
  margin: 0 0 0 8px;
  background-color: var(--color-primary);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-list-item__company--featured {
  color: white;
  font-size: .6rem;
  font-weight: 700;
  padding: 6px 6px 4px 6px;
  margin: 0 0 0 4px;
  background-color: var(--color-dark-gray);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-list-item__position {
  color: var(--color-dark-gray);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.main-list-item__position:hover {
  color: var(--color-primary);
}
.main-list-item__bottom-panel {
  display: flex;
  flex-direction: row;
}
.main-list-item__parameter {
  color: var(--color-dark-primary);
  font-size: .6rem;
}
.main-list-item__dot {
  color: var(--color-dark-primary);
  font-size: 1rem;
  line-height: 8px;
  margin: 0 8px 0 8px;
}
@media screen and (max-width: 1280px){
  .main-list__short-description {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .main-list__short-description__logo {
    width: 40px;
    height: 40px;
    margin: -20px 0 8px 16px;
  }
  .main-list__preview {
    height: 64px;
    width: 100%;
    padding: 0 0 16px 0;
    border-bottom: 1px solid var(--color-dark-gray);
  }
}
</style>