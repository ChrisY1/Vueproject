<template>
    
       <div class="wenku-banner row container">
			
			<!-- <img class="img-responsive" src="../assets/img/banner.jpeg"/> -->
			<swipe class="my-swipe ">
				<swipe-item v-for="item of banner" :key="item._id" class="slide1">
          <img :src=" item.banner" alt=""/>
        </swipe-item>
				<!-- <swipe-item class="slide2"></swipe-item>
				<swipe-item class="slide3"></swipe-item> -->

			</swipe>
		</div>
   
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css'
import {Swipe, SwipeItem} from 'vue-swipe'
export default {
  props:['banner'],

	components:{
		'swipe':Swipe,
		'swipe-item':SwipeItem
  },
   mounted(){
     
      // console.log('baseurl',baseurl),
      // console.log('axios',axios)
     

    }
}
</script>


<style scoped>
img{width: 100%;height:100%}
.my-swipe {
  /* margin-top:1.2em; */
  height: 150px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  /* background-color: #0089dc; */
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}

</style>
