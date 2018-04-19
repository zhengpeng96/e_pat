<template>
  <div>
    <Brand :brands="brand"/>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Brand from '../../components/Brand/Brand.vue'
  export default {
    mounted(){
      this.$store.dispatch('getBrand')
    },
    computed:{
      ...mapState(['brand'])
    },
    components:{
      Brand
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
