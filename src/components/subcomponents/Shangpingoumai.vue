<template>
<div>
<mt-header fixed title="新闻资讯">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="info-sou">
        <div class="info-er">
            <img src="//img11.360buyimg.com/n7/jfs/t21835/271/2248260388/83686/e9f1879b/5b4eb48cN9bd7cf1c.jpg" alt="">
            <p class="info-p">此商品将于2019-05-30,00点结束闪购特卖，潮电青春束闪购特卖，潮电青春此商品将</p>
            <div class="info-san">
                    <span class="now">￥2190</span>
                    <span class="old">￥2400</span>
                <p class="amni">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="info-er">
            <img src="//img11.360buyimg.com/n7/jfs/t21835/271/2248260388/83686/e9f1879b/5b4eb48cN9bd7cf1c.jpg" alt="">
            <p class="info-p">此商品将于2019-05-30,00点结束闪购特卖，潮电青春</p>
            <div class="info-san">
                    <span class="now">￥2190</span>
                    <span class="old">￥2400</span>
                <p class="amni">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="info-er">
            <img src="//img11.360buyimg.com/n7/jfs/t21835/271/2248260388/83686/e9f1879b/5b4eb48cN9bd7cf1c.jpg" alt="">
            <p class="info-p">此商品将于2019-05-30,00点结束闪购特卖，潮电青春</p>
            <div class="info-san">
                    <span class="now">￥2190</span>
                    <span class="old">￥2400</span>
                <p class="amni">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="info-er">
            <img src="//img11.360buyimg.com/n7/jfs/t21835/271/2248260388/83686/e9f1879b/5b4eb48cN9bd7cf1c.jpg" alt="">
            <p class="info-p">此商品将于2019-05-30,00点结束闪购特卖，潮电青春此商品将于2019-05-30,00点结束闪购特卖，潮电青春</p>
            <div class="info-san">
                     <span class="now">￥2190</span>
                    <span class="old">￥2400</span>
                <p class="amni">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.info-sou{
    padding-top: 40px;
    .info-er{
        width: 49%;
        float: left;
        text-align: left;
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
        }
        .info-p{
            color: #000;
            max-height: 62px;
            overflow: hidden;
            }
        .info-san{
            background-color:#eee;
            .now{
                color: red;
                font-weight: 800;
            }
            .old{
                text-decoration: line-through;
            }
            .amni{
                display: flex;
                justify-content:space-between; 
            }
        }
    }
    
}
</style>
