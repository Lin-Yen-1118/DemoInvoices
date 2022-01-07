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

      <!-- 如果type是0，就是顯示載具 -->
      <!-- 如果type是1，會有兩種顯示: 驗證中、電子 -->
      <div :class="invoice.status === '驗證中' ? 'tags-verify' : 'tags'">
        <h4 v-if="invoice.type === 0">
          {{ (invoice.status = "載具") }}
        </h4>
        <h4 v-if="invoice.type === 1 && invoice.status != '驗證中'">
          {{ (invoice.status = "電子") }}
        </h4>
        <h4 v-if="invoice.type === 1 && invoice.status === '驗證中'">
          {{ (invoice.status = "驗證中") }}
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
      <div v-else-if="(invoice.status = '驗證中')">{{ "--" }}元</div>
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
