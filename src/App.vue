<template>
  <div id="app" >
    
     
      <app-header v-show="bhead"></app-header>
      <!-- <home></home> -->
      <router-view></router-view>
     
      <app-footer v-show="bfoot"></app-footer> 

    
    
  </div>
</template>
<script>

import AppHeader from './common/AppHeader'
import AppFooter from './common/AppFooter'

import {mapGetters} from 'vuex';
import * as types from './store/types.js'
// import Home from './components/Home'

export default{
  components:{AppHeader,AppFooter},
  computed:mapGetters([
    'bhead','bfoot'
  ]),
  watch:{
    $route:{
      handler(to){
      let path = to.path;
      // console.log(path)
      this.checkpath(path);
    },
    immediate:true
    }
  },
  methods:{
    checkpath(path){
      if(/home|category|user|search/.test(path)){
      

        this.$store.dispatch(types.VIEW_HEADER,true);
        this.$store.dispatch(types.VIEW_FOOTER,true)

      }
      if(/login|reg|detail/.test(path)){
        this.$store.dispatch(types.VIEW_HEADER,false)
        this.$store.dispatch(types.VIEW_FOOTER,false)

      }
    }
  }
}
</script>

<style>

</style>
