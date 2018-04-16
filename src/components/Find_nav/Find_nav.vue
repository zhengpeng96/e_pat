<template>
  <div class="find_nav">
    <div class="find_nav_list dscroll-div">
      <ul class="dscroll-ul">
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
        <li class="dscroll-li on">
          <a href="">
                <span class="rela">
                  <span>首页</span>
                  <i></i>
                </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    mounted(){
      new Bscroll('.find_nav',{
        scrollX:true,
        click:true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .find_nav
    overflow hidden
  .find_nav_list
    width 140%
    .dscroll-ul
      white-space nowrap
      display flex
      height 35px
    & li
      flex 1
      display: list-item;
      & a
        display: block
        width 100%
        height 100%
        text-align center
        line-height 36px
</style>
