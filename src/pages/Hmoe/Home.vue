<template>
  <div>
    <Overflow></Overflow>
    <div class="main">
      <MarginBox></MarginBox>
      <Find_nav></Find_nav>
      <div class="allmodule module">
        <div>
          <Swp></Swp>
        </div>
        <div>
          <div class="columnnavdiv">
            <div>
              <ul class="hottype">
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static/images/init_3.jpg" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="banner_item">
            <a href="">
              <img src="/static/images/01%20(1).gif" alt="">
            </a>
          </div>
        </div>
        <div>
          <div class="surprise_day">
            <div class="surprise">
              <div class="surprise-tit">
                <div class="titimg">
                  <img src="/static/images/01%20(9).png" alt="">
                </div>
                <div class="nexttip">下一场开始</div>
                <div class="time">
                  <span class="time1-1">14</span>
                  <span class="time-m">:</span>
                  <span class="time1-1">00</span>
                </div>
                <div class="more">
                  <a href="">
                    <img src="/static/images/init_22.jpg" alt="">
                  </a>
                </div>
              </div>
              <div class="flexBox">
                <div><img src="/static/images/init_36.jpg" alt=""></div>
                <div><img src="/static/images/init_36.jpg" alt=""></div>
                <div><img src="/static/images/init_36.jpg" alt=""></div>
                <div><img src="/static/images/init_36.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Overflow from '../../components/Overflow/Overflow.vue'
  import MarginBox from '../../components/MarginBox/MarginBox.vue'
  import Find_nav from '../../components/Find_nav/Find_nav.vue'
  import Swp from '../../components/Swp/Swp.vue'

  export default {
    components:{
      Overflow,
      MarginBox,
      Find_nav,
      Swp,
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
body
  font-size 14px
.hottype
  width 100%
  display flex
  flex-flow wrap
  & li
    width: 20%
.surprise-tit
  position relative
  padding 10px
  .titimg img
    width 85px
    height: 19px
  .titimg
    display inline-block
  .nexttip
    display inline-block
    position: absolute;
    right: 107px;
    margin-right: 5px;
  .time
    display inline-block
    position: absolute;
    right: 55px;
    .time1-1
      border: 1px solid #ddd;
      padding: 1px 2px;
      font-size: 13px;
.more
  position absolute
  width 40px
  right 0
  top 10px
  .more img
    width 50%
.flexBox
  width 120%
  height 130px
  display flex
  .flexBox div
    flex 1
  .flexBox img
    width 100%
</style>
