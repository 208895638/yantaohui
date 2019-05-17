<template>
	<view class="box" :class="classs">
			<v-icon class="back" @click="back" type="arrowleft" size="30"></v-icon>
			<view class="text">{{ title }}</view>
			<!--  #ifdef  APP-PLUS || H5 -->
				<navigator url="/yuanxiaoList/settingofqun/settingofqun"  class="more">
					<image :src="rImg" mode="widthFix"></image>
				</navigator>
			<!--  #endif -->
			
	</view>
</template>

<script>
	import rImg from "@/static/img/yuanxiao/taolun/more.png";
	export default {
		props:["imgSrc" , "title" , "classs"],
		data() {
			return {
				rImg
			};
		},
		methods:{
			back(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
.yell{
	background: #FDD003;
}
.box{
	display: flex;
	align-items: stretch;
	padding: 22upx;
	.back{
		
	}
	.more{
		//height: 100%;
		//background: red;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.text{
		flex: 1;
		font-family: PingFangSC-Regular;
		font-size: 44upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000000;
	}
	
	.more{
		image{
			width: 60upx;
			height: 16upx;
		}
	}
}
</style>
