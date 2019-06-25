<template>
    <div class="lliulan">
        <mt-header fixed>
      <router-link to="/home/lgxinwen" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
        <div class="lliulan_souye">
            <h3>{{Llxinwen.commenter}}</h3>
            <p>
                <span>发表的时间：{{Llxinwen.created_at}}</span>
                <span>点击次数：0</span>
            </p>
            <hr>
            <div class="conent" v-html="Llxinwen.comment"></div>
            <div>
            {{$route.query.id}}--- {{$route.query.comment}}
            </div>
              <div>
                  昵称{{name}}--{{page}}
              </div>
<br><br><br><br><br><br><br><br><br><br><br><br>
            <z-comment :promis="title" :add="nam" :obj='Llxinwen.comment' v-on:Arrmys="Arrmys"></z-comment>
        </div>

    </div>
</template>
<script>
import Comment from '../subcomponents/comment.vue'
import {Toast}from 'mint-ui'
export default {
    data(){
        return{
            id:this.$route.params.id,
            listDate:new Date(),
            Llxinwen:{},
            title:"我是父组件传过来的鬼东西",
            name:'',
            nam:'小小的茄子',
            key:'多个参数',
            page:''
            
        }
    },
    methods:{
        getLgxinwen(){
            this.$http.get("http://mx.maplegg.com/api/vue/comments?keyid=1&page=1")
                .then(result=>{
                // console.log(result)
                    if(result.status==200){
                        this.Llxinwen=result.data[1]
                    }else
                        {
                            Toast("失败！")
                        }
            })
        },
        Arrmys(data){
            console.log(data);

            this.name=data.name;
            this.page=data.page;
        },
    },
    created(){
        this.getLgxinwen()
        // console.log(this.$route)
        // console.log(this.$route.query.data);

    },
    components:{
        'z-comment':Comment
    },
}
</script>


<style lang="scss" >
      .lliulan{padding:0 4px;
               padding-top: 40px;
          .lliulan_souye{
              h3{text-align: center}
              p{  display: flex;
                  justify-content: space-between;}
          }
      }
</style>
