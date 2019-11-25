<template>
  <div class="home-hot home-common-base">
    <div class="common-search-entry">
      <div class="common-search-entry-header">
        <span class="common-search-entry-header-name">新品&amp;独家</span>
        <p class="common-search-entry-header-line"></p>
        <a
          href="/find"
          class="common-search-entry-header-more"
          style="color: rgb(26, 188, 156);">更多</a>
      </div>
      <div class="common-search-entry-nav">
        <a v-for="item in newProduct" @click='handleclick(item.id)' :key="item.id" href="javascript:void(0)" class="common-goods common-search-entry-item">
          <img
            :data-src='item.cover+"!200X200"'
            :src='item.cover+"!200X200"'
            class="common-goods-img lazyloaded"
            style="height: auto;"
          />
          <h3
            class="common-goods-content one-line-ellipsis"
          >{{item.productName}}</h3>
          <p class="common-goods-price" style="color: rgb(26, 188, 156);">
            <span class="common-goods-num">¥ {{item.currentPrice}}&nbsp;</span>起
            <span class="common-goods-unit">
              <span class="common-goods-bold">/{{item.unitCount}}</span>{{item.unit}}
            </span>
          </p>
        </a>
      </div>
    </div>
    <div class="common-search-entry">
      <div class="common-search-entry-header">
        <span class="common-search-entry-header-name">本周特卖</span>
        <p class="common-search-entry-header-line"></p>
        <a
          href="/search?style=65536&amp;pvFrom=wap_index_tswk"
          class="common-search-entry-header-more"
          style="color: rgb(26, 188, 156);"
        >更多</a>
      </div>
      <div class="common-search-entry-nav">
        <a v-for="item in specialsProduct" @click='handleclick(item.id)' :key="item.id" href="javascript:void(0)" class="common-goods common-search-entry-item">
          <img
            :data-src='item.cover+"!200X200"'
            :src='item.cover+"!200X200"'
            class="common-goods-img lazyloaded"
            style="height: auto;"
          />
          <h3
            class="common-goods-content one-line-ellipsis"
          >{{item.productName}}</h3>
          <p class="common-goods-price" style="color: rgb(26, 188, 156);">
            <span class="common-goods-num">¥ {{item.currentPrice}}&nbsp;</span>起
            <span class="common-goods-unit">
              <span class="common-goods-bold">/{{item.unitCount}}</span>{{item.unit}}
            </span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['specialsProduct','newProduct'],
    watch: {
      newProduct(){},
      specialsProduct(){}
  },
    mounted() {
        console.log(this.specialsProduct,this.newProduct)
    },
    methods: {
      handleclick(id){
        this.$router.push({name: 'product', params: {id}})
      }
    },
}
</script>

<style lang="stylus" scoped>
    .home-common-base 
      margin-top: .1rem;
      padding-left: .11rem;
      padding-right: .11rem;
      background-color: #fff;
      padding-bottom: .15rem;
      .common-search-entry
        padding-bottom: .05rem;
        overflow: hidden;
        background-color: #fff;
        .common-search-entry-header
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          margin-top: .225rem;
          margin-bottom: .325rem;
          height: .13rem;
          .common-search-entry-header-name
            font-size: .14rem;
            padding-right: .1rem;
          .common-search-entry-header-line
            height: 1px;
            flex-grow: 1;
            background-color: #e8e8e8;
          .common-search-entry-header-more
            font-size: .12rem;
            padding-left: .1rem;
        .common-search-entry-nav
            height :27vh
            display: flex;
          .common-search-entry-item 
            width: 32%;
            margin-right: .07rem;
            text-align: center;
            font-size: .1rem;
            line-height: .25rem;
            .common-goods-img
              width: 100%;
              vertical-align: middle;
            .common-goods-content 
              font-weight: normal;
              margin-top: .06rem;
              color: black
            .one-line-ellipsis
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .common-goods-price
              font-size: .11rem;
              line-height: .16rem;
            .common-goods-num
              font-size: .13rem;
              font-weight: bold;
</style>