<template>
  <div class="input">
    <div class="input_header">
      <span class="arrow">
        <router-link to="/"> </router-link>
        <img src="../assets/img/arrow.png" />
      </span>
      <h2>手動輸入發票</h2>
    </div>
    <div class="input_contain">
      <div class="input_contain_items">
        <div class="input_items">
          <span class="input_box input_text">發票號碼:</span>
          <div class="input_box">
            <div class="input_box_input">
              {{ invoiceCode }}
              <input
                placeholder="大寫英文"
                maxlength="2"
                v-model="invoiceCode"
                @input="validateInvoiceCode"
              />
            </div>
            <div class="input_box_input">
              {{ invoiceNum }}
              <input
                maxlength="8"
                placeholder="8碼發票號碼"
                v-model="invoiceNum"
                @input="validatInvoiceNum"
              />
            </div>
          </div>
        </div>
        <div class="input_items">
          <span class="input_box input_text">開立時間:</span>
          <div class="input_box">
            <div class="input_box_input">
              {{ year }}
              <input
                maxlength="4"
                placeholder="西元年"
                v-model="year"
                @input="validatYear"
              />
            </div>
            <div class="input_box_input">
              {{ month }}
              <input
                maxlength="2"
                placeholder="月份"
                v-model="month"
                @input="validatMonth"
              />
              {{ date }}
              <input
                maxlength="2"
                placeholder="日期"
                v-model="date"
                @input="validatDate"
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  components: {},
  data() {
    return {
      invoiceCode: "",
      invoiceNum: "",
      year: "",
      month: "",
      date: "",
    };
  },
  methods: {
    validateInvoiceCode() {
      this.invoiceCode = this.invoiceCode.toUpperCase();
      const regex = /^[A-Z]{1,2}$/g;
      const pass = regex.test(this.invoiceCode);
      if (!pass) {
        this.invoiceCode = "";
      }
    },
    validatInvoiceNum() {
      this.invoiceCode = "";
      console.log("validatInvoiceNum");
    },
    validatYear() {
      this.invoiceCode = "";
      console.log("validatYear");
    },
    validatMonth() {
      this.invoiceCode = "";
      console.log("validatMonth");
    },
    validatDate() {
      this.invoiceCode = "";
      console.log("validatDate");
    },
  },
  computed: {
    nowYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
