<template>
    <div>
        {{promis}}--{{add}}--{{obj}}
        <button value="点击传值" @click="Plays"></button>
        <h3>评论内容</h3>
        <textarea placeholder="请输入您的看法" maxlength="120" v-model="comment"></textarea>
        <mt-button type="primary" size="large" >发表评论</mt-button>
        
        <div class="pinglunqujian" v-for="(item,index) in listondifs" :key="item.id">
            <div class="yangshiba">
               <span>第{{index+1}}楼</span>
               <span>用户：{{item.commenter}}</span>
               <span>发表时间：{{item.created_at | dateFormat}}</span>
            </div>
                <p>{{item.comment==='undefind'?'此用户很懒，啥都没写':item.comment}}</p>
        </div>
        <div>
            <mt-button type="danger" size="large" @click="jiazai">刷新更多</mt-button>
        </div>
    </div>
</template>


<script>
import {Toast} from "mint-ui";
export default {
    props: ['promis','add','obj'],
    data(){
       return{
           comment:'',
           page:1,
           listondifs:[],
           name:'我是子组件传过来的鬼东西',
           page:19
       }
   },
   created() {
       this.getComments();
       this.Plays()
   },
   methods:{
       getComments(){
           this.$http.get("http://mx.maplegg.com/api/vue/comments?keyid=1&page="+this.page).then(res=>{
            //    console.log(res)
               if(res.status===200){
                   this.listondifs=this.listondifs.concat(res.data)
                //    console.log(this.listondifs)
               }else{
                   Toast("请求评论失败！")
               }
           })
       },
       jiazai(){
           this.page++
           this.getComments()
       },
    // tan(){
    //    this.getComments()
    //    let data={comment:this.comment}
    // },
        Plays(){
            let data = {
                name: this.name,
                page: this.page,
            }
                this.$emit('Arrmys',data)
   }
   }
}
</script>


<style lang="scss" scoped>
  .pinglunqujian{ padding: 2px;
      .yangshiba {
          line-height: 30px;
          background-color:#ccc;
      }
      span{font-size: 14px;
      }
      p{text-indent:2em ;
        line-height: 30px;
        color: #000;
      }
  }
</style>
