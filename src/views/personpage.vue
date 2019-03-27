<template>
<div>
  <div class="C-personpage">
    <Leftnav @showorno="fn" @showorno2="fn2"/>
    <div class="C-show">
      <Orders v-show="forshow==1" class='personpage-orders'/>
      <Personpageinfo v-show="forshow==2"/>
    </div>
  </div>
    <Footer/>
    </div>
</template>

<script>
import Leftnav from '../components/person/personleftnav'
import Orders from '../components/person/personpage-orders'
import Personpageinfo from '../components/person/personpage-info'
import Footer from '../components/public/foot.vue'
export default {
  name: 'personpage',
  components: {
    Leftnav, Orders, Personpageinfo,Footer
  },
  data () {
    return {
      forshow: 1
    }
  },
  methods: {
    fn (x) {
      this.forshow = x
    },
    fn2 (y) {
      this.forshow = y
      console.log(666)
    }
  }
}
</script>

<style scoped>
.C-personpage {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}

</style>
