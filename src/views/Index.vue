<template>
  <div class="logo">
    <img alt="Vue logo" src="../assets/img/logo.png" />
  </div>
  <div class="month">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="total">
      <h2>共{{ totalUnits }}張，總金額{{ totalPrice }}元</h2>
    </div>
  </div>

  <List @updateTotalAmount="getTotalPrice" @updateTotalUnits="getTotalUnits" />
  <div class="tab_container">
    <div class="tab_item">
      <button type="button" id="scan">掃描輸入</button>
    </div>

    <div class="tab_item">
      <router-link to="/input"> </router-link>
      <button @click="jump" type="button" id="manual_input">手動輸入</button>
    </div>
  </div>
</template>
<script>
import List from "@/views/List.vue";
export default {
  name: "Index",
  components: { List },
  data() {
    return {
      title: "110年12月",
      totalUnits: 0,
      totalPrice: 0,
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/input" });
    },
    getTotalUnits(newUnits) {
      this.totalUnits = newUnits;
    },
    getTotalPrice(newAmount) {
      this.totalPrice = newAmount;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>
