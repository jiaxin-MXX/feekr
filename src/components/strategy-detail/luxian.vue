<template>
    <a @click="handleclick(value.id)" class="theme-item theme-item-path" href="javascript:void(0)" data-target="position">
    <div class="thumb-wrap clearfix">

        <img v-for="item in value.cover" :key="item" class="pull-left"
            :data-original='item+"!200X200"'
            :src='item+"!200X200"'
            style="display: block;">
    </div>
    <div class="content"><span class="regular-font">{{value.title}}</span>
        <p>
            路线包括：{{value.scenic.join('－')}}
        </p>
    </div>
</a>
</template>

<script>

export default {
    props:['value'],
    methods: {
        handleclick(id){
            this.$router.push({name:'guide',params:{id,path:'pathdetail'}})
        }
    },
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.theme-item-path
    display block
    padding: .2rem 0
    $border(0 0 1px 0)
    min-height 26.4vh
    .thumb-wrap
        display flex
        justify-content space-between
        overflow hidden
        padding-bottom: .1rem
        img
            width: 32%
            margin-left: 2%
        :nth-child(1)
            margin-left: 0
    .content
        text-align: center
        font-size: .14rem
        line-height: 150%
        color: #333
        .regular-font
            font-family: PingFangSC-Regular, Helvetica, "Droid Sans", Arial, sans-serif
        p
            color: #333
            font-size: .12rem
            margin-top: .1rem
:nth-child(1)
    padding-top : 0
</style>