<template>
  <div class="fenxiang0">
    <mt-header fixed title="图片分享">
      <router-link to="/home/fenlei1" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="info-body">
      <h3 class="info-title">流浪在拉萨的接头</h3>
      <div class="info-span">
        <span>发表时间：2019-5-28</span>
        <span>点击次数：1次</span>
      </div>
    </div>
    <!-- 缩略图 -->
    <div class="info-img">
      <ul>
        <!-- <img
          class="preview-img"
          v-for="(item, index) in list"
          :src="item.images[0].url"
          height="100"
          @click="$preview.open(index, list)"
          :key="item.src"
        > -->
        <li v-for="item in list" :key="item.id">
                  <img :src="item.images[0].url" alt="">
        </li>
      </ul>
    </div>
    <!-- 评论区 -->
    <br>
    <div class="pinglunqu">
      <h3 class="title">评论区</h3>
      <textarea placeholder="请输入内容" maxlength="120" v-model="content"></textarea>
      <input type="text" placeholder="请输入您的昵称" v-model="title">
      <mt-button type="primary" size="large" @click="fabiao('prev')">发表评论</mt-button>
    </div>
    <div class="info-pinglun1" v-for="(item,index) in listData" :key="item.id">
      <div class="info-pinglun2">
        <span>第{{index+1}}楼</span>
        <span>{{item.created_at}}</span>
      </div>
      <p>{{item.title}}：{{item.content}}</p>    
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
        title:'',
        content:'',
        page:6,
      list: [],
      listData: []
    };
  },
  created() {
    this.getlist();
    this.getAllList();
  },
  methods: {
    getlist() {
      this.$http.get("http://mx.maplegg.com/api/vue/lunbotu").then(res => {
        if (res.status == 200) {
          res.data.xiaowulang.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = res.data.xiaowulang;
        } else {
          Toast("失败");
        }
      });
    },
    getAllList() {
      //获取数据
      this.$http
        .get("http://mx.maplegg.com/api/vue/getwz?page=1&num=20")
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            this.listData =res.data;
          } else {
            Toast("请求数据失败");
          }
        });
    },
    fabiao() {
      let data = { content:this.content,title:this.title }
      if(this.content&&this.content!=''){
      this.$http
        .post("http://mx.maplegg.com/api/vue/addwz", data, {
          emulateJSON: true
        })
        .then(result => {
          if (result.status == 200) {
            this.getAllList();
            this.title=this.content=''
          } else {
            Toast("请求失败");
          }
        })
        }else{
            Toast('哎呀！两个框都要输入喔。')
        }
    },
  }
};
</script>
<style lang="scss" scoped>
.fenxiang0 {
  padding: 40px 6px 0 6px;
  .info-body {
    .info-title {
      font-size: 14px;
      text-align: center;
    }
    .info-span {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
  }
  .info-img {
    ul {
      padding: 0;
      width: 100%;
      height: 263px;
      li {
        width: 31%;
        list-style: none;
        margin: 4px;
        float: left;
        img {
          width: 100%;
          height: 121px;
        }
      }
    }
  }
  .pinglunqu {
    font-size: 14px;
    text-align: center;
    color: #000;
  }
  .info-pinglun1 {
    padding-top: 10px;
    .info-pinglun2 {
      display: flex;
      justify-content: space-between;
      background-color: #ccc;
    }
    p {
      text-indent: 2em;
      color: #000;
      font-size: 15px;
    }
  }
}
</style>
