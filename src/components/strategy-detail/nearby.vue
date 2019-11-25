<template>
    <a @click="handleclick(value.id)" class="flex-item" href="javascript:void(0)">
        <img :data-original='value.cover+"!300X225"'
            class="" :src='value.cover+"!300X225"'
            style="display: block;">
        <div class="item-title txt-center font-md">{{value.name}}</div>
        <p class="item-title txt-center font-sm">距离 <strong>{{value.distance}}</strong> 公里</p>
    </a>
</template>
<script>
export default {
    props:['value'],
    methods: {
        handleclick(id){
           this.$router.push({name:'Sdetail',params:{id}})
        }
    },
}
</script>
<style lang="stylus" scoped>
.flex-item
    display: block
    width: 33%;
    flex: 0 1 auto
    color: #333
    margin-left: .1rem
    padding-bottom:.1rem
    img
        display: block
        width: 100%
    .font-md
        font-size: .14rem
    .txt-center
        text-align: center
    .item-title
        margin-top: .08rem
    .font-sm
        font-size: .12rem
        strong
            font-weight: bold
:nth-child(1)
    margin-left: 0
</style>