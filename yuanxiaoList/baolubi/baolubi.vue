<template>
	<view id="blb">
		<view class="top">
			<navigator class="per" url="">
				<text class="te">
					视觉传达
				</text>
				<v-icon class="b" type="arrowdown" size="30"></v-icon>
			</navigator>
		</view>
		<view class="box">
			<view class="info">
				<view class="per" :class="ite.cla" v-for="(ite , index) in list" :key="index">
					{{ ite.info }}
				</view>
			</view>
			<view class="pl">
				<view class="tls">最新评论</view>
				<view class="title">
					<view class="per" v-for="(ite , index) in plList" :key="index">
						<view class="l">
							<image :src="ite.userIcon" mode="widthFix"></image>
						</view>
						<view class="r">
							<view class="rt">
								<view class="rtl">
									{{ ite.username }}
								</view>
								<view class="rtr">
									<image :src="dz" mode="widthFix"></image>
									<image :src="mess" mode="widthFix"></image>
									{{ ite.num }}
								</view>
							</view>
							<view class="rc">
								{{ ite.time }}
							</view>
							<view class="rb">
								{{ ite.info }}
							</view>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
		<view class="bot">
			<input type="text" value="" placeholder="发表评论" />
			<dl>
				<dt>
					<image :src="fx" mode="widthFix"></image>
				</dt>
				<dd>
					分享
				</dd>
			</dl>
			
		</view>
	</view>
</template>
<script>
	import fx from "@/static/img/yuanxiao/fenxiang.png"
	import user1 from "@/static/img/yuanxiao/mingshi1.png"
	import user2 from "@/static/img/yuanxiao/mingshi2.png"
	import dz from "@/static/img/yuanxiao/dianzan.png"
	import mess from "@/static/img/yuanxiao/pinglun.png"
	export default {
		data(){
			return {
				dz,
				mess,
				fx,
				plList:[
					{
						userIcon:user1,
						username:"不完美的小孩",
						time:"2018-04-06",
						info:"今年的分数线普遍提高，视觉传达特别突出，希望同学们做好择校的相关准备。",
						num:"1"
					},
					{
						userIcon:user2,
						username:"蓝色的小小帽",
						time:"2018-04-07",
						info:"今年的分数线普遍提高，视觉传达特别突出，希望同学们做好择校的相关准备。",
						num:"2"
					},
				],
				list:[
					{
						info:"年份",
						cla:"spec"
					},
					{
						info:"报名人数",
						cla:"spec"
					},
					{
						info:"录取人数",
						cla:"spec"
					},
					{
						info:"2018",
						cla:"on"
					},
					{
						info:"940",
						cla:"on"
					},
					{
						info:"8",
						cla:"on"
					},
					{
						info:"2017"
					},
					{
						info:"890"
					},
					{
						info:"6"
					},
					{
						info:"2016",
						cla:"on"
					},
					{
						info:"856",
						cla:"on"
					},
					{
						info:"6",
						cla:"on"
					},
					{
						info:"2015"
					},
					{
						info:"812"
					},
					{
						info:"2"
					},
					{
						info:"2014",
						cla:"on"
					},
					{
						info:"758",
						cla:"on"
					},
					{
						info:"1",
						cla:"on"
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.top{
		border-bottom: 16upx solid #F0F0F0;
		.per{
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: PingFangSC-Semibold;
			font-size: 36upx;
			color: #454242;
			letter-spacing: 3upx;
			padding: 34upx 0;
			.te{
				width: 200upx;
			}
			.b{
				margin-left: 56upx;
			}
		}
	}
	.info{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #474747;
		.per{
			padding: 28upx 0;
			width: 33.333%;
			text-align: center;
			color: #7C7C7C;
		}
		.on{
			background: #F0F0F0;
		}
		.spec{
			color: #474747;
			font-weight: bold;
		}
	}
	.pl{
		.tls{
			font-family: PingFangSC-Regular;
			font-size: 40upx;
			color: #454242;
			padding: 32upx;
			border-bottom: 4upx solid #D8D8D8;
		}
		.title{
			.per{
				display: flex;
				align-items: flex-start;
				padding: 32upx;
				border-bottom: 4upx solid #D8D8D8;
			}
			
			.l{
				margin-right: 18upx;
				image{
					width: 104upx;
					height: 104upx;
				}
			}
			.r{
				.rt{
					font-family: PingFangSC-Medium;
					font-size: 32upx;
					color: #454242;
					letter-spacing: 0.42upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.rtl{
						flex: 1;
					}
					.rtr{
						font-family: PingFangSC-Regular;
						font-size: 32upx;
						color: #979797;
						
						image{
							width: 40upx;
							height: 32upx!important;
							margin-left: 30upx;
							margin-right: 12upx;
						}
					}
				}
				.rc{
					font-family: PingFangSC-Medium;
					font-size: 28upx;
					color: #979797;
					letter-spacing: 0;
				}
				.rb{
					font-family: PingFangSC-Regular;
					font-size: 28upx;
					color: #5B5959;
				}
			}
		}
	}
	.bot{
			height: 82upx;
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #8A8A8A;
			display: flex;
			align-items: center;
			padding: 26upx 0upx 26upx 32upx;
			//padding-left: 32upx;
			input{
				flex: 1;
				border: 1px solid #DADADA;
				border-radius: 16upx;
				margin-left: 20upx;
			}
			dl{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 32upx;
				dt{
					padding: 0;
					width: 48upx;
					height: 48upx!important;
				}
				input{
					font-family: PingFangSC-Medium;
					font-size: 36upx;
					//text-indent: 2em;
					padding-left: 20upx;
					color: #909090;
				}
				image{
					width: 48upx;
					height: 48upx!important;
				}
				dd{
					font-family: PingFangSC-Medium;
					font-size: 20upx;
					color: #454242;
				}
			}
		}
		#blb{
			flex: 1;
			display: flex;
			flex-direction: column;
			.box{
				flex: 1;
				overflow-y: auto;
			}
		}
</style>
<style lang="scss">
	page{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>