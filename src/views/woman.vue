<template>
  <!-- 百度新闻女人模块 -->
  <div>
    <Header/>
    <div id="woman">   
      <div class="first all">
        <Lunbo :lunboname="lunboinfo"/>
        <Leftnews :onedata="one"/>
      </div>
      <div class="second all">
        <Newswithimg :senconddata="sencond"/>
        <Leftnews :onedata="one"/>
      </div>
      <div class="three all">
        <Newswithimg :senconddata="sencond"/>
        <Leftnews :onedata="one"/>
      </div>
      <div class="four all">
        <Newswithimg :senconddata="sencond"/>
        <Leftnews :onedata="one"/>
      </div>
      <Bottomnews :last="last"/>
    </div>
    <Footer/>
  </div>
</template>
<style scoped>
#woman {
  width: 1200px;
  margin: 0 auto;
}
</style>
<script>
import Newswithimg from '../components/woman/newswithimg1.vue'
import Leftnews from '../components/woman/leftnews.vue'
import Bottomnews from '../components/woman/bottomsnews.vue'
import Lunbo from '../components/woman/lunbo.vue'
import Header from '../components/public/dht'
import Footer from '../components/public/foot'
export default {
  name: 'woman',
  data() {
    return {
      one: {
        news: [
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子',
          '甜宠文：恶霸盯上了她“你手下这些刺头都喊你嫂子刺头都喊你嫂子'
        ],
        title: ['即时新闻', 'INSTANT NEWS']
      },
      sencond: {
        leftnewstop: [
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了'
        ],
        leftnewsbottom: [
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了'
        ],
        rightnews: [
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了',
          '女人一旦允许你做这些事情，暗示她对你动心了'
        ],
        title: { left: ['焦点新闻', 'FOCAL NEWS'] },
        imgsrc:
          'https://t10.baidu.com/it/u=3168860970,962996473&fm=173&app=25&f=JPEG?w=218&h=146&s=961211CF3410A5DC14844CB90300C012'
      },
      last: {
        news1: [
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..'
        ],
        news2: [
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..',
          '离婚后，她才知道这辈子，都可能再找到像他那么爱自己..'
        ]
      },
      lunboinfo: [
        {
          title: '鹿晗',
          imgsrc:
            'https://b.bdstatic.com/boxlib/20190226/2019022611201427227389113.jpg'
        },
        {
          title: '昆凌',
          imgsrc:
            'https://b.bdstatic.com/boxlib/20190226/2019022611201431345640867.jpg'
        },
        {
          title: '蔡依林',
          imgsrc:
            'https://b.bdstatic.com/boxlib/20190226/2019022611201364508214453.jpg'
        }
      ],
      othersdata: ''
    }
  },
  components: {
    Newswithimg,
    Leftnews,
    Bottomnews,
    Lunbo,
    Header,
    Footer
  },
  mounted() {
    // this.othersdata = this.$route.params.name
  },
  methods: {
    // fn1() {
    //   let url = 'http://192.168.2.105:82/fordata'
    //   console.log(this)
    //   this.$http.get(url, { params: {} }).then(function (response) {
    //     console.log(response)
    //   }).catch()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
/* .first {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.second {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
} */
</style>
