<template>
<!-- 百度新闻不带图片的新闻组件 -->
  <div id="leftnewscontainer">
      <div class='boder'></div>
    <div class="left-top">
      <h2>{{onedata.title[0]}}</h2>
      <span>{{onedata.title[1]}}</span>
    </div>
   <div class="leftnews-bottom-news">
       <ul >
           <li v-for='(news,index) in onedata.news' :key='index'>
               {{news}}
           </li>
       </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'leftnews',
  data () {
    return {
      leftnews: ['11111', '222', '333', '4444', 1111, 2222]
    }
  },
  props: ['onedata', 'senconddata']
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
#leftnewscontainer {
    width: 365px;
    border-top: 2px solid #c7c7c7;
  position: relative;
  /* margin-bottom: 20px; */
}
.left-top {
  height: 55px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #ececec;
}
.left-top span {
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
.leftnews-bottom-news ul {
    padding: 0px;
    list-style-type: none;
    margin: 0;
}
.leftnews-bottom-news ul li {
    line-height: 36px;
    height: 35px;;
    border-bottom: 1px dotted #ececec;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #222;
}
</style>
