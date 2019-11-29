<template>
     <a @click="handleclick(value.id)" class="theme-item theme-item-city" href="javascript:void(0)"
                    data-target="position">
                    <div class="thumb-wrap">
                        <img :data-original='value.cover+"!640X270"'
                            class="" :src='value.cover+"!640X270"'
                            style="display: block;">
                    </div>
                    <div class="theme-desc">
                        <div class="content">{{value.title}}</div>

                        <div class="style-tag">
                            <span class="series font-md regular-font">{{value.recommendCount}}大推荐</span>
                        </div>

                    </div>
                    <div class="cover"></div>
                </a>
</template>

<script>
export default {
    props:['value'],
    methods: {
        handleclick(id){
             this.$router.push({name:'guide',params:{id,path:'themedetail'}})
        }
    },
}
</script>
<style lang="stylus" scoped>
 .theme-item
            display block;
            position: relative;
            padding: 0;
            min-height: 1.5rem;
            margin-top: .15rem;
            min-height 22.5vh      
            .thumb-wrap
                overflow: hidden
                width: 100%
                margin-bottom: .05rem
                img
                    display: block
                    width: 100%
                    max-height: 22.4vh
            .theme-desc
                color: #fff
                left: 50%
                top: 50%
                width: 80%
                position: absolute
                z-index: 2
                text-align: center
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                .content
                    color: #fff
                    font-size: .16rem
                    font-weight: bold
                .style-tag
                    color: #fff
                    font-size: .1rem
                    margin-top: .1rem
                    span
                        padding: .05rem
            .cover
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                background: rgba(0,0,0,0.3)
        .theme-item:nth-child(1)
            margin-top: 0      
</style>