<template>
  <Header />
  <Month />
  <List />
  <TabBar />
</template>

<script>
import Header from "@/components/Header.vue";
import Month from "@/components/Month.vue";
import List from "@/components/List.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "App",
  components: { Header, Month, List, TabBar },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
