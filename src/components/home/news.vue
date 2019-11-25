<template>
    <div>
        <li class="story-entry-item">
            <a href="#" class="story-entry-link">
                <img :data-src='data.cover+"!600X400"' :src='data.cover+"!600X400"' class="story-entry-pic lazyloaded">
                <div>
                    <h3 class="story-entry-describe three-line-ellipsis">{{data.title}}</h3>
                    <p class="story-entry-labes">{{data.tags.join(' ')}}</p>
                </div>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    props:['data','name'],
}
</script>

<style lang="stylus" scoped>
.story-entry-item 
    margin-top: .15rem
    padding-bottom: .12rem
    border-bottom: .5px solid #e8e8e8
    .story-entry-link
        display: flex
        .story-entry-pic 
            height: 0.94rem
            margin-right: .175rem
        .story-entry-describe
            font-size: .13rem
            line-height: .22rem
            color: #2d2d2d
            font-weight : 400
        .story-entry-labes
            margin-top: .175rem
            font-size: .09rem
            line-height: .18rem
            color: #888
</style>