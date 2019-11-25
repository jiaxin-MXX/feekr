<template>
   <ul  class="search-select-sub-detail search-select-more common-scroll-y">
        <li v-for="(value,index) in data" @click="handleclick(index)" :key="random(value)" :data-id="value.id" :data-label="value.city" class="search-select-label search-select-sub-label">
            {{value.city}}<span @click="stopBubble($event)" v-if="value.area" data-label="area" class="search-select-area"> ({{value.area}})</span>
        </li>
    </ul>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            tempindex:''
        }
    },
    mounted() {
    },
    computed: {
         
    },
    methods: {
       random(value){
            let date=new Date().getTime() + Math.random()*10000000
            return date
        },
        handleclick(index){
            if(this.tempindex==0 || this.tempindex){
                $('.three .search-select-label').eq(this.tempindex).removeClass('base-color')
            }
            $('.three .search-select-label').eq(~~index).addClass('base-color')
            this.tempindex=~~index
            let text=$('.three .search-select-label').eq(~~index).text()
            this.$store.commit('setmsg2',text.split(' ')[1])
            this.$store.commit('setonoff3',false)
            this.$store.commit('list/setmycity',$('.three .search-select-label').eq(~~index).attr('data-id'))
        },
        stopBubble(e){
           
        }
    },
    watch: {
        data(){
            // console.log(this.data)
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import '~assets/border.styl'
     ul
        display :block
        .search-select-label
            padding-left: .125rem
            line-height: .355rem
            font-size: .13rem
            background-color: #fff
            $border(0 0 1px 0,#e6e6e6,solid)
            .search-select-area
                font-size: .11rem
                color: #a6a6a6
        .base-color
            color: #1abc9c
</style>