<template>
 <div>
   <div class="title" v-for="(brand,index) in brands.brand">
     <span class="c999">—— {{brand.title}} ——</span>
     <div class="list">
       <ul class="clearfix">
         <li v-for="(list,index) in brand.list">
           <a href="">
             <div class="imgBox">
               <img class="imgs" :src="list.logo" alt="">
             </div>
             <p class="name">{{list.name}}</p>
             <p class="address">{{list.address}}</p>
           </a>
         </li>
       </ul>
       <Split/>
     </div>
   </div>
   <div>
     <a class="all" href="">全部</a>
   </div>
 </div>
</template>
<script>
  export default {
    props:{
      "brands":{},
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .title
    padding-top 20px
    font-size 12px
    text-align center
    .c999
      color #999
  .list
    padding 0 5px
    .clearfix:after
      content "."
      display block
      height 0
      clear both
      visibility hidden
    ul
      list-style none
      margin-bottom 20px
      li
        box-sizing border-box
        margin-top 20px
        width 33.33%
        padding 0 5px
        float left

  .imgs
    width 80px
    height 40px
  .imgBox
    border 1px solid #e2e2e2
    padding  10px 0
  .name
    height 20px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 13px
    margin-top 5px
    color #333
  .address
    height 20px
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    font-size 12px
    color #999
  .all
    width 40px
    height 40px
    position fixed
    z-index 10
    background-color  rgba(0,0,0,.4)
    line-height 40px
    border-radius 50%
    right: 6px;
    bottom: 65px;
    color white
    text-align center
</style>
