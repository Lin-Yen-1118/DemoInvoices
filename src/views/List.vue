<template>
  <div class="list" v-for="(invoice, index) of invoices" :key="index">
    <Listitems v-show="isShow" v-model:close="isShow" />
    <button type="button" @click="toggleInputForm"></button>
    <div class="list_data">
      <div class="date">
        {{
          `${new Date(invoice.time).getMonth() + 1}/${new Date(
            invoice.time
          ).getDate()}`
        }}
      </div>
      <div :class="invoice.status === '驗證中' ? 'tags-verify' : 'tags'">
        <h4>{{ invoice.status }}</h4>
      </div>
    </div>
    <div class="list_data item_bargainor">
      <div class="item_name">
        <h2>{{ invoice.invNum }}</h2>
      </div>
      <div class="bargainor">
        <h4>{{ invoice.sellerName }}</h4>
      </div>
    </div>
    <div class="list_data price">
      <div>{{ invoice.amount }}元</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Listitems from "@/components/ListComponent/Listitems.vue";
export default {
  name: "List",
  components: { Listitems },
  data() {
    return {
      isShow: false,
      invoices: [],
    };
  },
  mounted() {
    this.getinvoicesList();
  },
  methods: {
    toggleInputForm() {
      this.isShow = !this.isShow;
    },
    async getinvoicesList() {
      await axios
        .get(`http://localhost:3000/invoices`)
        .then((res) => {
          const invoices = res.data;
          this.invoices = invoices;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
