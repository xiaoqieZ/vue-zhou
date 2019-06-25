<template>  
<div>

<!-- 头部 -->
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-scroll">
    <el-tab-pane class="jestify" label="推荐" name="first">
        <div  v-for="item in Obkety"  :key="item.id" @click="playss(item.id)">{{item.desc}}</div>
    </el-tab-pane>
    <el-tab-pane label="头条" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="育儿" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="中医" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="政策" name="zhengce">定时任务补偿</el-tab-pane>
    <el-tab-pane label="产业" name="chanye">定时任务补偿</el-tab-pane>
    <el-tab-pane label="旅游" name="lvyou">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>


<me-home></me-home>
</div>
</template>

<script>
import { Toast } from "mint-ui";
import homedater from "../subcomponents/HomeDater"
export default {
    data(){
        return {
           list:[],
           Obkety:[],
           selected: 0,
           activeName: 'first'
        }         
    },
    methods:{
        playss(id){
            this.$router.push({path:'/three/journalisms',query: {id:id }})
        },
        getText(){
            this.$http.get('https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/VideosList').then(res=>{
                console.log(res);
                if(res.status==200){
                    this.Obkety= res.body.data.videosList;
                }
            })
        },
        handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    created(){
        this.getText()
    },
    components:{
      'me-home':homedater
  } 
}
</script>


<style lang="scss" scoped>
.nav-scroll{
    // overflow-x: scroll;
    /deep/ .el-tabs__header{
        position: fixed;
        top:0;
        z-index: 99;
        background-color: #fff;
    }
    /deep/ .el-tabs__nav-scroll{
        overflow-x: scroll;
    }
    /deep/ .el-tabs__nav-scroll::-webkit-scrollbar {
    display: none;
  }
  /deep/ .el-tabs__item{
        height: 55px;
        line-height: 55px;
        font-size: 17px;
        width: 100px;
        text-align: center;
}
    /deep/ .el-tabs__nav-prev{
        display: none;
    }
    /deep/ .el-tabs__nav-next{
        display: none;
    }
    /deep/ .el-tabs__nav-wrap{
        padding: 0
    }
    /deep/ .el-tabs__content {
        padding:66px 0;
    }
}
</style>