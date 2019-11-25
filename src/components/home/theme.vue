<template>
  <div class="theme-entry home-common-base">
    <div class="common-header">
      <span :class='type=="home"?"commonent-header-line":"commonent-header-line2"' style="background-color: rgb(26, 188, 156);"></span>
      <span :class='type=="home"?"commonent-header-type":"commonent-header-type2"'>{{data.head}}</span>
      <span class="commonent-header-add">{{data.title}}</span>
      <a v-if="data.more" href="/more" class="story-entry-more">更多</a>
    </div>
    <div v-if="data.name === 'like'" class="maybe-like-box">
      <like v-for='value in data.theme' :key='value.id' :data='value' :name='data.name'></like>
    </div>
    <ul v-if="data.name === 'news'">
      <news v-for='value in data.theme' :key='value.id' :data='value' :name='data.name'></news>
    </ul>
    <ul v-if="data.name === 'theme'">
      <item v-for='value in data.theme' :key='value.id' :data='value' :name='data.name'></item>
    </ul>
  </div>
</template>

<script>
import item from './item.vue'
import like from './like.vue'
import news from './news.vue'
export default {
    props:['data','type'],
    watch: {
       data(){
         
       }
    },
    components:{
      item,
      like,
      news
    },
    mounted() {
      
    },
}
</script>

<style lang="stylus" scoped>
.home-common-base
    margin-top: .1rem
    padding-left: .112rem
    padding-right: .112rem
    background-color: #fff
    .common-header
        display: flex
        align-items: center
        padding-top: .2rem
        line-height: .2rem
        .commonent-header-line
            width: .04rem
            height: .13rem
            margin-right: .1rem
        .commonent-header-line2
                display none
        .commonent-header-type2
                width 100%
                text-align center
        .commonent-header-type 
            font-size: .15rem
        .commonent-header-add 
            text-indent: .1rem
            font-size: .12rem
            color: #999
        .story-entry-more
            flex-grow: 1
            font-size: .12rem
            text-align: right
            color: #1abc9c
    .maybe-like-box
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: .2rem;
</style>