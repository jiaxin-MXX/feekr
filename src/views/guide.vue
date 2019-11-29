<template>
    <div class='guide'>
        <div>
            <header class="header">
            <p>
                <img :src='mydata.cover+"!600X400"' class="cover">
            </p>
            <div class="title txt-center">
                <strong>{{mydata.title}}</strong>
            </div>
            <a href="javascript:;" class="iconfont back-btn" data-history="back"></a>
            </header>
            <div class="content body-space">
                <div>
                    <p><strong v-if='$route.params.path=="pathdetail"'>行程总介绍：</strong>{{mydata.desc}}
                    </p>
                    <div v-if='mydata.tips'>
                        <p v-for="item in mydata.tips" :key="item.title"><strong>{{item.title}}：</strong>{{item.desc}}</p>
                    </div>
                    <div v-if='mydata.path'>
                        <p  v-for="(value,index) in mydata.path" :key="index"><strong>DAY{{index+1}}路线：</strong>{{value.join('－')}}</p>
                    </div>
                </div>
                <div v-if='$route.params.path=="pathdetail"'>
                    <mysession v-for="(value,index) in mydata.play" :key="value.title" :data='value' :path='"pathdetail"' :index='index'></mysession>
                </div>
                <div v-if='$route.params.path=="themedetail"'>
                    <mysession v-for="(value,index) in mydata.list" :key="value.title" :data='value' :path='"themedetail"' :index='index'></mysession>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import http from 'utils/http'
import bscroll from 'better-scroll'
import mysession from 'components/guide/session'
export default {
    data() {
        return {
            mydata:''
        }
    },
    components:{
        mysession
    },
    async beforeCreate() {
        this.$store.commit('setbottom',false)
        this.$store.commit('setbottom2',false)
        let result=await http.get({
            url:`/api/guide/`+this.$route.params.path,
            params:{
                id:this.$route.params.id
            }
        })
        console.log(result.data.result)
        this.mydata=result.data.result
        this.$store.commit('settype',true)
    },
    async mounted() {
        let scroll =new bscroll('.guide',{
            click:true
        })
        await this.$nextTick();
        scroll.refresh()
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('settype',false)
        next()
    }
}
</script>

<style lang="stylus" scoped>
.guide
    background: #fff;
    color: #3e3e3e;
    width: 100%;
    height 100%;
    overflow hidden
    .header
        font-size: 18px;
        position: relative
        img
            width: 100%;
            max-width: 100%;
            display: block;
        .title
            font-size: .16rem
            padding: .15rem
        .txt-center
            text-align: center
    .content
        line-height: 2;
        padding-top: 0;
        padding-bottom: .2rem;
        padding-left: .15rem;
        padding-right: .15rem
</style>
