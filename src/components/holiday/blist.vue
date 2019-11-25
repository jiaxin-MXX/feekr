<template>
    <div style="display: none;" class="search-select-detail search-select-sub-box">
            <ul @click="handleclick($event)" class="search-select-sub" v-show="incity.length&&outcity.length">
                <li data-label="全部" data-id="0" class="search-select-label2 base-color">
                    全部
                </li>
                <li data-label="国内" data-id="1" class="search-select-label2">
                    国内
                </li>
                <li data-label="国外" data-id="2" class="search-select-label2">
                    国外
                </li>
            </ul>
            <myul2 :data='temp'></myul2>
        </div>
</template>

<script>
import myul2 from './list2.vue'
export default {
    props:['data'],
    data() {
        return {
            incity:[],
            outcity:[],
            temp:''
        }
    },
    methods: {
        handleclick(e){
            for(const value of e.target.parentNode.children){
                value.setAttribute('class','search-select-label2')
            }
            e.target.classList.add("base-color")
            // console.log($(e.target).index())
            switch($(e.target).index()){
                case 0:
                    this.temp=this.data;
                break;
                case 1:
                    this.temp=this.incity;
                break;
                case 2:
                    this.temp=this.outcity;
                break;
            }
        }
    },
    watch: {
        async data(){
            // console.log(this.data)
            await this.$nextTick()
            this.temp=this.data
            this.incity=[]
            this.outcity=[]
            for(const value of this.data){
                if(value.country==1){
                    this.incity.push(value)
                }else{
                    this.outcity.push(value)
                }
            }
        }
    },
    components:{
        myul2
    }
}
</script>


<style lang="stylus" scoped>
@import '~assets/border.styl'
.search-select-detail
    position: absolute
    display: flex
    width: 100%
    z-index :9999
    ul
        display :block
        .search-select-label2
            text-align :center
            line-height: .355rem
            font-size: .13rem
            background-color: #f6f6f6
            $border(0 0 1px 0,#e6e6e6,solid)
        .base-color
            color: #1abc9c
    .search-select-sub-box
        display: flex
    .search-select-sub
        width: 30%;
        background-color: #f6f6f6
    .search-select-sub-detail
        flex-grow: 1
        background-color: #fff
        height: 52vh
    .common-scroll-y
        overflow-y: scroll
</style>