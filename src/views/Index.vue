<template>
  <div class="logo">
    <img alt="Vue logo" src="../assets/img/logo.png" />
  </div>
  <div class="month">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="total">
      <h2>共{{ Number_of_invoices }}張，總金額{{ totalPrice }}元</h2>
    </div>
  </div>
  <div class="tab_container">
    <div class="tab_item">
      <router-link to="/index"> </router-link>
      <button type="button" id="scan">掃描輸入</button>
    </div>

    <div class="tab_item">
      <router-link to="/input"> </router-link>
      <button @click="jump" type="button" id="manual_input">手動輸入</button>
    </div>
  </div>
  <router-view></router-view>
</template>
<script>
export default {
  name: "Index",
  components: {},
  data() {
    return {
      title: "110年12月",
      Number_of_invoices: "0",
      totalPrice: "000,000",
    };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/input" });
    },
  },
  mounted() {},
};
</script>
