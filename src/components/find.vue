<template>
  <div class="search-panel edit-wrap show">
    <div class="search-container search-site-container">
      <div class="table-mode">
        <div class="table-cell iconfont icon-fanhui txt-left back-to-guide">
           <van-icon @click="handleclick" color='black' name="play" />
        </div>
        <div class="table-cell search-bar">
          <form class="search-input guide-search-form" data-search="site">
            <input type="search" class="search-position" placeholder="搜索目的地" id="search-site" />
            <a class="iconfont icon-search-clear"></a>
          </form>
        </div>
        <div class="table-cell">
          <a href="javascript:;" class="search-btn">搜索</a>
        </div>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="search-result"></div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {
    methods: {
        handleclick(){
            this.$store.commit('setshow',false)
        }
    },
}
</script>


<style lang="stylus" scoped>
.search-panel 
    position :absolute
    width:100%
    height 100%
    display flex
    flex-direction: column
    .search-site-container
        z-index 2
        width 100%
        padding: .1rem
        background: #fff;
        .table-mode
            display: flex
            width: 100%
            table-layout: fixed
            justify-content:space-around
            .table-cell
                display: table-cell
                vertical-align: middle
                text-align: center
                .search-input
                    position: relative
                    width: 100%
                    background: #F5F5F5
                    border-radius: .4rem
                    padding: .03rem .08rem .03rem .1rem
                    .search-position
                        padding: .05rem 0
                        display: block
                        width: 100%;
                        line-height: .16
                        background: transparent
                        font-size: .12rem
                        border: none
                .search-btn
                    background: #1abc9c
                    color: #fff
                    padding: .05rem .08rem
                    border-radius: 6px
                    font-size: .12rem
                    display: block
                    line-height: .22rem
            .table-cell:nth-child(1)
                width: 12%
                color: #ccc
                font-size: .28rem
                vertical-align: middle
            .table-cell:nth-child(2)
                width: 72%
    .scroll-wrap
        overflow-y: scroll
        flex 1
        background:#eee
        .search-result
            background: #fff
</style>