<template>
  <div class="listpopup">
    <div class="invoices">
      <div class="close" @click="closeAdoptForm">
        <img id="close_icon" src="@/assets/img/close.png" />
      </div>
      <div class="content">
        <div class="listpopup_data">
          <div class="tags"><h4>載具</h4></div>
          <div class="top_data">
            <div class="item_name">AB12345678</div>
            <div class="date"><h3>2021-12-30-12:12:12</h3></div>
            <div class="bargainor"><h4>賣方名稱</h4></div>
          </div>
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
