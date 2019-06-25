<template>
    <div class="infokazuo">
        <nav class="mui-bar mui-bar-tab ">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/three">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">新闻头条</span>
			</router-link>
			<router-link class="mui-tab-item" to="/four">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav> 
    </div>
</template>
<script>
export default {
	data(){
		return {

		}
	}
	
}
</script>
<style lang="scss" scoped>
.infokazuo{

}
</style>
