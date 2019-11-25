<template>
    <div class="search-container home-search-container guide-search-panel-btn">
      <div class="search-bar">
        <form class="search-input">
          <input
            @click="handleclick"
            type="search"
            class="search-position iconfont icon txt-center guide-search-panel-btn"
            placeholder="搜索目的地/攻略/旅行资讯"
          />
        </form>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    handleclick:function(){
      this.$store.commit('setshow',true)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .home-search-container
    display flex
    padding .1rem
    background #F6F6F6
    .search-bar
      width 100%
      .search-input
        border: 1px solid #E8E8E8;
        border-radius: .06rem;
        background: #fff;
        padding: .03rem;
        .search-position
          caret-color: transparent
          padding: .05rem 0;
          display: block;
          width: 100%;
          line-height: .19rem;
          background: transparent;
          font-size: .12rem;
          border:none
</style>