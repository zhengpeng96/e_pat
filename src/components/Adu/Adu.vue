<template>
<div >
  <div>
    <img :src="value.cover.image" alt="">
  </div>
  <div class="ft12">
    <div>{{value.title}}</div>
    <div>
      <span></span>
      <i>{{value.vid}}</i>
      <span class="ml10 mr10">|</span>
      {{value.time}}
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props:{
      'value':{}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ft12
    padding-bottom 20px
    padding-top 10px
    font-size 12px
  .ft12 div
    text-align center
    .ml10
      margin-left 10px
    .mr10
      margin-right 10px
</style>
