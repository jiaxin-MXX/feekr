<template>
    <div class="themelist" style="overflow:hidden;height:100%">
       <div>
            <detail :data='themelist'></detail>
       </div>
    </div>
</template>

<script>
import http from 'utils/http'
import detail from 'components/strategy-detail/detail'
import bscroll from 'better-scroll'
export default {
    data(){
        return{
            themelist:''
        }
    },
    components:{
        detail
    },
    async beforeCreate(){
        let result=await http.get({
            url:'/api/guide/themelist',
            params:{
                id: this.$route.params.id,
                count: 10,
                page: 1,
                categoryId: this.$route.params.cid,
                keyword:'' 
            }
        })
        this.themelist={
            type:0,
            title:'',
            theme:result.data.result.list,
            bottom:''
        }
    },
    mounted(){
        let scroll = new bscroll('.themelist',{
            click:true
        })
    }
}
</script>

<style lang="stylus">
.themelist
    flex 1
    overflow hidden
</style>