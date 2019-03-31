<template>
    <div class="container" id="page-reg">
        <nav class="row wenku-list-title">
        <a href="javascript:window.history.go(-1)" class="pull-left"><img src="@/assets/img/back.png" alt=""></a>
        <h3 class="text-center">找回密码</h3>
    </nav>

    <div class="wenku-main row">
        <form class="col-xs-12" role="form">
            <div class="form-group">
                <label class="control-label">邮箱</label>
                <input type="text" class="form-control" placeholder="请输入您的邮箱">
            </div>
            <div class="form-group">
                <label class="control-label col-xs-12 wenku-no-padding">验证码</label>
                <div class="col-xs-8 wenku-no-padding">
                    <input type="text" class="form-control" placeholder="请输入邮箱验证码">
                </div>
                <div class="col-xs-4"><span class="btn btn-success">获取验证码</span></div>
            </div>
            <div class="form-group">
                <label class="control-label mgt-15px">密码</label>
                <input type="text" class="form-control" placeholder="请输入您的密码">
            </div>
            <div class="form-group">
                <label class="control-label">确认密码</label>
                <input type="text" class="form-control" placeholder="请输入您的确认密码">
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-success btn-block">重置密码</button>
            </div>
        </form>

        <div class="col-xs-12">
            <div class="help-block wenku-tips">
                <span>没有账号？<router-link to="/reg" tag="a" class="font-color-green">马上注册</router-link></span>
                <span class="pull-right">已有账号？<router-link to="/login" tag="a" class="font-color-green">马上登陆</router-link></span>
            </div>
        </div>
    </div>
    </div>
</template>
