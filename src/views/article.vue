<template>
    <div class="article">
        <div>
            <div v-show="mydata!=''" class="inner-wrap">
                <header class="back-title">
                    <van-icon size='.22rem' @click="handleclick" class="icon-fanhui" name="arrow-left"/>
                    <span class="wenz">文章详情</span>
                    <van-icon size='.22rem' class="icon-wujiaoxingkong1 favor-btn" name="star-o" />
                    <van-icon size='.22rem' class='icon-fenxiang share-btn' name="share" />
                </header>
            </div>
            <div class="article-container body-space">
                <div class="title regular-font">{{mydata.title}}</div>
                <a href="javascript:void(0)" class="author  author-link">
                    <img :src='mydata.authAvatar'
                        alt=""><span>{{mydata.nickname}}</span>
                </a>
                <div class="view-count"><span>总阅读数</span>{{mydata.viewCount}}</div>
            </div>
            <div class="con" v-html="mydata.content">

            </div>
            <div class="qcode-wrap article-qcode-wrap">
                <p class="describe">每天推荐小众特色私藏冷门，人少好玩的旅行地</p>
                <img src="https://res01.feekr.com/logo/feekr_copyright.png" class="feekr-right">
                <img src="https://res01.feekr.com/logo/qrcode.jpg" alt="">
                <p class="contact">投稿联系</p>
                <p class="contact">mytrip2@feekr.com</p>
            </div>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
import Vue from 'vue';
import { Icon } from 'vant';
import bscroll from 'better-scroll'
Vue.use(Icon);
export default {
    data() {
        return {
            mydata:''
        }
    },
    async beforeCreate() {
        this.$store.commit('setbottom',false)
        this.$store.commit('setbottom2',false)
        let id=this.$route.params.id
        let result=await http.get({
            url:"/api/article/detail",
            params:{
                id
            }
        })
        this.mydata=result.data.result.content
        this.$store.commit('settype',true)
    },
    mounted() {
        let scroll = new bscroll('.article',{
            click:true
        })
    },
    methods: {
        handleclick(){
            history.go(-1)
        }
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('settype',false)
        next()
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.article
    height 100%
    overflow hidden
    background #FFF
    .back-title
        padding: .1rem
        font-size: .17rem
        $border(0 0 1px 0,#e5e5e5)
        background: #fff
        display: flex;
        justify-content: space-around;
        align-items: center;
        .wenz
            flex: 0.8;
            text-align: center  
        .icon-fanhui
            cursor:pointer
    .article-container
        margin-top: 0
        padding: .2rem .1rem
    .body-space
        padding-top: .1rem
        .title
            font-size: .16rem
            line-height: 1.7 
        .author
            color: #666
            font-size: .12rem
            display: inline-block
            padding: .1rem 0
            img
                display: inline-block
                vertical-align: middle
                width: .2rem
                height: .2rem
                border-radius: 50%
            span
                vertical-align: middle
                padding-left: .05rem
        .view-count
            font-size: .12rem
            color: #666
            display: inline-block
            padding-top: .12rem
            margin-left: .1rem
    .con
        padding: 0 .1rem .2rem
        >>>p
            margin: .05rem
            line-height: 1.6
            font-size: 17px
            img
                display: block
                margin: .05rem auto
                width: 100%
    .qcode-wrap
        border-top: 1px solid #E8E8E8
        padding: .2rem
        text-align: center
        background: #fff
        .describe
            margin-top: -.02rem
            text-align: center
            font-size :.1rem
        img
            margin-top: .1rem;
            width: 40%
            display: block
            margin: 0 auto
        .feekr-right
            margin-top: .2rem;
            width: 60%;
        .contact
            line-height: 1.8
            font-size :.1rem
</style>