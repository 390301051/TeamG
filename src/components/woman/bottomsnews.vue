<template>
  <div id='bottomnews'>
    <div class="boder"></div>
    <div class="bottomnews-top">
      <h2>最新新闻</h2>
      <span>latest news</span>
    </div>
    <div class="bignewscontainer">
      <ul class="newscontainer">
        <li v-for="(news,index) in last.news1" :key="index">
          {{news}}
          <span>15:33</span>
        </li>
      </ul>
      <ul class="newscontainer">
        <li v-for="(news,index) in last.news1" :key="index">
          {{news}}
          <span>15:33</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomnews',
  data () {
    return {
      mynews: [111, 22, 33, 44, 55, 111, 22, 111, 111, 222222222222222222],
      test: ['焦点新闻', '回家看好大']
    }
  },
  props: ['last']
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
#bottomnews {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  border-top: 2px solid #c7c7c7;
  margin-top: 20px;
}

.bottomnews-top {
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #ececec;
}
.bottomnews-top h2 {
  margin: 0;
}
.bignewscontainer {
  display: flex;
  justify-content: space-between;
}
.newscontainer {
  list-style-type: none;
  padding: 0;
}
.newscontainer span {
  font-size: 12px;
  color: #999;
  margin-left: 20px;
}
.newscontainer li {
  width: 357.8px;
  height: 27px;
  line-height: 27px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
.bottomnews-top span {
  font-weight: 400;
  color: #999;
  font-size: 9px;
  text-transform: uppercase;
}
</style>
