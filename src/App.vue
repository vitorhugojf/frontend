<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
    </div>
    <router-view name="footer" />
    <loading></loading>
  </div>
</template>
<script>
import loading from "./components/Loading";

export default {
  components: {
    loading
  }
};
</script>