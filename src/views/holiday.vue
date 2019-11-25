<template>
    <div class="dujia">
        <search></search>
        <mysection :result="result"></mysection>
        <div class="cent">
            <wanle :list='list'></wanle>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
import search from 'components/tsearch.vue'
import mysection from 'components/holiday/section.vue'
import wanle from 'components/holiday/wanle.vue'
import http from 'utils/http.js'
import bscroll from 'better-scroll'
Vue.use(Toast)
export default {
    data(){
        return {
            result:'',
            list:'',
            page:2,
            limit:'',
            on:false
        }
    },
    mounted() {
        let scroll = new bscroll(".cent", {
            click:true,
            pullUpLoad: true,
            probeType:2
        })
        // console.log(scroll)
        scroll.on('pullingUp',async ()=>{
            if(this.page<=this.limit){
                let result=await this.$options.mydata2(this.page) 
                this.list=[
                    ...this.list,
                    ...result.list
                ]
                await this.$nextTick();
                scroll.refresh()
                this.page++
            }else{
                if(this.list.length){
                    Toast({
                        message: '到底了~',
                        position: 'bottom',
                        duration: 1000
                    })
                }
            }
            scroll.finishPullUp()
        })
    },
    async mydata(params){
        let result=await http.get({
            url: "/api/shop/product/search_item",
            params
        })
        return result.data
    },
    async mydata2(index){
        let result = await http.get({
            url: "/api/shop/product/search",
            params:{
                style:this.parent.$store.state.list.myid1,
                city:this.parent.$store.state.list.mycity,
                sort:this.parent.$store.state.list.myid2,
                keyword:this.parent.$store.state.list.keyword, 
                productType: 1,
                paymentType: 1,
                page: index,
                shopid: 'FK'
            }
        });
        return result.data.result
    },
   
    watch: {
        result(){
            this.$store.commit('settype',true)
            // this.scroll.refresh()
        },
        '$store.state.list.myid1':async function(){
            let style=this.$store.state.list.myid1
            let result=await this.$options.mydata({
                style,
                city:'',
                keyword:'',
                shopid: 'FK'
            })
            this.result=result.result
            await this.changeCity()
        },
        '$store.state.list.myid2':async function(){
            await this.changeCity()
        },
        '$store.state.list.mycity':async function(){
            await this.changeCity()
        },
        '$store.state.list.keyword':async function(){
            await this.changeCity()
        },
        list(){
            if(!this.list.length){
               Toast({
                    message: '没有数据哦',
                    duration: 1000
                })
            }
        }
    },
    async beforeCreate() {
        // this.$store.commit('setbottom2',false)
        let result=await this.$options.mydata({
                style: 1,
                city:'',
                keyword:'',
                shopid: 'FK'
            })
        this.result=result.result
        let result2=await this.$options.mydata2(1)
        this.list=result2.list
        this.limit=Math.ceil(result2.totalCount/this.list.length)
    },
    methods: {
         async changeCity(){
            // console.log(this)
            let result2=await this.$options.mydata2(1)
            await this.$nextTick()
            this.list=result2.list
            this.limit=Math.ceil(result2.totalCount/this.list.length)
            this.page=2
        },
    },
    components:{
        search,
        mysection,
        wanle
    },
    
}
</script>

<style lang="stylus"  scoped>
.dujia
    width 100%
    height 100%
    display flex
    flex-direction column
    position absolute
    z-index:0
    .cent
        flex:1
        overflow :hidden
</style>