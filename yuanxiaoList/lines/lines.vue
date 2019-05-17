<template>
	<view id="zsInfo">
		
		<view class="top">
			<navigator class="per" url="">
				<text class="te">
					视觉传达
				</text>
				<v-icon class="b" type="arrowdown" size="30"></v-icon>
			</navigator>
		</view>
		<view class="box">
			<view class="img">
				<image :src="line" mode="widthFix"></image>
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
			<dl>
				<dt @click="isShow = !isShow">
					<image v-if="isShow" :src="sc" mode="widthFix"></image>
					<image v-if="!isShow" :src="qx" mode="widthFix"></image>
				</dt>
				<dd>
					收藏
				</dd>
			</dl>
		</view>
	</view>
</template>

<script>
import banner from "@/static/img/yuanxiao/yanjiusheng.png"
import fx from "@/static/img/yuanxiao/fenxiang.png"
import sc from "@/static/img/yuanxiao/Star.png"
import qx from "@/static/img/yuanxiao/StarCopy.png"
import line from "@/static/img/yuanxiao/fenshu.png"
import user1 from "@/static/img/yuanxiao/mingshi1.png"
import user2 from "@/static/img/yuanxiao/mingshi2.png"
import dz from "@/static/img/yuanxiao/dianzan.png"
import mess from "@/static/img/yuanxiao/pinglun.png"
	export default {
		data() {
			return {
				imgSrc:"@/static/img/back.png",
				title:"分数线",
				banner,
				fx,
				sc,
				dz,
				mess,
				line,
				qx,
				isShow:true,
				info:"中央美术学院（Central Academy of Fine rts），简称“央美”，诞生于1918年，初名国立北京美术学校   ，中国历史上第一所国立美术教育学府，也是中国现代美术教育的开端。央美催生了中国最早的美术学制  ，开创了中国最早的书法 、造型、设计、建筑、人文等大学学科，是现代以来中国美术高等教育的奠基者。",
				info1:"中央美术学院建于1918年 ，是由蔡元培先生倡导成立的国立北京美术学校；1927年改名为北平大学艺术学院，恢复为国立北平艺术专科学校，改名为“国立艺术专科学校”，1949年，国立北平艺术专科学校和华北大学三部美术系合并，华北大学三部美术系的前身是成立于1938年的延安鲁迅艺术学院美术系。经­中央人民政府批准，成立国立美术学院，毛泽东主席题写院名。1950年1月，经中央人民政府政务院批准，正式定名为中央美术学院。",
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
				]
			};
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	#zsInfo{
		display: flex;
		flex-direction: column;
		height: 100%;
		.box{
			flex: 1;
			overflow-y: auto;
		}
	}
.banner{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32upx;
	image{
		width: 684upx;
		height: 298upx;
	}
}
.info{
	font-family: PingFangSC-Regular;
	font-size: 32upx;
	color: #000000;
	line-height: 56upx;
	text-indent: 2em;
	padding: 0 32upx;
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
	.top{
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
	.img{
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 16upx solid #F0F0F0;
		border-top: 16upx solid #F0F0F0;
		image{
			width: 100%;
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
</style>
