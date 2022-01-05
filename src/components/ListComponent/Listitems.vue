<template>
  <div class="listpopup">
    <div class="invoices">
      <div class="content">
        <div class="close" @click="closeAdoptForm">
          <img id="close_icon" src="@/assets/img/close.png" />
        </div>

        <div class="listpopup_data">
          <div class="tags"><h4>載具</h4></div>
          <div class="top_data">
            <div class="item_name">AB12345678</div>
            <div class="date"><h3>2021-12-30-12:12:12</h3></div>
            <div class="bargainor"><h4>賣方名稱</h4></div>
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
          <ul class="data_body">
            <li class="data_item_name">品項名稱</li>
            <li class="data_n">000</li>
            <li class="data_n">50000</li>
            <li class="data_n">100000</li>
          </ul>
          <ul class="data_body">
            <li class="data_item_name">品項名稱</li>
            <li class="data_n">000</li>
            <li class="data_n">50000</li>
            <li class="data_n">100000</li>
          </ul>
        </div>
        <!-- 總金額 -->
        <div class="total_price">
          <div class="total_amount">總金額</div>
          <div class="total_amount">2035555</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Listitems",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
