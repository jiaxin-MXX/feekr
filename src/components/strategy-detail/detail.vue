<template>
    <div v-if="show" class="theme-container guide-theme-list-container theme-mode detail-container">
                <header v-if='data.title' class="header-title-wrap txt-center font-lg regular-font">
                    <span>-</span>
                    <span class="section-title">{{data.title}}</span>
                    <span>-</span>
                </header>
                <div v-if="data.type==0">
                    <item v-for="value in data.theme" :key="value.id" :value='value'></item>
                </div>
                <div v-if="data.type==1">
                    <luxian v-for="value in data.theme" :key="value.id" :value='value'></luxian>
                </div>
                <div v-if="data.type==2">
                    <articlelist v-for="value in data.theme" :key="value.id" :value='value'></articlelist>
                </div>
                <div class="list-wrap" v-if="data.type==3">
                    <shoplist v-for="value in data.theme" :key="value.id" :value='value'></shoplist>
                </div>
                <div class="flex-wrap" v-if="data.type==4">
                    <nearby v-for="value in data.theme" :key="value.id" :value='value'></nearby>
                </div>
                <a v-if="data.bottom" href="javascript:void(0)" class="get-more-list" data-target="position">{{data.bottom}}</a>
            </div>
</template>
<script>
import item from './theme'
import luxian from './luxian'
import articlelist from './articlelist'
import shoplist from './shoplist'
import nearby from './nearby'
export default {
    props:['data'],
    data() {
        return {
            show:true
        }
    },
    components:{
        item,
        luxian,
        articlelist,
        shoplist,
        nearby
    },
    watch: {
        data(){
            console.log(this.data.theme)
            if(!this.data.theme.length){
                this.show=false
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
 .detail-container
        background: #fff
        padding: 0 .1rem
        margin-top: .1rem
        min-height: auto 
        .header-title-wrap
            color: #2D2D2D
            padding: .15rem 0
            line-height: 1.8
        .font-lg
            font-size: .16rem
        .txt-center
            text-align: center
        .get-more-list
            display: block
            text-align: center
            color: #1abc9c
            font-size: .14rem
            padding: .15rem 0 
        .list-wrap         
            display flex
            flex-wrap wrap
        .flex-wrap         
            display flex
</style>