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
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    data(){
        return{
            themelist:'',
            totail:'',
            page:1
        }
    },
    components:{
        detail,
    },
    methods: {
        async getdata(page){
            let result=await http.get({
                        url:'/api/guide/themelist',
                        params:{
                            id: this.$route.params.id,
                            count: 10,
                            page,
                            categoryId: this.$route.params.cid,
                            keyword:'' 
                        }
                    })
            this.totail=result.data.result.totalCount
            return result.data.result.list
        },
    },
    async created(){
        let result=await this.getdata(this.page)
        this.themelist={
            type:0,
            title:'',
            theme:result,
            bottom:''
        }
    },
    async mounted(){
        let scroll = new bscroll('.themelist',{
            click:true,
            pullUpLoad:true,
            probeType:2
        })
        scroll.on('pullingUp',async ()=>{
            if(this.page+1<=Math.ceil(this.totail/10)){
                let result=await this.getdata(this.page+1)
                this.themelist.theme=[
                    ...this.themelist.theme,
                    ...result,
                ]
            }else{
                Toast({
                    message:'到底了',
                    position:'bottom',
                    duration:1000
                });
            }
            this.page+=1
            scroll.finishPullUp()
        })
        await this.$nextTick();
        scroll.refresh()
    }
}
</script>

<style lang="stylus">
.themelist
    flex 1
    overflow hidden
</style>