<template>
  <div id="app">
    <div id="center">
      <div class="loding" v-if="Mtype==false" style="height:100%"></div>
      <router-view></router-view>
      <transition
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
      >
        <find v-if="$store.state.show"></find>
      </transition>
      
    </div>
    <div v-show="$store.state.bottom" id="bottom">
      <ul>
        <router-link class="buttom1" active-class='active' to="/home" tag="li">
          <span class="iconfont font">&#xe674;</span>
          <span class="myfont">首页</span>
        </router-link>  
        <router-link class="buttom1" active-class='active' to="/holiday" tag="li">
          <span class="iconfont font">&#xe677;</span>
          <span class="myfont">度假</span>
        </router-link>  
        <router-link class="buttom1" active-class='active' to="/strategy" tag="li">
          <span class="iconfont font">&#xe678;</span>
          <span class="myfont">攻略</span>
        </router-link>  
        <router-link class="buttom1" active-class='active' to="/mine" tag="li">
          <span class="iconfont font">&#xe673;</span>
          <span class="myfont">我的</span>
        </router-link>
      </ul>
    </div>
    <footer v-show="$store.state.bottom2" class="product-footer common-layout-fix" style="border-top-color: rgb(26, 188, 156);">
        <ul class="product-footer-nav">
            <li><a href="/home" style="color:#666" class="product-footer-home"><van-icon style="font-size:.21rem;" name="wap-home-o" />
                    <p>首页</p>
                </a></li>
            <li class="product-footer-dot"><van-icon style="font-size:.21rem;" name="chat-o" />
                <p>客服</p>
            </li>
            <li><van-icon style="font-size:.21rem;" name="star-o" />
                <p>收藏</p>
            </li>
            <li class="product-footer-buy product-footer-heavy" style="background-color: rgb(26, 188, 156);">立即预订</li>
        </ul>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import find from 'components/find.vue'
Vue.use(Icon);
export default {
  data() {
    return {
      Mtype:false,
      show:false,
      date:'111'
    }
  },
  computed: {
    random:()=>{
      let date=new Date()
      console.log( date.getTime())
      return date.getTime()
    }
  },
  components:{
    find
  },
  watch: {
    '$store.state.type': function () {
      this.Mtype=this.$store.state.type
    },
  }
}
</script>

<style lang="stylus" scoped>

@import '~assets/border.styl'


#app
  height 100%
  display flex
  flex-direction column
  .txt-center
    text-align: center;
#center
  flex 1
  overflow hidden
  position relative
  .loding
    width: 100%;
    z-index :999
    position absolute
    background:url(./assets/loding.gif) center center
#bottom
  display flex
  border-top: 1px solid #e5e5e5;
  padding: .05rem 0 .02rem;
  width: 100%;
  background: rgba(238,238,238,0.98);
  font-family: PingFangSC-Thin, sans-serif;
  $border()
  ul
    width 100%
    display flex
    .active
      color #1abc9c
    .buttom1
      flex 1
      vertical-align middle
      text-align center
      display flex
      flex-direction column
      justify-content space-between
      .font
        height .24rem
        font-size .18rem 
        line-height .24rem
      .myfont
        font-size .1rem 
.product-footer
    bottom: 0
    border-top-width: 1px
    border-top-style: solid
    ul
      display flex
      background-color: #fff
      color: #666
      li
        width: 15%;
        padding: .06rem 0;
        border-right: .5px solid #ccc;
        text-align center
        i
          font-size:.21rem;
          line-height: 1;
        p
          font-size: .12rem
      .product-footer-buy
        flex-grow: 1
        padding: 0
        border: none
        font-size: .16rem
        line-height: 0.47rem
        font-weight: bold
        color: #fff
</style>
