<template>
  <NavBar />
  <router-view />
  <FooTer />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import FooTer from "./components/FooTer.vue";
</script>

<style lang="scss">
body {
  font-family: "Poppins", sans-serif;
}
</style>
