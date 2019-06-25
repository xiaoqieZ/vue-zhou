<template>
  <div class="homeone">
    <mt-header fixed title="首页">
    </mt-header>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in nihaoa" :key="item.index">
      <!-- <mt-swipe-item v-for="item in nihaoa" :key="item.index"> -->
        <!-- <div v-for=""></div> -->
        <!-- <img :src="item.images[0].url" alt> -->
        <img :src="item.url" alt>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/lgxinwen">
          <span class="mui-icon mui-icon-home">
            <span class="mui-badge">4</span>
          </span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/tupianliulan">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">6</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/shangpin">
          <span class="mui-icon mui-icon-chatbubble">
            <span class="mui-badge">4</span>
          </span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    <p class="add">我是用jq写的样式</p>
<me-home></me-home>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import homedater from "../subcomponents/HomeDater"

$(function(){
  $('.add').css('color','red')
})
export default {
  data() {
    return {
      nihaoa: []
    };
  },
  methods: {
    modefyLunbo() {
      this.$http.get("http://mx.maplegg.com/api/vue/lunbotu").then(res => {
        // console.log(res);
        if (res.status == 200) {
          this.nihaoa = res.data.xiaowulang[0].images;
        } else {
          Toast("请求轮播图失败！");
        }
      });
    }
  },
  components:{
      'me-home':homedater
  },
  created() {
    this.modefyLunbo();
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width:300px){
  .add{
    display:none
  }
}
.homeone{
      padding-top: 40px;
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
}
</style>
