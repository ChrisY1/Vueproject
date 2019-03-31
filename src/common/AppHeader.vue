<template>
    <div class="app-header container" >
        <div class="row">
            <div class="col-xs-12 text-center"><a href="index.html" class="wenku-logo"><img src="../assets/img/logo.png" alt="IT文库"></a></div>
        </div>
        <nav class="wenku-navbar text-muted row">
            <ul>
                <router-link to="/home" tag="li" class="col-xs-3 text-center" active-class=" active"><a href="javascript:;">首页</a></router-link>
                <router-link to="/category" tag="li" class="col-xs-3 text-center" active-class=" active"><a href="javascript:;">分类</a></router-link>
                <router-link to="/search" tag="li" class="col-xs-3 text-center" active-class=" active"><a href="javascript:;">搜索</a></router-link>
                <router-link to="/user" tag="li" class="col-xs-3 text-center" active-class=" active"><a href="javascript:;">我的</a></router-link>
              
                <!-- <li class="col-xs-3 text-center active"><a href="index.html">首页</a></li>
                <li class="col-xs-3 text-center"><a href="category.html">分类</a></li>
                <li class="col-xs-3 text-center"><a href="search.html">搜索</a></li>
                <li class="col-xs-3 text-center"><a href="user.html">我的</a></li> -->
            </ul>
        </nav>
	</div>
    
</template>

<style >
/* 
body{padding-top: 10px;font-family: arial,sans-serif;}
.wenku-logo img{max-height: 50px;}
.wenku-logo{text-align: center;}
.wenku-navbar{margin-top:10px;font-size: 16px;border-bottom: #f4f4f4 1px solid;height: 40px;line-height:40px;}
ul,li{list-style: none;padding: 0px;}
.wenku-navbar a{color: #666;line-height: 40px;display: inline-block}
a,a:hover,a:visited,a:focus{text-decoration: none;color: #737373} */
</style>
