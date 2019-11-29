<template>
    <div id="themelist">
        <div style="overflow:hidden;height:100%;display:flex;flex-direction: column">
            <van-tabs class="themeL" v-model="active">
                <van-tab :to="{name:'meijing',params:{cid:1}}" title="美食"></van-tab>
                <van-tab :to="{name:'meishi',params:{cid:2}}" title="美景"></van-tab>
                <van-tab :to="{name:'meisu',params:{cid:3}}" title="美宿"></van-tab>
                <van-tab :to="{name:'meiwu',params:{cid:4}}" title="美物"></van-tab>
            </van-tabs>
            <!-- <head class="themeL">
                
                <router-link active-class='active' tag="div" :to="{name:'meijing',params:{cid:1}}">美食</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meishi',params:{cid:2}}">美景</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meisu',params:{cid:3}}">美宿</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meiwu',params:{cid:4}}">美物</router-link>
            </head> -->
            <div class="center" style="overflow:hidden;height:100%;flex:1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
export default {
    data() {
        return {
            active:this.$route.params.cid-1
        }
    },
    async beforeCreate() {
        this.$store.commit('setbottom',false)
        this.$store.commit('setbottom2',false)
        let result=await http.get({
            url:'/api/guide/guidecategory',
            params:{
                id:this.$route.params.id
            }
        })
        console.log(result.data.result)
        this.$store.commit('settype',true)
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('settype',false)
        next()
    },
}
</script>

<style lang="stylus" scoped>
#themelist
    height 100%
    overflow hidden
.themeL
    text-align center
    display flex
    background #fff
    justify-content space-around
    div
        width: 21%
        margin :.15rem 0 0
        padding :0 .18rem .15rem
        font-size: .14rem
    .center
        flex 1
        overflow hidden
.active
    color: #1abc9c
    border-bottom: 1px solid #1abc9c
>>>.van-tabs__wrap
    width 100%
    >>>.van-tabs__nav--line
        width: 100%;
>>>.van-tabs__content
    display none
</style>