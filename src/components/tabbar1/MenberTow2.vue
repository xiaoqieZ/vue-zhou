<template>
    <div class="menbertow"> 
        <mt-header fixed title="消息">
    </mt-header>
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
            <me-home></me-home>
    
    </div>

</template>

<script>
import homedater from "../subcomponents/HomeDater"
export default {
    data(){
        return {
            title:'',
            content:'',
            listData: [],
        }
    },
    created(){
        this.getAllList();
    },
    methods: {
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
    },
    components:{
      'me-home':homedater
  },  
}
</script>

<style lang="scss" scoped>
.menbertow{
        padding-top: 40px;
        padding-bottom: 50px;
        .pinglunqu {
    font-size: 14px;
    text-align: center;
    color: #000;
    padding: 0 10px;
  }
  .info-pinglun1 {
    padding: 0 10px;
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