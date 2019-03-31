<template>
    <div class="container" id="page-reg">
         <nav class="row wenku-list-title">
        <a href="javascript:window.history.go(-1)" class="pull-left"><img src="@/assets/img/back.png" alt=""></a>
        <h3 class="text-center">会员注册</h3>
    </nav>

    <div class="wenku-main row">
        <form class="col-xs-12" role="form">
            <span>{{error}}</span>
            <div class="form-group">
                <label class="control-label">昵称</label>
                <input type="text" class="form-control" placeholder="请输入您的昵称" v-model="nikename">
            </div>
            <div class="form-group">
                <label class="control-label mgt-15px">用户名</label>
                <input type="text" class="form-control" placeholder="请输入您的用户名，限2-16个字符" v-model="username">
            </div>
            <div class="form-group">
                <label class="control-label">密码</label>
                <input type="text" class="form-control" placeholder="请输入您的密码" v-model="password">
            </div>
            
            

            <div class="form-group">
                 <!-- <button type="submit" class="btn btn-success btn-block">码上注册</button> -->
                 <input type="button" class="btn btn-success btn-block" id="reg" @click="reg" value="马上注册">
            </div>
        </form>

        <div class="col-xs-12">
            <div class="help-block wenku-tips">
                <span>忘记密码？<router-link to="/findpwd" tag="a" class="font-color-green">找回密码</router-link></span>
                <span class="pull-right">已有账号？<router-link to="/login" tag="a" class="font-color-green">马上登陆</router-link></span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:'',
            nikename:'',
            password:'',
            error:''
        }
    },
    methods:{
        reg(){
            axios({
                url:'/api/reg',
                method:"post",
                data:{
                    username:this.username,
                    nikename:this.nikename,
                    password:this.password,
                }

            }).then(
                res=>{
                    if(res.data.error==0){
                        this.$router.push('/login')
                    }else{
                        this.error = res.data.error
                    }
                   
                }
            )
        }

    }
}
</script>
