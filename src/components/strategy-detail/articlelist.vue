<template>
    <a @click="handle(value.id)" class="item" href="javascript:void(0)" data-target="position">
        <img :data-original='value.cover+"!600X400"'
            class="" :src='value.cover+"!600X400"'
            style="display: block;">
        <div class="title regular-font txt-center">{{value.title}}</div>
    </a>
</template>

<script>
export default {
    props:['value'],
    methods: {
        handle(id){
            
            // console.log(id)
            this.$router.push({
                name:'article',
                params:{id}
            })
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.item
    display block
    margin-bottom: 0;
    margin-top: .15rem;
    $border(0 0 1px 0)
    min-height 42.5vh
    img 
        max-height: 35.3vh
        width: 100%;
    .title
        font-size: .14rem
        color: #333
        line-height: 2
        padding: .1rem
        text-align: center
:nth-child(1)
    margin-top : 0
</style>