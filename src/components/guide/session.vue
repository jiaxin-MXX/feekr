<template>
  <div>
    <div class="section">
      <div class="title">
        <strong v-if="path=='pathdetail'">DAY{{index+1}}游玩攻略</strong>
        <strong v-else>【{{data.scenic}}】</strong>
      </div>
      <div>{{data.desc}}</div>
    </div>
    <div v-if="path=='pathdetail'">
        <div v-for="(value,index) in data.list" :key="index" class="sub-section">
        <div class="section">
            <div class="title">
            <strong>第{{index+1}}站：{{value.scenic}}</strong>
            </div>
            <div>{{value.desc}}</div>
            <div>
            <img
                v-for="img in value.thumb"
                :key="img.pic"
                :data-original='img.pic+"!600X0"'
                class
                :src='img.pic+"!600X0"'
                style="display: block;"
            />
            </div>
            <div class="tip">
            <p v-for="(tip,index) in value.tips" :key="index">
                <span>{{tip.title}}：</span>{{tip.desc}}
            </p>
            </div>
        </div>
        </div>
        </div>
        <div class="section">
        <p v-for="(value,index) in data.tips" :key="index"><strong>{{value.title}}：</strong>{{value.desc}}</p>
    </div>
    <div v-if="path=='themedetail'">
        <div v-for="(value,index) in data.thumb" :key="index" class="pic">
             <img
                :data-original='value.pic+"!600X0"'
                class
                :src='value.pic+"!600X0"'
                style="display: block;"
            />
        </div>
    </div>
    <div class="section">
        <p v-for="(value,index) in data.tips" :key="index"><strong>{{value.title}}：</strong>{{value.desc}}</p>
    </div>
  </div>
</template> 

<script>
export default {
    props:['data','index','path'],
    mounted() {
        console.log(this.data)
    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/border.styl'
.section
    margin-top: .15rem;
    font-size: .14rem
    .title
        padding: .05rem 0
        margin-bottom: .05rem
        $border(0 0 1px 0,#d5d5d5) 
        font-size: 16px
        text-align: center
    
    .tip 
        p
            font-size: .12rem
            color: #7f7f7f
img
    width: 100%
    max-width: 100%
    display: block
    margin: .05rem 0
</style>