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
              <div class="bscroll">
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
        <Split></Split>
        <div class="divboximg flex">
          <div>
            <a href="">
              <img src="/static/images/init_25.jpg" alt="">
            </a>
          </div>
          <div>
            <a href="">
              <img class="dog" src="/static/images/init_26.jpg" alt="">
            </a>
            <a href="">
              <img class="dog" src="/static/images/init_26.jpg" alt="">
            </a>
          </div>
        </div>
        <Split></Split>
        <div>
          <img src="/static/images/init_18.jpg" alt="">
        </div>
        <Split></Split>
        <Title></Title>
        <Adu></Adu>
        <Split></Split>
        <div class="flexBox2">
          <div>
            <img src="/static/images/init_9.jpg" alt="">
            <img src="/static/images/init_9.jpg" alt="">
          </div>
          <div>
            <img src="/static/images/init_9.jpg" alt="">
            <img src="/static/images/init_9.jpg" alt="">
          </div>
        </div>
        <Split></Split>
        <Title></Title>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <img src="/static/images/init_12.jpg" alt="">
        <Split></Split>
        <Title></Title>
        <Swp></Swp>
        <Title></Title>
        <Adu></Adu>
        <Title></Title>
        <Adu></Adu>
        <Foot></Foot>
      </div>
    </div>
  </div>
</template>
<script>
  import Overflow from '../../components/Overflow/Overflow.vue'
  import MarginBox from '../../components/MarginBox/MarginBox.vue'
  import Find_nav from '../../components/Find_nav/Find_nav.vue'
  import Swp from '../../components/Swp/Swp.vue'
  import Bscroll from 'better-scroll'
  import Split from '../../components/Split/Split.vue'
  import Title from '../../components/Title/Title.vue'
  import Adu from '../../components/Adu/Adu.vue'
  import Foot from '../../components/Foot/Foot'
  export default {
    mounted(){
      new Bscroll('.bscroll',{
        scrollX:true,
        click:true
      })
    },
    components:{
      Overflow,
      MarginBox,
      Find_nav,
      Swp,
      Split,
      Title,
      Adu,
      Foot
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
.bscroll
  overflow hidden
.flex
  display flex
.flex div
  width 50%
  .dog
    height auto
.flexBox2
  width 100%
  height 200px
  display flex
.flexBox2 div
  height 100px
  width 50%
</style>
