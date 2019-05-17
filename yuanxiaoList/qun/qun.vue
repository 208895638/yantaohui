<template>
	<view id="qun">
		<view>
			<div class="block">
				
			</div>
			<moreheader classs="yell" title="讨论组"></moreheader>
		</view>
		<ul class="mainContent">
			<li class="per" :class="item.activeClass" v-for="(item , index) in list" :key="index">
				<image :src="item.icon" mode="widthFix"></image>
				<text class="te">{{ item.info }}</text>
			</li>
		</ul>
		<view class="foot">
			<view class="l">
				<image :src="voice" mode="widthFix"></image>
			</view>
			<view class="c">
				<input class="inp" type="text" value="" />
			</view>
			<view class="r">
				<image :src="add" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>
<script>
	import userIcon1 from "@/static/img/yuanxiao/taolun/my.png";
	import userIcon2 from "@/static/img/yuanxiao/taolun/loda.png";
	import voice from "@/static/img/yuanxiao/taolun/Group.png";
	import add from "@/static/img/yuanxiao/taolun/add.png";
	import moreheader from "@/components/moreheader.vue";
	export default {
		components:{
			moreheader
		},
		data(){
			return {
				imgSrc:"@/static/img/back.png",
				title:"讨论组",
				voice,
				add,
				list:[
					{
						icon:userIcon1,
						info:'在吗？',
						activeClass:""
					},
					{
						icon:userIcon2,
						info:'怎么啦？',
						activeClass:"r"
					},
					{
						icon:userIcon1,
						info:'你们都选择什么专业？',
						activeClass:""
					},
				]
			}
		}
	}
</script>
<style>
page{
		height: 100%;
	}
</style>
<style lang="scss" scoped>
	.block{
		height: var(--status-bar-height);
		width: 100%;
		background: #FDD003;
	}
	#qun{
		display: flex;
		flex-direction: column;
		height: 100%;
		.mainContent{
			padding: 14upx 40upx;
			background: #FFFFFF;
			flex: 1;
			overflow-y: auto;
			.per{
				display: flex;
				align-items: center;
				font-family: PingFangSC-Regular;
				font-size: 36upx;
				color: #4A4A4A;
				margin: 30upx 0;
				.te{
					padding: 26upx 58upx 24upx 22upx;
					background: #F7F7F7;
					border-radius: 8upx;
				}
				image{
					width: 108upx;
					height: 108upx;
				}
				
			}
			.r{
				flex-direction: row-reverse;
			}
		}
		.foot{
			display: flex;
			align-items: center;
			background: #F7F7F7;
			padding: 26upx 0;
			.c{
				flex: 1;
				height: 80upx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #FFFFFF;
				border-radius: 200upx;
				padding: 0 40upx;
				.inp{
					width: 100%;
				}
			}
			.l,.r{
				padding: 0 24upx;
			}
			.l{
				image{
					width: 68upx;
					height: 68upx;
				}
			}
			.r{
				image{
					width: 42upx;
					height: 42upx;
				}
			}
		}
	}
</style>