<template>
  <div class="month">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="total">
      <h2>共{{ Number_of_invoices }}張，總金額{{ totalPrice }}元</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Month",
  components: {},
  data() {
    return {
      title: "110年12月",
      Number_of_invoices: "0",
      totalPrice: "000,000",
    };
  },
  methods: {},
  mounted() {},
};
</script>
