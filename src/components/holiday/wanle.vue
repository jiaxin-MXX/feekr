<template>
    <ul class="search-result-product">
        <li @click="handleclick(li.productId)" v-for="li in list" :key='li.productId'>
            <img :data-src='li.productCover+"!750X422"' :src='li.productCover+"!750X422"' class=" lazyloaded" style="height: 201.997px;">
            <h3>{{li.productDesc}}</h3>
            <h4>{{li.productName}}</h4> <span style="background-color: rgba(26, 188, 156, 0.8);">¥{{li.productPrice}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props:['list'],
    watch: {
        list(){
            // console.log(this.list)
        }
    },
    methods: {
        handleclick(id){
           this.$router.push({name: 'product', params: {id}})
           this.$store.commit('settype',false)
        },
    },
    
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.search-result-product
    padding:0 2% 0
    background: #f6f6f6
    li  
        position: relative;
        padding-bottom: .16rem;
        margin-bottom: .13rem;
        text-align: center;
        $border(1px,#e8e8e8,solid)
        background-color: #fff;
        img
            vertical-align: middle;
        h3
            margin-top: .19rem
            font-size: .15rem
            line-height: .28rem
            font-weight: 400
            color: #000
        h4
            font-size: .12rem
            line-height: .25rem
            font-weight: 400
            color: #666
        span
            position: absolute
            top: .15rem
            left: 0
            width: .7rem
            text-align: center
            font-size: .15rem
            line-height: .325rem
            color: #fff
</style>