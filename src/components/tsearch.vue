<template>
    <div class="search-container home-search-container guide-search-panel-btn">
      <div class="search-bar">
        <div class="search-input">
          <input
            type="text"
            @keydown='keydown($event)'
            class="search-position iconfont icon txt-center guide-search-panel-btn"
            placeholder="搜索目的地/关键词"
          />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    keydown(e){
      if(e.keyCode == 13){
        this.$store.commit('list/setkeyword',e.target.value)
        e.target.value=''
      }
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
          padding: .05rem 0;
          display: block;
          width: 100%;
          line-height: .19rem;
          background: transparent;
          font-size: .12rem;
          border:none
</style>