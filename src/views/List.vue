<template>
  <Listitems
    v-show="isShow"
    v-model:close="isShow"
    :invoice="invoiceFocusOn"
    :index="invoiceFocusOn.index"
    @deleteIndex="deleteIndex"
  />
  <div class="list" v-for="(invoice, index) of invoices" :key="index">
    <button type="button" @click="toggleInputForm(invoice, index)"></button>
    <div class="list_data">
      <div class="date">
        {{ formatTime(invoice.time) }}
      </div>

      <!-- 如果type是0，就是顯示載具 -->
      <!-- 如果type是1，會有兩種顯示: 驗證中、電子 -->
      <div :class="invoice.status === '驗證中' ? 'tags-verify' : 'tags'">
        <h4 v-if="invoice.type === 0">
          {{ "載具" }}
        </h4>
        <h4 v-if="invoice.type === 1 && invoice.status != '驗證中'">
          {{ "電子" }}
        </h4>
        <h4 v-if="invoice.type === 1 && invoice.status === '驗證中'">
          {{ "驗證中" }}
        </h4>
      </div>
    </div>
    <div class="list_data item_bargainor">
      {{ invoices.item }}

      <div
        class="item_name"
        v-for="(details, index) of invoice.details"
        :key="index"
      >
        <h2 v-if="index === 0">{{ details.description }}</h2>
      </div>
      <div class="bargainor">
        <h4>{{ invoice.sellerName }}</h4>
      </div>
    </div>
    <div class="list_data price">
      <div v-if="invoice.status != '驗證中'" v-show="invoice.amount">
        {{ invoice.amount }}元
      </div>
      <div v-else>{{ "--" }}元</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Listitems from "@/components/Listitems.vue";
export default {
  name: "List",
  components: { Listitems },
  emits: {
    // No validation
    click: null,
    // Validate submit event
    updateTotalUnits: (length) => {
      return length;
    },
    updateTotalAmount: (sum) => {
      return sum;
    },
  },
  data() {
    return {
      isShow: false,
      invoices: [],
      invoiceFocusOn: {},
    };
  },
  mounted() {
    this.getinvoicesList();
  },
  methods: {
    toggleInputForm(invoice, index) {
      this.invoiceFocusOn = invoice;
      this.invoiceFocusOn.index = index;
      this.isShow = !this.isShow;
    },
    async getinvoicesList() {
      await axios
        .get(`http://localhost:3000/invoices`)
        .then((res) => {
          console.log(res);
          const invoices = res.data;
          this.invoices = invoices;
          this.updateTotalUnits();
          this.updateTotalAmount();
          this.sortByDate(this.invoices, "time");
          const copy = JSON.parse(JSON.stringify(this.invoices));
          const maxID = this.sortByNum(copy, "id")[0].id;

          sessionStorage.setItem("maxID", maxID);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sortByDate(arr, key) {
      const sortedArr = arr.sort(function (a, b) {
        return new Date(a[key]) - new Date(b[key]);
      });
      return sortedArr;
    },
    sortByNum(arr, key) {
      const sortedArr = arr.sort(function (a, b) {
        return b[key] - a[key];
      });
      return sortedArr;
    },
    updateTotalUnits() {
      const length = this.invoices.length;
      this.$emit("updateTotalUnits", length);
    },
    updateTotalAmount() {
      const invoices = this.invoices;
      let sum = 0;
      invoices.map((item) => {
        if (item.amount) {
          sum = sum + item.amount;
        }
      });
      this.$emit("updateTotalAmount", sum);
    },
    deleteIndex(index) {
      this.invoices.splice(index, 1);
    },
    formatTime(time) {
      const date = new Date(time).getDate().toString();
      const month = (new Date(time).getMonth() + 1).toString();
      const newV = `${month.padStart(2, "0")}/${date.padStart(2, "0")}`;
      return newV;
    },
  },
};
</script>
