<template>
<!-- 百度新闻带图片的新闻组件 -->
  <div id="newswithimg1">
    <div class="newswithimg1container">
      <div class="boder"></div>
      <div class="top">
        <h2>{{senconddata.title.left[0]}}</h2>
        <span>{{senconddata.title.left[1]}}</span>
      </div>
      <div class="bottom-news">
        <ul class="bottom-news-left">
          <li v-for='(news,index) in senconddata.leftnewstop' :key='index'>{{news}}</li>
        </ul>
        <div class="bottom-news-right">
            <img :src='senconddata.imgsrc' alt="" @click='fn'>
        </div>
      </div>
      <div class="bottom-news">
           <ul class="bottom-news-left">
          <li v-for='(news,index) in senconddata.leftnewsbottom' :key='index'>{{news}}</li>
        </ul>
        <div class="bottom-news-right">
            <img :src='senconddata.imgsrc' alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newswithimg1',
  props: ['senconddata'],
  methods: {
    fn () {
      console.log(this.senconddata.imgsrc)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boder {
  width: 85px;
  height: 2px;
  background-color: #069;
  position: absolute;
  top: -2px;
}
h2 {
  margin: 0;
  font-family: Microsoft YaHei, \5fae\8f6f\96c5\9ed1, \9ed1\4f53;
  color: #069;
  font-weight: 400;
  font-size: 20px;
}
.newswithimg1container {
  border-top: 2px solid #c7c7c7;
  width: 740px;
  position: relative;
  margin-bottom: 20px;
}
.top {
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #ececec;
}
.top span {
  font-weight: 400;
  color: #999;
  font-size: 9px;
  text-transform: uppercase;
}
h2 {
  margin: 0;
  font-family: Microsoft YaHei, \5fae\8f6f\96c5\9ed1, \9ed1\4f53;
  color: #069;
  font-weight: 400;
  font-size: 20px;
}

.bottom-news {
  width: 100%;
  height: 195px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ececec;
}
.bottom-news-left {
  height: 160px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
}
.bottom-news-left li {
  display: block;
  margin: 0;
  list-style-type: square;
  height: 27px;
  line-height: 27px;
}
.bottom-news-left li:nth-child(1) {
  color: #222;
  font: 700 18px/26px 微软雅黑, tahoma;
}
.bottom-news-right {
  height: 160px;
  width: 240px;
  /* background-color: red; */
}
.bottom-news-right img {
    width: 240px;
    height: 160px;
}
</style>
