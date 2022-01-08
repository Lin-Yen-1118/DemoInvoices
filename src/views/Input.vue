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
              <input
                placeholder="大寫英文"
                maxlength="2"
                v-model="invoiceCode"
                @input="validateInvoiceCode"
              />
            </div>
            <div class="input_box_input">
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
              <input
                maxlength="4"
                placeholder="西元年"
                v-model="year"
                @input="validatYear"
              />
            </div>
            <div class="input_box_input">
              <input
                maxlength="2"
                placeholder="月份"
                v-model="month"
                @input="validatMonth"
              />

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
import * as moment from "moment";
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
    //英文字母兩碼
    //輸入小寫字母可轉成大寫字母
    validateInvoiceCode() {
      this.invoiceCode = this.invoiceCode.toUpperCase();
      const regex = /^[A-Z]{1,2}$/g;
      const pass = regex.test(this.invoiceCode);
      if (!pass) {
        this.invoiceCode = "";
      }
    },
    //發票數字八碼
    validatInvoiceNum() {
      const regex = /^[0-9]{1,8}$/g;
      const pass = regex.test(this.invoiceNum);
      if (!pass) {
        this.invoiceNum = "";
      }
    },
    //西元年
    validatYear() {
      const regex = /^[0-9]{1,4}$/g;
      const pass = regex.test(this.year);
      if (!pass) {
        this.year = "";
      }
      this.validatMoment();
    },
    //月份
    validatMonth() {
      //驗證數字
      const regex = /^[0-9]{1,2}$/g;
      const pass = regex.test(this.month);
      if (!pass) {
        this.month = "";
      }
      this.validatMoment();
    },
    //日期
    validatDate() {
      //驗證數字
      const regex = /^[0-9]{1,2}$/g;
      const pass = regex.test(this.date);
      if (!pass) {
        this.date = "";
      }
      this.validatMoment();
    },
    validatMoment() {
      let result = moment(
        `${this.month}/${this.date}/${this.year}`,
        "MM/DD/YYYY",
        true
      ).isValid();
      console.log(result);
      return result;
    },
  },
};
</script>
