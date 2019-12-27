<template>
  <div class="home">
    <h1>This is an home page</h1>
    <v-btn @click="toast('coé','success')">Show success Toast</v-btn>
    <v-btn @click="toast('coé','info')">Show info Toast</v-btn>
    <v-btn @click="toast('coé','warning')">Show warning Toast</v-btn>
    <v-btn @click="toast('coé','error', 'fas fa-exclamation-triangle')">Show error Toast</v-btn>
    <v-btn @click="toast('coé')">Show Toast</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    //
  }),
  methods: {
    toast(message, type = "info", icon = true) {
      this.$toast(message, {
        type: type,
        position: "top-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        hideCloseButton: true,
        hideProgressBar: false,
        icon: icon
      });
    }
  }
};
</script>
