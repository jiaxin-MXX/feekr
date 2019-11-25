<template>
    <a @click="handleclick(value.productId)" class="item2 pull-left txt-center" href="javascript:void(0)"
    data-target="position">
        <div class="item-thumb">
            <img class="litter" :data-original='value.cover+"!640X360"'
                :src='value.cover+"!640X360"' style="display: block;">
        </div>
        <div class="item-title txt-center font-sm">{{value.title}}</div>
        <p class="area">中国 - </p>
        <p class="font-sm price">￥<span class="font-md">{{value.price}}</span> 起</p>
    </a>
</template>

<script>
export default {
    props:['value'],
    methods: {
        handleclick(id){
            this.$router.push({name: 'product', params: {id}})
        }
    },
}
</script>

<style lang="stylus" scopd>
.item2
    display: block
    position: relative;
    width: 47%
    margin-left: 3%
    margin-top: 0
    margin-bottom: .1rem
    min-height 25vh
    img
        display: block
        width: 100%
    .item-title
        padding: .08rem 0
        font-size: .12rem
        color: #333
        text-overflow: ellipsis
        width: 100%
        overflow: hidden
        white-space: nowrap
    .area
        color: #666
        font-size: .1rem
        text-overflow: ellipsis
        width: 100%
        overflow: hidden
        white-space: nowrap
    .price 
        color: #000
        font-size: .12rem
    .font-md
        font-size: .14rem
.item:nth-child(odd)
    margin-left: 0
</style>