<template>
    <div id ="page-list" class="list container">
      <div class="wenku-main row">
          <!-- <router-link to="/detail/1" class="col-xs-12" > -->
          <ul>
              <li 
                v-for="(item,index) of list"
                :key = 'item._id'
                
              >
          <router-link :to='"/detail/"+item._id + "?dataName="+dataName' class="col-xs-12" >

        <!-- <a href="view.html" class="col-xs-12"> -->
                <div class="col-xs-2 wenku-npl">
                    <!-- <p>{{item.detail.auth_icon}}</p> -->
                    <img :src=" item.detail.auth_icon " class="img-responsive" alt="">
                </div>
                <div class="col-xs-10 wenku-no-padding">
                    <div class="wenku-title font-color-title font-size-title wenku-text-ellipsis">{{index+1}}.{{item.title}}</div>
                    <div class="help-block">{{item.des}}</div>
                </div>
            <!-- </a> -->
        </router-link>
        </li>
          </ul>
            <!-- <a href="view_disabled.html" class="col-xs-12">
                <div class="col-xs-2 wenku-npl">
                    <img src="@/assets/img/pdf_54.png" class="img-responsive" alt="">
                </div>
                <div class="col-xs-10 wenku-no-padding">
                    <div class="wenku-title font-color-title font-size-title wenku-text-ellipsis">TP-2112Photoshop图像处理实用教程</div>
                    <div class="help-block">14130人阅读 大小:96.00KB</div>
                </div>
            </a> 
          
           
            
            
         <loading title="xixi" :bg="str"></loading> -->
        <div class="col-xs-12">
            <div class="text-muted text-center wenku-bottom-tips"> -- 我也有底线 -- </div>
        </div>
        <!-- <loading v-show="bloading"></loading> -->
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return{
            baseurl:baseurl
        }
        // return{Mingsrc: }
    },
    props:['list','dataName'],
    computed:mapGetters([
    'bloading'
  ])
    
}

</script>


<style scoped>

</style>

