<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="下单日期" width="180"></el-table-column>
    <el-table-column prop="name" label="收货地址" width="180"></el-table-column>
    <el-table-column prop="address" label="支付金额" width="180"></el-table-column>
    <el-table-column prop="more" label="备注" width="180"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        more:'很好！'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        more:'很好！'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        more:'很好！'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        more:'很好！'
      }]
    }
  }
}
</script>
