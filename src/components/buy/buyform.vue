<template>
  <div>
    <div class="C-distpicker">
      <span class="getplace">收货地址</span>
      <div>
        <div data-toggle="distpicker">
          <select data-province="---- 选择省 ----" class="myoption"></select>
          <select data-city="---- 选择市 ----" class="myoption"></select>
          <select data-district="---- 选择区 ----" class="myoption"></select>
        </div>
      </div>
      <span class="price">{{bookprice}}</span>
      <span>元</span>
      <span class="buynumber">{{buynumber}}</span>
      <button @click="add" class="btn btn-primary">+</button>
      <button @click="reduce" class="btn btn-primary">-</button>
      <button class="btn btn-primary" @click='gotobuy'>确定</button>
    </div>
  </div>
</template>

<script>
import 'distpicker'
import $ from 'jquery'
export default {
  name: 'buyform',
  data () {
    return {
      bookprice: 80,
      buynumber: 0
    }
  },
  methods: {
    add () {
      this.buynumber++
      this.bookprice = this.bookprice = this.bookprice + 80
    },
    reduce () {
      if (this.buynumber > 0) {
        this.buynumber--
      }
      if (this.price > 0) {
        this.bookprice = this.bookprice - 80
      }
    },
    gotobuy () {}
  }
}
</script>

<style scoped>
.myoption {
  font-size: 12px;
}
.C-distpicker {
  width: 600px;
  height: 100px;
  background-color: rgb(200, 207, 230);
  text-align: center;
}
.getplace {
  font-size: 25px;
}
.buyinfo {
  width: 200px;
}
.buynumber {
  margin-left: 20px;
}
</style>
