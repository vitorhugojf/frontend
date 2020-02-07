<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <loading
      :show="$store.state.showLoading"
      overlay-class="black-overlay"
      loader-class="loader-wrapper-edit"
    >
      <template #loading-text>
        <div class="loader-text">Carregando...</div>
      </template>
      <template #loading-spinner>
        <div class="breeding-rhombus-spinner">
          <div class="rhombus child-1"></div>
          <div class="rhombus child-2"></div>
          <div class="rhombus child-3"></div>
          <div class="rhombus child-4"></div>
          <div class="rhombus child-5"></div>
          <div class="rhombus child-6"></div>
          <div class="rhombus child-7"></div>
          <div class="rhombus child-8"></div>
          <div class="rhombus big"></div>
        </div>
      </template>
    </loading>
  </div>
</template>
<script>
import loading from "vue-full-loading";

export default {
  components: {
    loading
  }
};
</script>