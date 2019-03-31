<template>
    <div id="page-user">
    <div  class="container">
        <div class="wenku-main row">
    <div class="panel panel-default wenku-panel wenku-login">
            <div class="panel-body">
                <div class="col-xs-3 wenku-no-padding">
                    <!-- <img src="@/assets/img/avatar.png" alt="" class="img-responsive"> -->
                    <router-link to="/login" tag="a" id="tu"><img :src="'http://139.196.92.127' + img" alt="" class="img-responsive" id="myhead"></router-link>
                		<!-- <a href="login.html"><img src="@/assets/img/avatar.png" alt="" class="img-responsive"></a> -->
                        <!-- <img src="@/assets/img/avatar.png" alt="" class="img-responsive" id="notu"> -->
                </div>
                <div class="col-xs-9 wenku-npr">
                    <router-link to="/login" tag="div" class="h3"><a href="javescript:;" id="log">立即登录</a></router-link>
                    <span id="_id">{{user}}</span>
                    <div class="h3"><a href="javescript:;" id="logout" @click="logout">注销</a></div>

                    <!-- <div class="h3"><a href="login.html">立即登录</a></div> -->
                    <div class="help-block font-size-small">分享，让知识传承更久远！</div>
                    <p id="ltmsg"></p>
                </div>
            </div>
        </div>
            <div class="panel panel-default wenku-panel">
            <div class="panel-body">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#">文档(231)</a></li>
                    <li><a href="#">收藏(123)</a></li>
                    <li><a href="#">财富(12)</a></li>
                </ul>
                <div class="col-xs-12 wenku-list">
                		<!--用户未登录时显示-->
                    <div class="help-block text-center" id="tishi">您当前未登录，暂时无法查看到您的文档</div>
    <list :list="list" :dataName='dataName' id="mylist"></list>
                    <loading v-show="bloading"></loading>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import List from './List'
import * as types from '../store/types'
import {mapGetters} from 'vuex';

export default {
data(){
    return{
      list:[],
      dataName:'follow',
     user:'',
      img:''
  }
},
    components:{
        List
    },
    computed:mapGetters([
    'bloading'
  ]),
      mounted(){
      // console.log('baseurl',baseurl),
      // console.log('axios',axios)
      //------------------------------------
    //   axios({
    //     url:baseurl+'/api/product',
    //     params:{
    //       dataName:this.dataName,
          
    //     }
    //   }).then(
    //     (res) => {this.list = res.data.page_data
    //             console.log(this.list)}
    //   );
    this.$store.dispatch(types.VIEW_LOADING,true)
    axios.all([
     axios({
        url:'/mydata/json/follow.json',
        // url:'/mydata/json/follow.json',

      })
      .then(
        (res)=>{
                this.list = res.data
                
                // this.MIngsrc = ,
                // console.log('src',this.list)
                }
        )
        ,
      axios({
          url:'/api/user',
      }).then(
          res =>{
            //   console.log(res.data)
              if(res.data.error==0){
                //   console.log(res.data.data.nikename)
                  this.user = res.data.data.nikename
                  this.img = res.data.data.icon
                  $("#_id").css("display","block")
                  $("#log,#tishi,#notu").css("display","none")
                  $("#logout").css("display","block")
                  $("#mylist").css("display","block")
                //   console.log($("#tu").attr("to"))
                //   $("#tu").css('display','block')


              }else{
                  alert("请登录")
                  $("#_id").css("display","none")
                  $("#log,#tishi,#notu").css("display","block")
                  $("#logout").css("display","none")
                  $("#mylist").css("display","none")
                //   $("#tu").css('display','none')

              }
          }
      )
      ]).then(
          axios.spread(()=>{
              this.$store.dispatch(types.VIEW_LOADING,false)

          }

          )
      )


    },
    methods:{
        logout(){
            axios({
                url:'/api/logout'
            }).then(
                res => {
                    if(res.data.error==0){
                    console.log(res.data.msg)
                    $("#_id").css("display","none")
                  $("#log,#tishi").css("display","block")
                  $("#logout").css("display","none")
                  $("#mylist").css("display","none")
                //   $("#tu").css('display','none')

                  $("#myhead").attr("src",null)
                    }else{
                        $("#ltmsg").html("请重试")
                        setTimeout(() => {
                            $("#ltmsg").html(null)
                        }, 2000);
                    }
                }
            )
        }
    }
}
</script>
<style>
    #_id #logout{display: none}
</style>

