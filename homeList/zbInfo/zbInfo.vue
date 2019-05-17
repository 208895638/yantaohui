<template>
	<view id="zbInfo">
		<!--  #ifdef  APP-PLUS || H5 -->
		<block></block>
		<headers :imgSrc="imgSrc" :classs="'on'" :title="title"></headers>
		<!--  #endif -->
		<view class="top">
			<image class="l" :src="user.icon" mode="widthFix"></image>
			<view class="r">
				<view class="t">
					{{ user.name }}
				</view>
				<view class="b">
					<text>{{ user.job }}</text>
					<text>{{ user.num }}观看</text>
				</view>
			</view>
		</view>
		<view class="cen">
			<image :src="user.imgUrl" mode="widthFix"></image>
		</view>
		<view class="list">
			<view class="per" v-for="(ite , index) in list" :key="index">
				{{ ite.text }}
			</view>
		</view>
		<view class="bot">
			<view class="box">
				<input type="text" value="" placeholder="发表评论" />
			</view>
		</view>
	</view>
</template>

<script>
	import userIcon from "@/static/img/home/zhibo/ice.png"
	import imgUrl from "@/static/img/home/zhibo/draw.png"
	export default {
		data() {
			return {
				imgSrc: "@/static/img/back.png",
				title: "直播",
				user: {
					icon: userIcon,
					name: "飞旋的板砖",
					job: "杭州 | 手绘师",
					num: "12313",
					imgUrl: imgUrl
				},
				list: [{
						text: "可笑的橘：大神啊  666"
					},
					{
						text: "可笑的橘：大神啊  661"
					},
					{
						text: "可笑的橘：大神啊  662"
					},
					{
						text: "可笑的橘：大神啊  663"
					},
					{
						text: "可笑的橘：大神啊  664"
					},
					{
						text: "可笑的橘：大神啊  665"
					},
					{
						text: "可笑的橘：大神啊  666"
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.top{
	display: flex;
	align-items: center;
	padding-top: 36upx;
	margin: 0 56upx;
	.l{
		width: 90upx;
		height: 90upx!important;
	}
	.r{
		flex: 1;
		display: flex;
		flex-direction: column;
		.t{
			font-family: PingFangSC-Regular;
			font-size: 36upx;
			color: #404040;
		}
		.b{
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-family: PingFangSC-Regular;
			font-size: 28upx;
			color: #545454;
		}
	}
}
.cen{
	margin: 0 56upx;
	padding-top: 16upx;
	image{
		width: 638upx;
		height: 638upx;
		margin: 0 auto;
	}
}
.list{
	.per{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #666666;
		padding: 18upx 56upx;
		border-bottom: 2upx solid #F2F2F2;
	}
}
.bot{
	padding: 16upx 28upx;
	background: #F0F0F0;
	display: flex;
	align-items: center;
	justify-content: center;
	.box{
		flex: 1;
		border: 2upx solid #DADADA;
		background: #FFFFFF;
		border-radius: 16upx;
		font-family: PingFangSC-Medium;
		font-size: 40upx;
		color: #8A8A8A;
		padding: 0 22upx;
		height: 76upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	input{
		flex: 1;
	}
}
</style>
<style lang="scss">
	#zbInfo{
		height: 100%;
		display: flex;
		flex-direction: column;
		.list{
			flex: 1;
			overflow-y: auto;
		}
	}
</style>
<style>
page {
	height: 100%;
}
</style>