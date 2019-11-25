<template>
    <div>
        <li @click="handleclick" v-if="name ==='theme'" class="theme-entry-item">
            <a style="height:27vh" href="#" class="theme-entry-link">
            <img
                :data-src='data.cover+"!750X300"'
                :src='data.cover+"!750X300"'
                class="theme-entry-img lazyloaded"
                style="height: 141.2px;"
            />
            <p class="theme-entry-content">{{data.name}}</p>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    props:['data','name'],
    mounted() {
       
    },
    methods: {
        handleclick(){
            console.log(this.data)
        //    this.$router.push({name: 'product', params: {id}})
        },
    },
}
</script>

<style lang="stylus" scoped>
.theme-entry-item
    margin-top: .225rem
    overflow-x: hidden
    border-bottom: .5px solid #e8e8e8
    .theme-entry-link
        width: 100%;
        margin-top: .19rem
        .theme-entry-img 
            vertical-align: top
    .theme-entry-content
        margin-top: .09rem
        margin-bottom: .09rem
        text-indent: .1rem
        font-size: .13rem
        line-height: .2rem
        color:black
</style>