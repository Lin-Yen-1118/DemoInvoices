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
              <input placeholder="大寫英文" />
            </div>
            <div class="input_box_input">
              <input placeholder="8碼發票號碼" />
            </div>
          </div>
        </div>
        <div class="input_items">
          <span class="input_box input_text">開立時間:</span>
          <div class="input_box">
            <div class="input_box_input">
              <input placeholder="西元年" />
            </div>
            <div class="input_box_input">
              <input placeholder="月份" />
              <input placeholder="日期" />
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
};
</script>
