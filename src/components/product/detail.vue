<template>
    <section class="detail-panel product-detail-detail">
        <div v-html="contain" id="detailPanelDesc" class="detail-panel-desc">
            
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            contain:''
        }
    },
    created(){
        // console.log(this.$route.params.detail)
        this.contain=this.$route.params.detail
       
    },
    mounted() {
        let $temp=document.querySelectorAll('p img')
        for(var i=0;i<$temp.length;i++){
            if($temp[i].style.width){
                $temp[i].style.width='100%'
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.detail-panel
    white-space: initial
    .detail-panel-desc
        padding: .15rem .11rem
        background-color: #fff
        overflow-x: hidden 
    #detailPanelDesc>>>p{
        margin:.025rem 0 !important;
        text-align:center !important;
        line-height:.25rem !important
    } 
    #detailPanelDesc>>>img{
        width :100% !important 
    }

</style>