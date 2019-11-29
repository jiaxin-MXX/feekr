<template>
    <div class="guide">
        <div>
            <div class="city-container"><img :src='detail.cover+"!640X376"'>
                <div class="city-name txt-center">
                    <p class="city regular-font">{{detail.cityName}}</p>
                    <p class="font-md regular-font">{{detail.fxbCount}}位飞小编为你推荐</p>
                </div>
                <a href="javascript:;" class="iconfont back-btn" data-history="back"></a>
            </div>
            <div class="guide-nav">
                <nav class="table-mode">
                    <a v-for="value in guidecategory" @click="click(value.id)" :key="value.id" class="menu table-cell" href="javascript:void(0)"
                        data-target="clear">
                         <p class="cate-icon"><img :src="value.img" alt=""></p>
                        <p class="cate-name font-sm"><span class="nav-name">{{value.title}}</span></p>
                    </a>
                </nav>
            </div>
            <detail :data='themelist'></detail>
            <detail :data='luxian'></detail>
            <detail :data='articlelist'></detail>
            <detail :data='shoplist'></detail>
            <detail :data='nearby'></detail>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
import bscroll from 'better-scroll'
import detail from 'components/strategy-detail/detail'
export default {
    data(){
        return {
            detail:'',
            guidecategory:[],
            themelist:{},
            luxian:{},
            articlelist:{},
            shoplist:{},
            nearby:{},
            source: null,
            list:['meijing','meishi','meisu','meiwu']
        }
    },
    cancelQuest() {
        if (typeof this.source === 'function') {
            this.source('终止请求'); //取消请求
        }
    },
    async getdata(options){
        let result=await http.get(options)
        return result.data.result
    },
    async getdata2(id,url,count,that){
        let result=await http.get({
            url,
            params:{
                id,               
                count,
                recommend: 1
            },
            that,
        })
        return result.data.result.list
    },
    async created() {
        
        this.$store.commit('setbottom',false)
        var id=this.$route.params.id
        let result=await this.$options.getdata({
            url:'/api/guide/detail',
            params:{
                id,
            },
            that:this
        })
        this.detail=result
        result=await this.$options.getdata({
            url:'/api/guide/guidecategory',
            params:{
                id
            },
            that:this
        })
        this.guidecategory=result.list
        result=await this.$options.getdata2(id,'/api/guide/themelist',3,this)
        this.themelist={
            type:0,
            title:'主题推荐',
            theme:result,
            bottom:'更多主题推荐'
        }
        this.$store.commit('settype',true)
        result=await this.$options.getdata2(id,'/api/guide/pathlist',2,this)
        this.luxian={
            type:1,
            title:'路线推荐',
            theme:result,
            bottom:'更多路线'
        }
        result=await this.$options.getdata2(id,'/api/guide/articlelist',2,this)
        this.articlelist={
            type:2,
            title:'私藏资讯',
            theme:result,
            bottom:'更多私藏资讯'
        }
        result=await this.$options.getdata2(id,'/api/guide/shoplist',2,this)
        this.shoplist={
            type:3,
            title:'玩乐度假',
            theme:result,
            bottom:'更多玩乐度假'
        }
        result=await this.$options.getdata({
            url:'/api/guide/nearby',
            params:{
                cityId:id,               
            },
            that:this
        })
        this.nearby={
            type:4,
            title:'周边城市',
            theme:result.list,
            bottom:''
        }
        console.log(this.nearby)
        await this.$nextTick()
        this.scroll.refresh()
        

    },
    async mounted() {
        this.scroll = new bscroll(".guide", {
                click: true,
                pullUpLoad: true,
                probeType:2
            });
        await this.$nextTick()
        this.scroll.refresh()
    },
    components:{
        detail
    },
    beforeRouteLeave (to, from, next) {
        if(to.name=='strategy'){
            this.$store.commit('setbottom',true)
        }
        this.$store.commit('settype',false)
        next()
    },
    methods: {
        click(cid){
            this.$router.push({name:this.list[cid-1],params:{id:this.$route.params.id,cid}})
        }
    },
    watch: {
        async '$route.params.id'(){
            this.$store.commit('settype',false)
            let result=await this.$options.getdata({
                    url:'/api/guide/detail',
                    params:{
                        id:this.$route.params.id
                    }
                })
            this.detail=result
                result=await this.$options.getdata({
                    url:'/api/guide/guidecategory',
                    params:{
                        id:this.$route.params.id
                    }
                })
                this.guidecategory=result.list
                result=await this.$options.getdata2(this.$route.params.id,'/api/guide/themelist',3)
                this.themelist={
                    type:0,
                    title:'主题推荐',
                    theme:result,
                    bottom:'更多主题推荐'
                }
                
                result=await this.$options.getdata2(this.$route.params.id,'/api/guide/pathlist',2)
                this.luxian={
                    type:1,
                    title:'路线推荐',
                    theme:result,
                    bottom:'更多路线'
                }
                result=await this.$options.getdata2(this.$route.params.id,'/api/guide/articlelist',2)
                this.articlelist={
                    type:2,
                    title:'私藏资讯',
                    theme:result,
                    bottom:'更多私藏资讯'
                }
                result=await this.$options.getdata2(this.$route.params.id,'/api/guide/shoplist',2)
                this.shoplist={
                    type:3,
                    title:'玩乐度假',
                    theme:result,
                    bottom:'更多玩乐度假'
                }
                result=await this.$options.getdata({
                    url:'/api/guide/nearby',
                    params:{
                        cityId:this.$route.params.id,               
                    }
                })
                this.nearby={
                    type:4,
                    title:'周边城市',
                    theme:result.list,
                    bottom:''
                }
                this.$store.commit('settype',true)
            await this.$nextTick()
            this.scroll.refresh()
            this.scroll.scrollTo(0,0)

        }
    },
}
</script>

<style lang="stylus" scoped>
.guide
    height: 100%
    display: flex
    flex-direction column
    flex: 1  
    overflow hidden
    .city-container 
        position: relative
        background: #000
        img
            display: block;
            width: 100%;
            opacity: .8
        .city-name
            position: absolute
            color: #fff
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            -webkit-transform: translate(-50%, -50%)
            line-height: 2
            .city
                font-size: .2rem
                color: #fff
                line-height: 2
            .font-md
                font-size: .14rem
                color: #fff
                line-height: 2
        .txt-center
            text-align: center
    .guide-nav
        padding: .15rem 0
        .table-mode
            width: 100%
            display :flex
            justify-content : space-around
            .table-cell
                width: 25%
                text-align: center
                .cate-icon
                    display: inline-block
                    background: #fff
                    width: .45rem
                    height: .45rem
                    border-radius: 50%
                    color: #333
                    line-height: .45rem
                    img
                        width .26rem
                .cate-name 
                    color: #666
                    margin-top: .03rem
                .font-sm
                    font-size: .12rem  
</style>