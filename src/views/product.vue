<template>
    <div id="product" :key="index" style="height:100%;overflow:hidden">
        <div>
            <van-swipe show-indicators indicator-color='#fff' @change="onChange">
                <van-swipe-item v-for="item in mydata.productThumb" :key="item"><img :src='item+"!750X422"' alt=""></van-swipe-item>
                <div class="custom-indicator" slot="indicator">
                    {{ current + 1 }} / {{length}}
                </div>
            </van-swipe>
            <div class="product-detail-head">
                <h5 class="product-detail-art">{{mydata.productDesc}}</h5>
                <h3 class="product-detail-name">{{mydata.productName}}</h3>
                <p class="product-detail-price" style="color: rgb(26, 188, 156);"><b>¥{{mydata.productPrice}}</b><span> 起/{{mydata.productUnitCount}}{{mydata.productUnit}}</span>
                </p>
            </div>
            <section v-if='mydata.user' class="product-guide"><img :src='mydata.head'>
                <p>旅游体验师 - {{mydata.user}}</p>
                <h4>为你推荐</h4>
                <h5>{{mydata.recom}}</h5>
            </section>
            <van-tabs title-active-color='rgb(26, 188, 156)' color='rgb(26, 188, 156)' line-width='33.3%' class="product-detail-tab">
                <van-tab :to="{name:'contain', params:{contain}}" title="费用包含">
                </van-tab>
                <van-tab :to="{name:'detail', params:{detail}}" title="产品详情">
                </van-tab>
                <van-tab :to="{name:'notice', params:{notice}}" title="购买须知">
                </van-tab>
            </van-tabs>
            <router-view></router-view>
            <!-- </transition> -->
            <theme type='product' v-if="like.theme&&like.theme.length" :data='like'></theme>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem , Sticky,Tab, Tabs } from 'vant';
import theme from "components/home/theme.vue";
import http from 'utils/http.js'
import bscroll from 'better-scroll'
Vue.use(Swipe).use(SwipeItem).use(Sticky).use(Tab).use(Tabs);
export default {
    data() {
        return {
            current: 0,
            mydata:'',
            length:'',
            contain:'',
            detail:'',
            notice:'',
            like:'',
            index:''
        }
    },
    watch: {
        mydata(){
            this.$store.commit('settype',true)
        },
        async '$route.params.id'(){
            this.$store.commit('settype',false)
            this.index=this.$route.params.id
            this.mydata=await this.$options.get1(this.index)
            this.length=this.mydata.productThumb.length
            this.contain=this.mydata.productContain
            this.detail=this.mydata.productDetail
            this.notice={
                recom:this.mydata.usage,
                rule:this.mydata.rule,
                kefu:this.mydata.kefu,
            }
            this.like=await this.$options.get2(this.mydata.productCategory)
            
            this.$store.commit('settype',true)
            this.scroll = new bscroll("#product", {
                click: true,
                pullUpLoad: true,
                probeType:2
            });
            await this.$nextTick()
            this.scroll.refresh()
            this.$router.push({name:'contain',params:{
                contain:this.contain
            }})
        }
    },
    async get1(id){
        let result = await http.get({
            url:'/api/shop/product/detail',
            params:{
                productId: id,
                pvFrom: 'wap_index_guess',
                shopid: 'FK'
            }
        })
        return result.data.result
    },
    async get2(id){
        let result2 = await http.get({
            url:'/api/shop/product/like',
            params:{
                productCategoryId: id,
                count: 4,
                shopid: 'FK',
            }
        })
        return {
            head:'猜你喜欢',
            title:'',
            name:'like',
            more:false,
            theme:result2.data.result.list  
        }
    },
    async created() {
        this.$store.commit('setbottom',false)
        this.$store.commit('setbottom2',true)
        this.mydata=await this.$options.get1(this.$route.params.id)
        this.length=this.mydata.productThumb.length
        this.contain=this.mydata.productContain
        this.detail=this.mydata.productDetail
        this.notice={
            recom:this.mydata.usage,
            rule:this.mydata.rule,
            kefu:this.mydata.kefu,
        }
        this.like=await this.$options.get2(this.mydata.productCategory)
        this.$router.push({name:'contain',params:{
            contain:this.contain
        }})
    },
    async mounted() {
        this.scroll = new bscroll("#product", {
            click: true,
            pullUpLoad: true,
            probeType:2
        });
        await this.$nextTick()
        this.scroll.refresh()
    },
    beforeDestroy() {
        this.$store.commit('setbottom',true)
        this.$store.commit('setbottom2',falser)
    },
    methods: {
        handleclick(){
            this.$router.go(-1)
        },
        onChange(index) {
            this.current = index;
        }
    },
    components:{
        theme
    }
}
</script>

<style lang="stylus" scoped>
.van-swipe-item img
        width: 100%
        vertical-align: middle
.custom-indicator
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1)
.product-detail-head
    position: relative
    padding: 0 .12rem
    text-align: center
    background-color: #fff
    .product-detail-art
        font-size: .17rem
        line-height: .25rem
        padding-top: .125rem
        padding-bottom: .16rem
        font-weight: 400
    .product-detail-name
        font-size: .11rem
        color: #666
        font-weight: 400
    .product-detail-price
        margin-top: .1rem
        padding-bottom: .19rem
        line-height: .15rem
        b
            font-size: .19rem
            font-weight: bolder
            color: rgb(26, 188, 156)
        span
            font-size: .11rem
            color: rgb(26, 188, 156)
.product-guide
    padding: .19rem .21rem .3rem
    margin-top: .13rem;
    background-color: #fff
    img 
        display: block
        margin: 0 auto
        width: .5rem
        height: .5rem
        border-radius: 50%
    p 
        margin: .12rem .1rem
        font-size: .1rem
        color: #9b9b9b
        font-weight: 400
        text-align: center
    h4
        font-weight: bold
        font-size: .13rem
        text-align: center
    h5
        position: relative
        margin-top: .25rem
        padding: .08rem .1rem
        font-size: .13rem
        line-height: .25rem
        color: #282828
        background-color: #f5f5f5
        font-weight: 400
    >:before
        position: absolute;
        left: 50%;
        top: -0.22rem;
        transform: translateX(-50%);
        content: '';
        border-top: .11rem solid transparent
        border-right: .075rem solid transparent
        border-bottom: .11rem solid #f5f5f5
        border-left: .075rem solid transparent
.product-detail-tab
    display: flex
    flex-wrap: nowrap
    font-size: 0.13rem
    line-height: .41rem
    text-align: center
    margin-top: .13rem
    background-color: #fff
    border-bottom: .5px solid #e8e8e8
    >>>.van-tabs__wrap
        width:100% 
    li
        flex-grow: 1;
        border-bottom: 2px solid transparent;
        list-style: none
    .active
        color: rgb(26, 188, 156)
        border-bottom-color: rgb(26, 188, 156)
.active
    color: rgb(26, 188, 156);
    border-bottom-color: rgb(26, 188, 156)
</style>