<template>
  <div id="cen">
    <search></search> 
      <div class="con-content">
        <div>
                <van-swipe :autoplay="3000" indicator-color="white" indicator-with="8px">
                <van-swipe-item v-for="item in slider" :key="item.cover">
                  <a class="banner-link">
                    <img :src="item.cover" />
                  </a>
                </van-swipe-item>
              </van-swipe>
              <van-grid :column-num="4" :border="false" :icon-size='"40px"'>
                <van-grid-item
                  v-for="value in style"
                  :key="value.id"
                  :icon="value.icon"
                  :text="value.name"
                />
              </van-grid>
              <homeHot :newProduct="newProduct" :specialsProduct="specialsProduct"></homeHot>
              <theme type='home' :data='theme'></theme>
              <theme type='home' :data='newlist'></theme>
              <theme v-if="like.theme.length!=0" type='home' :data='like'></theme>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash"
import { Swipe, SwipeItem, Grid, GridItem,Loading, Toast } from "vant";
import search from "components/search.vue";
import homeHot from "components/home/home-hot.vue";
import theme from "components/home/theme.vue";
import BScroll from "better-scroll";
import http from "utils/http";
Vue.use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Loading).use(Toast);
export default {
  data() {
    return {
      slider: [],
      style: [],
      newProduct:[],
      specialsProduct:[],
      theme:[],
      newlist:[],
      like:{
            head:'猜你喜欢',
            title:'这些也许是你喜欢的',
            name:'like',
            more:true,
            theme:[]
          },
    };
  },
  async beforeCreate() {
    let result = await http.get({
      url: "/api/shop/home/index",
      params: {
        shopid: "FK"
      }
    });
    this.slider = result.data.result.slider;
    this.style = result.data.result.style;
    this.newProduct = result.data.result.newProduct;
    this.specialsProduct = result.data.result.specialsProduct;
    let{ theme }= result.data.result;
    this.theme={
      head:'主题推荐',
      title:'给出完美的旅游推荐',
      name:'theme',
      more:false,
      theme
    }
    let result2 = await http.get({
      url: "/api/news/lists",
      params: {
        shopid: "FK"
      }
    });
    var length=result2.data.result.list.length
    this.newlist={
      head:'攻略资讯',
      title:'推荐城市深度旅游攻略',
      name:'news',
      more:true,
      theme:_.dropRight(result2.data.result.list,(length-3))
    }
    
    
    // console.log(result2.data.result)
    // this.scroll.refresh()
  },
  mounted() {
    scroll = new BScroll(".con-content", {
      click: true,
      pullUpLoad: true,
      probeType:2
    });
    let minpage=1;
    let result3
    scroll.on('pullingUp',async()=>{
      // console.log(1)
      if(minpage<=3){
          result3 = await http.get({
          url: "/api/shop/home/guess_like",
          params: {
            page:minpage,
            shopid: "FK"
          }
        })
        this.like.theme=[
          ...this.like.theme,
          ...result3.data.result.list
        ]
        await this.$nextTick();
        scroll.refresh()
        minpage++
      }else{
        Toast({
          message: '到底了~',
          position: 'bottom',
          duration: 1000
        })
      }
      scroll.finishPullUp()
    })
  },
  watch: {
    newlist(){
      this.$store.commit('settype',true)
    }
  },
  components: {
    search,
    homeHot,
    theme
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('settype',false)
    next()
  }
};
</script>

<style lang="stylus" scoped>
#cen
  height: 100%;
  display: flex;
  flex-direction: column;
  position absolute;
  width: 100%;
  .con-content
    flex: 1;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position relative
    .jiazai
      width 100%;
      height 100%
      background yellow 
      position relative
    .van-swipe
      height: 27vh;

      .banner-link
        img 
          width: 100%;
    .van-grid 
      padding-bottom: 0.2rem;
      background-color: #fff;
      .van-icon__image
        width: 0.4rem;
        height: 0.4rem;
</style>