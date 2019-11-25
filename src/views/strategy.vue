<template>
  <div id="gonglue">
    <searh></searh>
    <div class="city">
      <div class='scroll'>
          <section class="season-recommend-container">
        <div class="season-recommend">
          <header class="header-title-wrap txt-center font-lg regular-font">
            <span>-</span>
            <span class="section-title">当季小众推荐</span>
            <span>-</span>
          </header>
          <div class="item-container clearfix body-space">
            <a
              v-for="item in dangzhong"
              :key='item.scenic'
              href="javascript:void(0)"
              @click="handleclick(item.scenic)"
              class="item pull-left"
              data-target="position"
            >
              <img
                :data-original='item.cover+"!621X327"'
                class
                :src='item.cover+"!621X327"'
                style="display: block;"
              />
              <div class="item-title txt-center city-title font-md">{{item.cityName}}</div>
              <div class="item-desc txt-center city-desc font-sm">{{item.desc}}</div>
            </a>
          </div>
        </div>
      </section>
      <mysession v-for="value in city" :key='value.area' :value='value'></mysession>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import searh from "components/search.vue";
import http from 'utils/http.js'
import _ from 'lodash';
import bscroll from 'better-scroll'
import mysession from 'components/strategy/mysession.vue'
import {Toast} from "vant";
Vue.use(Toast);
export default {
    data() {
        return {
            dangzhong:'',
            city:''
        }
    },
    mounted() {
        this.scroll = new bscroll(".city", {
            click: true,
            pullUpLoad: true,
            probeType:2
        });
        this.scroll.on('pullingUp',()=>{
            Toast({
                message: '到底了~',
                position: 'bottom',
                duration: 1000
            })
            this.scroll.finishPullUp()
        })
    },
    methods: {
      handleclick(id){
        this.$router.push({name:'Sdetail',params:{id}})
      }
    },
    async beforeCreate() {
        // this.$store.commit('setbottom2',false)
        let result=await http.get({
            url: "/api/guide/cityrecommend",
        })
        result = _.dropRight(result.data.result.list,2)
        this.dangzhong=result
        result=await http.get({
            url: "/api/guide/citylist",
        })
        this.city=result.data.result.list
        await this.$nextTick()
        this.scroll.refresh()
    },
    watch: {
        city(){
            this.$store.commit('settype',true)
            this.scroll.refresh()
        }
    },
    components: {
        searh,
        mysession
    },
    beforeRouteLeave (to, from, next) {
    this.$store.commit('settype',false)
    next()
  }
};
</script>

<style lang="stylus" scoped>
#gonglue 
  position: absolute
  height: 100%
  display: flex
  width: 100%
  flex-direction: column
  .city
    display: flex
    width: 100%
    flex-direction: column
    flex: 1
    overflow hidden
    .season-recommend
        background: #fff;
        margin-top: .1rem;
        .header-title-wrap
            color: #2D2D2D
            padding: .15rem 0
            font-size: .16rem
            text-align :center
            line-height :.28rem
    .clearfix:after
        display: block;
        content: '';
        clear: both;
    .item-container
        padding: .1rem;
        padding-top: 0;
        padding-bottom: 0;
        .item
            display: block
            width: 48.5%
            margin-left: 3%
            margin-bottom: .15rem
            img
                display: block
                width: 100%
            .item-title
                color: #2D2D2D
                padding: .05rem 0 0
                font-size: .14rem
                text-align: center
                line-height .25rem
            .city-desc
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: #666
                font-size: .12rem
                text-align: center
        .pull-left
            float: left;
        .item:nth-child(odd)
            margin-left: 0
</style>