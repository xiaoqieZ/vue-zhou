<template>
  <div>
    <div class="tupianla">
      <mt-header fixed title="图片分享">
        <router-link to="/home" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <div class="daohangye">
        <ul>
          <li>
            <router-link to="/home/fenlei1">图1</router-link>
          </li>
          <li>
            <router-link to="/home/fenlei2">图2</router-link>
          </li>
          <li>
            <router-link to="/home/fenlei3">图3</router-link>
          </li>
          <li>
            <router-link to="/home/fenlei4">图4</router-link>
          </li>
          <li>
            <router-link to="/home/fenlei5">图5</router-link>
          </li>
          <li>
            <router-link to="/home/fenlei6">图6</router-link>
          </li>
        </ul>
      </div>
    </div>
    <transition>
    <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.tupianla {
  padding-top: 40px;
  height: 104px;
  .daohangye::-webkit-scrollbar {
    display: none;
  }
  .daohangye {
    width: 100%;
    height: 66px;
    overflow-x: scroll;
    position: fixed;
    background-color: #fff;
    z-index: 99;
    ul {
      width: 480px;
      height: 30px;
      padding: 0;
    }
    li {
      width: 80px;
      height: 30px;
      line-height: 30px;
      list-style: none;
      float: left;
      text-align: center;
    }
  }
}
</style>
