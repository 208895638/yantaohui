<template>
	<view class="box">
		<view class="name">
			<view class="l">
				讨论组名称
			</view>
			<view class="r">
				中央美院视觉群
			</view>
		</view>
		<view class="userlist">
			<view class="t">
				<view class="l">
					讨论组名称
				</view>
				<view class="r">
					<view class="ll" v-if="!nowIndex">
						<view class="imgs" v-for="(ite , index) in tops" :key="index">
							<image :src="ite.img" mode="widthFix"></image>
						</view>
					</view>
					<view class="rr" @click="aa()">
						<image v-if="!nowIndex" :src="add" mode="widthFix"></image>
						<image v-else :src="jian" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="b" v-if="nowIndex">
				<dl v-for="(ite , index) in list" :key="index">
					<dt>
						<image :src="ite.img" mode="widthFix"></image>
					</dt>
					<dd>
						{{ ite.name }}
					</dd>
				</dl>
			</view>
		</view>
		<view class="mess">
			<view>
				消息提醒
			</view>
			<view>
				<switch checked color="#FDD003" />
			</view>
		</view>
		<button  type="primary" class="oran">退出群聊</button>
	</view>
</template>
<script>
	import img1 from "@/static/img/yuanxiao/taolun/small4.png";
	import img2 from "@/static/img/yuanxiao/taolun/small5.png";
	import img3 from "@/static/img/yuanxiao/taolun/small6.png";
	import img4 from "@/static/img/yuanxiao/taolun/small7.png";
	import add from "@/static/img/yuanxiao/taolun/add.png";
	import jian from "@/static/img/yuanxiao/taolun/jian.png";
	export default {
		methods:{
			aa(a){
				this.nowIndex = !this.nowIndex;
			}
		},
		data(){
			return {
				add,
				jian,
				nowIndex:false,
				tops:[
					{
						img:img1
					},
					{
						img:img2
					},
					{
						img:img3
					}
					
				],
				list:[
					{
						img:img1,
						name:"走过..."
					},
					{
						img:img2,
						name:"LIKE…"
					},
					{
						img:img3,
						name:"拓海"
					},
					{
						img:img4,
						name:"青鱼"
					},
					{
						img:img1,
						name:"冰冰..."
					},
					{
						img:img2,
						name:"初光"
					},
					{
						img:img3,
						name:"安"
					},
					{
						img:img4,
						name:"红红..."
					},
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.box{
		.name{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: PingFangSC-Regular;
			font-size: 40upx;
			color: #454242;
			letter-spacing: 1.5px;
			padding: 38upx;
			border-bottom: 4upx solid #DADADA;
			.l{
				font-size: 40upx;
			}
			.r{
				font-size: 36upx;
				font-family: PingFangSC-Regular;
				color: #454242;
			}
		}
		.userlist{
			border-bottom: 24upx solid #F0F0F0;
			.t{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: PingFangSC-Regular;
				font-size: 40upx;
				color: #454242;
				letter-spacing: 1.5px;
				padding: 38upx;
				border-bottom: 4upx solid #DADADA;
				.l{
					
				}
				.r{
					display: flex;
					align-items: center;
					.ll{
						display: flex;
						align-items: center;
						justify-content: center;
						.imgs{
							display: flex;
							align-items: center;
							justify-content: center;
						}
					}
					image{
						width: 54upx;
						height: 54upx;
						margin: 0 6upx;
					}
					.rr{
						display: flex;
						align-items: center;
						justify-content: center;
						image{
							width: 42upx;
						}
					}
				}
			}
			.b{
				padding-top: 28upx;
				padding: 56upx 46upx ;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				dl{
					width: 20%;
					padding-bottom: 28upx;
					dt{
						display: flex;
						align-items: center;
						justify-content: center;
						image{
							width: 110upx;
							height: 100upx;
						}
					}
					dd{
						display: flex;
						align-items: center;
						justify-content: center;
						font-family: PingFangSC-Medium;
						font-size: 20upx;
						color: #454242;
					}
					
				}
			}
		}
		.mess{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 22upx;
			font-family: PingFangSC-Regular;
			font-size: 40upx;
			color: #454242;
			letter-spacing: 3upx;
			border-bottom: 4upx solid #DADADA;
		}
		.oran{
			width: 556upx;
			margin: 40upx auto;
			font-family: PingFangSC-Regular;
			font-size: 40upx;
			color: #000000;
			letter-spacing: 3upx;
			background: #FFCD01;
		}
	}
</style>