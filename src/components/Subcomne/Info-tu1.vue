<template>
        <div class="gettupian">
      <ul class="sixial">
        <li v-for="item in list" :key="item.id">
          <router-link to="/home/xiaowulang0">
          <img v-lazy="item.images[0].url" alt>
          <div class="info">
            <h3 class="info-title">雪域最大的王</h3>
            <div class="info-body">
              第一次到达拉萨的人，都不免要去参观圣城内的
              布达拉宫、参拜神圣的大昭寺，城外的纳木错也是
              很多初到西藏的游客的必选景点，用3天的时间走遍这
              些经典景点，对高原圣城形成自己的初印象。
            </div>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getTupian();
  },
  methods: {
    getTupian() {
      this.$http.get("http://mx.maplegg.com/api/vue/lunbotu").then(res => {
        console.log(res);
        if (res.status == 200) {
          this.list = res.data.xiaowulang;
        } else {
          Toast("请求轮播图失败！");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .gettupian {
    .sixial{
      /deep/ .data-v-1322b7c8{
        margin:0
      }
    }
    
    ul {
      padding: 0 5px;
      margin: 0;
      li {
        margin-bottom:10px; 
        list-style: none;
        background-color: rgba(204, 198, 198, 0.836);
        position: relative;
        .info {
          height: 86px;
          color: #fff;
          text-align: center;
          background-color: rgba(0, 0, 0,0.4);
          position: absolute;
          bottom: 0;
          text-align: left;
          max-height: 84px;
          .info-title{
            font-size: 14px
          }
          .info-body{
            font-size: 12px
          }        
        }
        img {
          width: 100%;
          vertical-align: middle
        }
        image[lazy="loading"] {
          width: 40px;
          height: 100px;
          margin: auto;
        }
      }

    }
  }
</style>
