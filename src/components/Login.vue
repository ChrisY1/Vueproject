<template>

    <div class="login container" id="page-reg">
         <nav class="row wenku-list-title">
        <a href="javascript:window.history.go(-1)" class="pull-left" ><img src="@/assets/img/back.png" alt=""></a>
        <h3 class="text-center">会员登录</h3>
    </nav>
    <h4>{{msg}}</h4>
    <div class="wenku-main row">
        <form class="col-xs-12 wenku-login" role="form">
            <div class="form-group">
                <label class="control-label">用户名</label>
                <input type="text" class="form-control" placeholder="请输入您的用户名" v-model="username">
            </div>
            <div class="form-group">
                <label class="control-label">密码</label>
                <input type="text" class="form-control" placeholder="请输入您的密码" v-model="password">
            </div>

            <div class="">
                <!-- <button  class="btn btn-success btn-block" @click="login">马上登录</button> -->
                <input type="button" class="btn btn-success btn-block" value="马上登陆" @click="login">
            </div>
        </form>

        <div class="col-xs-12">
            <div class="help-block wenku-tips">
                <!-- <span>忘记密码？<a href="findpwd.html" class="font-color-green">找回密码</a></span> -->
                <span>忘记密码？<router-link to="/findpwd" tag="a" class="font-color-green">找回密码</router-link></span>

                <!-- <span class="pull-right">没有账号？<a href="reg.html" class="font-color-green">马上注册</a></span> -->
                <span class="pull-right">没有账号？<router-link to="/reg" tag="a" class="font-color-green">马上注册</router-link></span>

            </div>
        </div>

    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            baseurl :baseurl,
            username:'',
            password:'',
            msg:''
        }
    },
    methods:{
        login(){
            // console.log(axios)
            // alert(111)
            // axios({
            //     method:'POST',
            //     url:baseurl+'/api/login',
            //     data:{
            //         username:this.username,
            //         password:this.password
            //     }
            // }).then(
            //     res=>{
            //         alert(2)
            //         if(res.data.error==0){
            //         alert(3)
            //             console.log('成功')
            //         }else{
            //         alert(4)
            //             console.log('失败')
            //         }
            //     }
            // )
            axios({
                method:'POST',
          url:'/api/login',
           data:{
                    username:this.username,
                    password:this.password
                },
                
      }).then(
          res =>{
            //   console.log(res.data)
              if(res.data.error==0){
                //   next(_this=>_this.user=res.data.data)

                  this.msg = '登陆成功'
                  this.$router.push('/user')
              }
              if(res.data.error==1){
                  this.msg = res.data.msg
              }
          }
      )
        }
    }
}
</script>
