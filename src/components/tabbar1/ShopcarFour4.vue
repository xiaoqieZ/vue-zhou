<template>
    <div class="shopcarfour">
        <mt-header fixed title="我的">
      <router-link to="/four/submarine" slot="left">
        <mt-button><input type="button" v-model="chengs"></mt-button>
      </router-link>
    </mt-header>
        <me-home></me-home>
    </div>
</template>

<script>
import homedater from "../subcomponents/HomeDater"
export default {
    data(){
        return {
          chengs:'获取地址',
        }
    },
    components:{
      'me-home':homedater
  },  
}
</script>

<style lang="scss" scoped>
.shopcarfour{
      padding-top: 40px;
      input{
            color: #fff;
            width: 100px;
            background-color: #26a2ff;
            border: none;
      }
    
}
</style>