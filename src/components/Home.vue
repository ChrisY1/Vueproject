<template>
    <div class="home">
      <app-banner :banner="banner"></app-banner>
      <loading v-show="bloading"></loading>
      <list :list="list" :dataName='dataName'></list>

    </div>
</template>

<script>
import AppBanner from './AppBanner'
import List from './List'
import * as types from '../store/types'

import {mapGetters} from 'vuex';


export default {
  data(){
    return{
      list:[],
      dataName:'home',
      banner:[]
  }
  },
    components:{AppBanner,List},
     computed:mapGetters([
    'bloading'
  ]),
    mounted(){
    
      // console.log('baseurl',baseurl),
      // console.log('axios',axios)
      // 请求数据
      // axios({
      //   url:baseurl+'/api/product',
      //   // url:'/mydata/follow.json',

      //   params:{
      //     dataName:this.dataName,
      //     count:100
      //   }
      // }).then(
      //   (res)=>{
      //           this.list = res.data.page_data;
      //           for(var i =0;i<this.list.length;i++){
      //             // this.Mingsrc.push(this.list[i].detail.auth_icon)
      //           }
                
      //           // this.MIngsrc = ,
      //           console.log('src',this.list)}
      //   ),
      //-----------------------------------------------
      //  axios({
      //   url:baseurl+'/api/product',
      //   // url:'/mydata/json/follow.json',

      // }).then(
      //   (res)=>{
                
      //           console.log(res.data)
      //           // this.MIngsrc = ,
      //           // console.log('src',this.list)
      //           }
      //   )
    this.$store.dispatch(types.VIEW_LOADING,true)
    axios.all([
      axios({
        url:'/mydata/json/follow.json',
        // url:'/mydata/json/follow.json',

      }).then(
        (res)=>{
                this.list = res.data
                
                // this.MIngsrc = ,
                // console.log('src',this.list)
                }
        ),
        // ---------------------------------------
      //    axios({
      //   url:baseurl+'/api/banner',
       
      // }).then(
      //   (res) => {this.banner = res.data.page_data
      //           console.log(this.banner)}
      // )

      axios({
        url:'/mydata/json/banner.json',
       
      }).then(
        (res) => {
                // console.log(res.data)
                this.banner = res.data
                // console.log(this.banner)
                }
      ) 
      ]).then(
          axios.spread(()=>{
              this.$store.dispatch(types.VIEW_LOADING,false)

          }

          )
      )
        
        }
      

    
}
</script>


<style scoped>

</style>

