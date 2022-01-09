<template>
  <div class="listpopup">
    <div class="invoices">
      <div class="content">
        <div class="close cursor-pointer" @click="closeInvitePopup">
          <img id="close_icon" src="@/assets/img/close.png" />
        </div>
        <div class="listpopup_data">
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
          <div class="top_data">
            <div class="item_name">{{ invoice.invNum }}</div>
            <div class="date">
              <h3>{{ formatTimeOnPending(invoice.time) }}</h3>
            </div>
            <div class="bargainor">
              <h4>
                {{ invoice.sellerName ? invoice.sellerName : "無店家資料" }}
              </h4>
            </div>
          </div>
        </div>
        <div class="invoices_item">
          <!-- 項目列title -->
          <ul class="data_title">
            <li class="data_item_name">品項</li>
            <li class="data_n">數量</li>
            <li class="data_n">單價</li>
            <li class="data_n">小計</li>
          </ul>

          <!-- 要動態新增的資料區塊 -->
          <ul
            class="data_body"
            v-for="item of invoice.details"
            :key="item.description"
          >
            <li class="data_item_name">{{ item.description }}</li>
            <li class="data_n">{{ item.quantity }}</li>
            <li class="data_n">{{ item.unitPrice }}</li>
            <li class="data_n">{{ item.amount }}</li>
          </ul>
          <div v-if="!invoice.details" class="info-align gray">
            <div>- 沒有明細資料 -</div>
            <div>此張發票可能正在等待店家更新或驗證。</div>
          </div>
        </div>
        <!-- 總金額 -->
        <div class="total_price">
          <div class="total_amount">總金額</div>
          <div class="total_amount">
            {{ invoice.amount ? invoice.amount : "--" }}
          </div>
        </div>
        <button
          @click="deleteItem(invoice.id)"
          v-if="invoice.status === '驗證中'"
          class="transparentBg cursor-pointer"
        >
          <img src="@/assets/img/Delete.svg" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import * as moment from "moment";
export default {
  name: "Listitems",
  components: {},
  emits: {
    // No validation
    click: null,
    // Validate submit event
    deleteIndex: (length) => {
      return length;
    },
  },
  data() {
    return {};
  },
  props: {
    invoice: {
      type: Object,
      default: function () {
        return {
          id: 0,
          invNum: "----",
          status: "----",
          type: 0,
          time: "----",
          amount: 0,
          sellerName: "----",
          details: [],
        };
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // 關閉彈窗
    closeInvitePopup() {
      this.$emit("update:close", false);
    },
    formatTimeOnPending(time) {
      if (this.invoice.status === "驗證中") {
        const FormattedTime = moment(time).lang("en-ca").format("L");
        return FormattedTime;
      }
      return this.invoice.time;
    },
    async deleteItem(id) {
      await axios
        .delete(`http://localhost:3000/invoices/${id}`)
        .then((res) => {
          console.log(res);
          this.closeInvitePopup();
          this.$emit("deleteIndex", this.index);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/list_popup.scss";
</style>
