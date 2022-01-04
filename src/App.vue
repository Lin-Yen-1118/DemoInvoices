<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Index />
    <router-view />
    <List />
  </nav>
</template>

<script>
import Index from "@/views/Index.vue";

import List from "@/components/List.vue";

export default {
  name: "App",
  components: { Index, List },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
