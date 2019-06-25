<template>
    <div class="liugongge">
        <mt-header fixed title="新闻资讯">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in Lgxinwen" :key="item.id">
					<router-link :to="{path: '/home/lliulan/', query: {id:item.id,comment:item.comment}}">
                    <!-- <router-link to="/home/lliulan?id={{item.id}}&comment={{item.comment}}"> -->
                        <img class="mui-media-object mui-pull-left" src="../../images/chuanqi1.jpg">
						<div class="mui-media-body">
							<h3>{{item.id}}</h3>
                            <p class='mui-ellipsis'>{{item.comment}}</p>
                            <p class="mui-ellipsis-xingfu">
                                <span>发表时间:{{item.created_at}}</span>
                                <span>点击次数:0</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast} from "mint-ui";

export default {
    data(){
        return{
            Amani:new Date(),
            Lgxinwen:[],
            id:this.$route.params.id
        }
    },
    created(){
        this.getLgxinwen();
    },
    methods:{
        aaa() {
            this.$router.push({
                path:'/home/lliulan',
                query: {
                    data: this.Lgxinwen
                }
            });
        },
        getLgxinwen(){
            this.$http.get("http://mx.maplegg.com/api/vue/comments?keyid=1&page=1").then(result=>{
                console.log(result)
                if(result.status==200){
                    this.Lgxinwen=result.data;
                }else
                {
                    Toast("失败！")
                }
            })
        },

    }
}
</script>

<style lang="scss" scoped>
.liugongge{
    padding-top: 40px;

.mui-table-view{
    li{
        h3{font-size:14px}
        .mui-ellipsis-xingfu{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;  
    }
    }
}
.mui-table-view .mui-media-object{
    line-height: 62px;
    max-width: 62px;
    height: 62px;
}
}
</style>

