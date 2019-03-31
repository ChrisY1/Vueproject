<template>
    <div class="detail" id="page-view">
       <nav class="wenku-header">
    <a  title="返回" @click="goback"><img src="@/assets/img/back.png" alt=""></a>
    <!-- <a href="list.html" title="返回" ><img src="@/assets/img/back.png" alt=""></a> -->
   
    <span class="pull-right">
        <a href="search.html" class="fa fa-search" title="搜索"></a>
        <a href="#" class="fa fa-share-alt" title="分享"></a>
        <a href="#" class="fa fa-star-o" title="收藏"></a>
        <a href="#" class="fa fa-cloud-download" title="下载"></a>
    </span>
</nav>
<div class="container">
    <div class="wenku-main row">
        <div class="col-xs-12">
            
            <h1><img src="../assets/img/word_24.png" alt="2016年Web前端面试题目汇总">{{mytitle}}</h1>
            <div class="help-block">
                <div class="text-muted wenku-info">
                    <span><i class="fa fa-eye"></i> 893 人</span>
                    <span><i class="fa fa-file-text-o"></i> 893 页</span>
                    <span><i class="fa fa-file-text-o"></i> 3.21 MB</span>
                    <span class="pull-right">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        4.5
                    </span>
                </div>
            </div>
            <div class="col-xs-12 wenku-viewer">
                <img :src='detail' alt="">
            </div>
        </div>
    </div>
</div>

<div class="btn-group-justified">
    <div class="btn-group btn-group-lg">
        <button type="button" class="btn btn-default disabled">上一页</button>
    </div>
    <div class="btn-group">
        <div class="input-group input-group-lg">
            <label class="input-group-addon" for="page-num">第</label>
            <input type="text" value="1" class="form-control" id="page-num" style="text-align: center">
            <label class="input-group-addon" for="page-num">页</label>
        </div>
    </div>
    <div class="btn-group btn-group-lg">
        <button type="button" class="btn btn-default">下一页</button>
    </div>
</div>

<div class="container">
    <div class="row">
            <div class="panel panel-default wenku-panel wenku-maylike">
                <div class="panel-heading font-color-green">猜你喜欢</div>
                <div class="panel-body">
                    <ul>
                        <li><a href="javascript:;"><img src="@/assets/img/ppt_24.png" alt="">linux常见技术面试题目</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/pdf_24.png" alt="">《Photoshop图像处理——登记照片背景色的变换》教案</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/excel_24.png" alt="">TP-2112Photoshop图像处理实用教程1</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/text_24.png" alt="">Photoshop手绘入门</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/ppt_24.png" alt="">Photoshop CC 2017 图像处理标准教程 预览版</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/code_24.png" alt="">PS新手必看！PS后期修改模特头发颜色_后</a></li>
                        <li><a href="javascript:;"><img src="@/assets/img/word_24.png" alt="">linux常见技术面试题目</a></li>
                    </ul>
                </div>
            </div>
    </div>
</div>
    
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex';//拿到vuex函数

// $(".btn btn-default").click(
//     $("#page-num").val()=2
// )
// console.log($("#page-num"))

export default {
    data(){
        return{
            msg:1,
            mytitle:"",
            detail:""
        }
    },
    mounted(){
        let _id = this.$route.params.id;
        let dataName = this.$route.query.dataName;
        axios({
        url:'/mydata/json/follow.json',
        // params:{dataName,_id}
        }).then(
        res=>{
            // this.detail=res.data.page_data
            // console.log(_id,res.data)
            for(var i =0;i<res.data.length;i++){
                if(_id==res.data[i]._id){
                    // console.log(res.data[i].detail.content)
                    this.detail = res.data[i].detail.content
                    this.mytitle = res.data[i].title
                    // console.log(this.detail,this.mytitle)
                }
            }
        }
    )
        

    },
    //mapGetters接管computed选项
    // computed:mapGetters(['count']),
    //------------------------------------------
    // beforeRouteEnter(to,from,next){
    //     alert(1);
    //     axios({
    //         url:'/mydata/json/follow.json',
            
    //     }).then(res=>{
    //         if(res.data.a){
    //             console.log("过去了",to)
    //             // to.query.user=res.data//附带到目标路由
    //             // next();

    //             //数据传递给目标组件
    //             next((_this)=>{ //未进入组件的this
    //                 _this.username = res.data.a
    //             })


    //         }else{
    //             console.log("没过去")
    //              next('/login');
    //         }
    //     })
        
       
    // },
    //-------------------------------------------------------
     methods:{
        //  ...mapActions(['jia']),
          goback(){
            //  console.log('回去啦')
            window.history.go(-1)
        },
     }
    // methods:{
    //     goback(){
    //         // console.log('回去啦')
    //         this.$route.go(-1)
    //     },
    //     jia(){
    //         // this.$store.dispatch('类型','负载')
    //         // this.$store.dispatch({type:'类型',payload:负载})

    //         this.$store.dispatch('jia',1)
    //     }
    // }
    
}
</script>
