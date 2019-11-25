<template>
    <section class="product-detail-desc">
        <div class="product-detail-contain" v-html='this.contain'>
            
        </div>
    </section>
</template>

<script>
import http from 'utils/http.js'
export default {
    data() {
        return {
            contain:'',
        }
    },
    created(){
        if(this.$route.params.contain){
            this.contain=this.$route.params.contain.replace(/\r\n/g,'<br/>')
        }
    },
}
</script>

<style lang="stylus" scoped>
.product-detail-desc
    font-size: 0.14rem
    line-height: .3rem
    color: #3c3c3c
    word-break: break-all
    white-space: initial
    .product-detail-contain
        padding: .15rem .11rem;
        background-color: #fff
</style>