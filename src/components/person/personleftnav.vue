<template>
  <div>
    <ul class="leftnav">
      <li>个人中心</li>
      <li>
        <span>我的订单</span>
        <span @click="forchange1">历史订单</span>
      </li>
      <li>
        <span>我的资产</span>
        <span>我的红包</span>
        <span>账户余额</span>
        <span>我的金币</span>
      </li>
      <li>
        <span>我的资料</span>
        <span  @click="forchange2">个人资料</span>
        <span>地址管理</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'personleftnav',
  methods: {
    forchange1 () {
      this.$emit('showorno', 1)
    },
    forchange2 () {
      this.$emit('showorno2', 2)
    }
  }
}
</script>

<style scoped>
span:hover {
  cursor: pointer;
}
.leftnav {
  width: 160px;
}
.leftnav li {
  list-style-type: none;
  border-bottom: 1px solid #222;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.leftnav li span:first-child {
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
