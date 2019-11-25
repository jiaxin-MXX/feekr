<template>
    <ul class="search-select-detail search-select-more common-scroll-y">
            <li :myid='value.id' v-for="(value,index) in data" @click="handleclick(index)" :key="value.id" data-label="全部分类" data-id="0" class="search-select-label">
                {{value.name}}
            </li>
        </ul>
</template>

<script>
export default {
    props:['data','temp'],
    data() {
        return {
            tempindex:'',
            mes1:"玩乐体验",
            mes2:"目的地",
            myid1:1,
            myid2:1,
        }
    },
    created() {
        console.log(this.temp)
    },
    mounted() {
    
    },
    methods: {
        handleclick(index){
            // console.log(1)
            let str='.'+`${this.temp}`+' .search-select-label'
            if(this.tempindex==0 || this.tempindex){
                $(str).eq(this.tempindex).removeClass('base-color')
            }
            $(str).eq(~~index).addClass('base-color')
            this.tempindex=~~index
            if(this.temp=='one'){
                this.$store.commit('list/setmyid1',$(str).eq(~~index).attr('myid'))
                this.$store.commit('setmsg1',$(str).eq(~~index).text())
                this.$emit('onoff',false);
            }else{
                this.$store.commit('list/setmyid2',$(str).eq(~~index).attr('myid'))
                this.$store.commit('setmsg3',$(str).eq(~~index).text())
                this.$emit('onoff',false);
            }
           
            // console.log(this.mes)
        },
    },
    watch: {
    },
    
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
     ul
        width:100%
        display :block
        position :absolute
        z-index : 9999
        .search-select-label
            padding-left: .125rem
            line-height: .355rem
            font-size: .13rem
            background-color: #fff
            $border(0 0 1px 0,#e6e6e6,solid)
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