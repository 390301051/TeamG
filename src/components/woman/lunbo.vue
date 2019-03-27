<template>
  <!-- element-ui 轮播图组件  样式自己定义了一些 -->
  <el-carousel :interval="5000" arrow="always" height="340px">
    <el-carousel-item v-for='item in lunboname' :key='item' >
      <img  :src="item.imgsrc">
      <div class="imgfont" >{{item.title}}</div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'lunbo',
  data () {
    return {
      imgsrc: [
        'https://b.bdstatic.com/boxlib/20190226/2019022611201427227389113.jpg',
        'https://b.bdstatic.com/boxlib/20190226/2019022611201431345640867.jpg',
        'https://b.bdstatic.com/boxlib/20190226/2019022611201364508214453.jpg'
      ]
    }
  },
  props: ['lunboname'],
  mounted () {
    // var arr1 = [];
    // var arr2 = [];
    // var srcAndtitle = {};
    // for (var i = 0; i < this.lunboname.length; i++) {
    //   arr1.push(this.lunboname[i]);
    // }
    // for (var k = 0; k < this.imgsrc.length; k++) {
    //   arr2.push(this.imgsrc[k]);
    // }
    // srcAndtitle.src=arr2;
    // srcAndtitle.title=arr1;
    // this.newdata=srcAndtitle;
    // console.log(this.newdata)
  }
}
</script>
<style scoped>
.imgfont {
  position: absolute;
  width: 100%;
  height: 72px;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.el-carousel__arrow--left {
  left: 0;
}
.el-carousel__arrow--right {
  right: 0;
}
.el-carousel__arrow:hover {
  background-color: #222;
  opacity: 1;
}
.el-carousel__arrow {
  border-radius: 0;
  width: 60px;
  height: 80px;
  opacity: 0.3;
  background-color: #222;
  font-size: 30px;
}
.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: 20px;
}
.el-carousel__button:hover {
  background-color: #1c96d6;
}
.el-carousel__indicators {
  left: 90%;
  bottom: 15px;
}
.el-carousel {
  height: 340px;
  width: 665px;
}
.el-carousel__item img {
  width: 665px;
  height: 340px;
}
.el-carousel__item {
  width: 665px;
  height: 340px;
}
</style>
