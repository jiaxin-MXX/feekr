<template>
    <div class="buy-notice" style="">
        <p class="buy-notice-head"><b>使用说明</b></p>
        <div v-html="recom" class="buy-notice-usage">
            
        </div>
        <p class="buy-notice-head buy-notice-head-rule"><b>改退规则</b></p>
        <div v-html="rule" class="buy-notice-rule">
           
        </div>
        <div class="product-detail-wxcs">
            <h4>客服微信</h4>
            <p v-html="kefu"></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kefu:'',
            recom:'',
            rule:''
        }
    },
    mounted(){
        let {kefu,recom,rule}=this.$route.params.notice
        this.kefu=kefu
        this.recom=recom
        this.rule=rule
        console.log(this.kefu)
    },
}
</script>


<style lang="stylus" scoped>
.buy-notice-head
    padding-top: .15rem;
    font-size: .14rem;
    line-height: .25rem;
    text-indent: .11rem;
    background-color: #fff;
.buy-notice-head-rule
    margin-top: .09rem;
.buy-notice-usage
    padding: 0 .11rem .15rem;
    font-size: .14rem;
    line-height: .3rem;
    background-color: #fff
.buy-notice-rule
    padding: 0 .11rem .15rem;
    font-size: .14rem;
    line-height: .3rem;
    background-color: #fff
.product-detail-wxcs
    padding: 0 .13rem .075rem
    margin-top: .09rem;
    background-color: #fff
    font-size: .14rem;
    line-height: .25rem
    h4
        padding: .1rem 0
        text-align: center
        font-weight: 400;
    p
        padding-bottom: .1rem
        font-weight: 400;


</style>