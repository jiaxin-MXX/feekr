<template>
    <a v-if="name ==='like'" @click='handleclick(data.id||data.productId)' href="javascript:void(0)" class="common-goods maybe-like-item"><img
        :data-src='data.cover || data.productCover+"!400X250"'
        :src='data.cover || data.productCover+"!400X250"' class="common-goods-img lazyloaded"
        style="height: 108.125px;">
            <h3 class="common-goods-content one-line-ellipsis">{{data.productName}}</h3>
            <p class="common-goods-price" style="color: rgb(26, 188, 156);"><span class="common-goods-num">¥
                    {{data.currentPrice || data.productPrice}}&nbsp;</span>起<span class="common-goods-unit"><span class="common-goods-bold">/</span>{{data.unitCount||data.productUnitCount}}{{data.unit||data.productUnit}}</span></p>
    </a>
</template>

<script>
export default {
    props:['data','name'],
    mounted() {
        // console.log(this.data)
    },
    methods: {
        handleclick(id){
           this.$router.push({name: 'product', params: {id}})
        },
       
    },
}
</script>

<style lang="stylus">
.maybe-like-item
    display block
    padding-bottom: .175rem
    width: 49.2%
    font-size: .1rem
    line-height: .175rem
    text-align: center
    .common-goods-img 
        width: 100%
        vertical-align: middle
    .common-goods-content 
        font-weight: normal
        margin-top: .06rem
        color :black
    .one-line-ellipsis
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
    .common-goods-price
        font-size: .11rem
        line-height: .16rem 
        .common-goods-num
            font-size: .13rem
            font-weight: bold
        .common-goods-unit
            font-family: 'PingFangSC'
            .common-goods-bold
                font-family: "PingFangSC-Medium"
</style>