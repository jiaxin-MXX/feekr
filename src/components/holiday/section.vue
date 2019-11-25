<template>
    <section class="search-select-box">
        <div class="search-select-options">
            <button @click="click1()" data-nav="styleTable" :class="sty1?'base-color':''" class="search-select-items">{{$store.state.msg1}}
                <van-icon :class="sty1?'iconfontdown':''" name="arrow-down" />
            </button>
            <button @click="click3()" data-nav="cityTable" :class="$store.state.onoff3?'base-color':''" class="search-select-items">{{$store.state.msg2}}
                <van-icon :class="$store.state.onoff3?'iconfontdown':''" name="arrow-down" />
            </button> 
            <button @click="click2()" data-nav="sortTable" :class="sty2?'base-color':''" class="search-select-items search-select-no-border">{{$store.state.msg3}}
                <van-icon :class="sty2?'iconfontdown':''" name="arrow-down" />
            </button>
        </div>
        <myul v-on:onoff="onoff1" class="one" temp='one' v-show="sty1" :data='style'></myul>
        <mybul  class="three" v-show="$store.state.onoff3" :data='city'></mybul>
        <myul v-on:onoff="onoff2" class="two" temp='two' v-show="sty2" :data='sort'></myul>
         
    </section>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import myul from './list.vue'
import mybul from './blist.vue'
Vue.use(Icon);
export default {
    props:['result'],
    data() {
        return {
            city:'',
            sort:'',
            style:'',
            sty1:false,
            sty2:false,
        }
    },
    mounted() {
    //    console.log(this.$refs.msg1)
    },
    computed: {
        
    },
    methods: {
        click1(){
            this.sty1=!this.sty1
            this.sty2=false
            this.$store.commit('setonoff3',false)
        },
        click2(){
            this.sty2=!this.sty2
            this.sty1=false
            this.$store.commit('setonoff3',false)
        },
        click3(){
            this.$store.commit('setonoff3',!this.$store.state.onoff3)
            this.sty2=this.sty1=false
        },
        onoff1(res){
            this.sty1 = res;
        },
        onoff2(res){
            this.sty2 = res;
        },
    },
    watch: {
        async result(){
            await this.$nextTick()
            this.result.style.unshift({id: 0, name: "全部分类"})
            this.city=this.result.city
            this.sort=this.result.sort
            this.style=this.result.style
        },
    },
    components:{
        myul,
        mybul
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.search-select-box
    display: block
    .search-select-options
        display: flex
        justify-content: space-around
        padding: .115rem 0
        background-color: #fff
        border-bottom: .25px solid #e6e6e6
        $border()
        .search-select-items
            width: 33%;
            height : .16rem
            font-size: .11rem;
            line-height: .16rem;
            text-align: center;
            border-right: .25px solid #e6e6e6;
            background-color: transparent;
            border: none;
            $border(0 1px 0 0)
            .iconfontdown
                transform: rotate(180deg);
                color: inherit;
        .search-select-no-border
            $border(0 0 0 0)
        .base-color
            color: #1abc9c!important
</style>