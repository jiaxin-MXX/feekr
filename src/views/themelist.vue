<template>
    <div id="themelist">
        <div style="overflow:hidden;height:100%;display:flex;flex-direction: column">
            <head class="themeL">
                <router-link active-class='active' tag="div" :to="{name:'meijing',params:{cid:1}}">美食</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meishi',params:{cid:2}}">美景</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meisu',params:{cid:3}}">美宿</router-link>
                <router-link active-class='active' tag="div" :to="{name:'meiwu',params:{cid:4}}">美物</router-link>
            </head>
            <div class="center" style="overflow:hidden;height:100%;flex:1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import http from 'utils/http'
export default {
    data() {
        return {
            
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
</style>