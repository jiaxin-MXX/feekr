<template>
    <section class="area-list-container">
        <section class="area-list">
            <div class="item-container body-space clearfix">
                <header class="header-title-wrap txt-center font-lg"> <span class="section-title regular-font">{{value.area}}</span>
                    <div class="sub-title txt-center font-sm"> {{value.desc}} </div>
                </header> 
                <a v-for="item in value.city" :key='item.id' href="javascript:void(0)" @click="handleclick(item.id)" class="item pull-left" data-target="position"> <img
                        :data-original='item.cover+"!412X310"'
                        class="" :src='item.cover+"!412X310"'
                        style="display: block;">
                    <div class="item-title txt-center city-title font-md">{{item.name}}</div>
                </a> 
            </div>
        </section>
      </section>
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
.clearfix:after
        display: block;
        content: '';
        clear: both;
.area-list-container
        display: block
        .area-list
            background: #fff
            margin-top: .1rem
            .body-space
                padding: .1rem;
                .header-title-wrap
                    color: #2D2D2D;
                    padding: .15rem 0;
                    line-height: .28rem;
                    text-align: center;
                    .section-title
                        vertical-align: middle
                    .sub-title 
                        color: #666
                        font-size: .12rem
                        text-align: center;
                .item
                    display: block
                    width: 32%
                    margin-right: 2%
                    margin-left: 0
                    margin-bottom: .15rem
                    img
                        width : 100%
                    .item-title
                        color: #2D2D2D
                        padding: .05rem 0 0
                        font-size: .14rem
                        text-align: center;
                .item:nth-child(3n+1)
                    margin-right: 0;
                .pull-left
                    float: left
</style>