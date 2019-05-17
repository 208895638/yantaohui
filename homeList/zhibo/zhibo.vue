<template>
	<view id="zhibo">
		<!--  #ifdef  APP-PLUS || H5 -->
		<block></block>
		<headers :imgSrc="imgSrc" :classs="'on'" :title="title"></headers>
		<!--  #endif -->
		<view class="top">
			<img :src="search" alt="">
			<input type="text" value="" placeholder="中央美术学院" />
		</view>
		<view class="cen">
			<view :class="index == nowIndex ? 'on' : ''" 
			class="per" 
			v-for="(ele , index) in titles" 
			:key="index"
			@click="aa(index)">
				{{ ele.ts }}
			</view>
		</view>
		<view class="line">
			
		</view>
		<view class="bot">
			<view class="pd1 pd" v-if="nowIndex == 0">
				<navigator class="per" :url="ite.links" v-for="(ite , index) in pd1" :key="index">
					<dl>
						<dt :style="'background: url(' + ite.imgUrl + ') no-repeat center;'">
							<div class="mask">
								<image :src="playBtn" mode="widthFix"></image>
							</div>
						</dt>
						<dd>
							{{ ite.text }}
						</dd>
					</dl>
				</navigator>
			</view>
			<view class="pd2 pd" v-if="nowIndex == 1">
				<navigator class="per" :url="ite.links" v-for="(ite , index) in pd2" :key="index">
					<dl>
						<dt>
							<image :src="ite.imgUrl" mode="widthFix"></image>
							<div class="mask">
								<image :src="playBtn" mode="widthFix"></image>
							</div>
						</dt>
						<dd>
							<view class="l">
								<image :src="ite.userIcon" mode="widthFix"></image>
								<text>{{ ite.userName }}</text>
							</view>
							<view class="r">
								{{ ite.num }}准备看
							</view>
						</dd>
					</dl>
				</navigator>
			</view>
			<view class="pd1 pd" v-if="nowIndex == 2">
				<navigator class="per" :url="ite.links" v-for="(ite , index) in pd1" :key="index">
					<dl>
						<dt :style="'background: url(' + ite.imgUrl + ') no-repeat center;'">
							<div class="mask">
								<image :src="playBtn" mode="widthFix"></image>
							</div>
						</dt>
						<dd>
							{{ ite.text }}
						</dd>
					</dl>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import search from "@/static/img/home/Search.png"
	import playBtn from "@/static/img/home/zhibo/sanjiao.png"
	import img1 from "@/static/img/home/zhibo/channal1.png"
	import img2 from "@/static/img/home/zhibo/channal2.png"
	import img3 from "@/static/img/home/zhibo/channal3.png"
	import img4 from "@/static/img/home/zhibo/channal4.png"
	import img5 from "@/static/img/home/zhibo/channal5.png"
	import img6 from "@/static/img/home/zhibo/channal6.png"
	import hot1 from "@/static/img/home/zhibo/red.png"
	import hot2 from "@/static/img/home/zhibo/tiger.png"
	import hot3 from "@/static/img/home/zhibo/big.png"
	import userImg from "@/static/img/home/zhibo/sweet.png"
	export default {
		data() {
			return {
				search,
				playBtn,
				imgSrc: "@/static/img/back.png",
				title: "直播",
				nowIndex:0,
				titles:[
					{
						ts:"频道"
					},
					{
						ts:"热门"
					},
					{
						ts:"最新"
					}
				],
				pd1:[
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"大师讲座",
						imgUrl:img1
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"插画风格",
						imgUrl:img2
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"手绘指导",
						imgUrl:img3
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"手绘插画",
						imgUrl:img4
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"手绘字体技巧",
						imgUrl:img5
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						text:"18研展",
						imgUrl:img6
					}
				],
				pd2:[
					{
						links:"/homeList/zbInfo/zbInfo",
						userName:"糖果雨",
						imgUrl:hot1,
						userIcon:userImg,
						num:"124"
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						userName:"糖果雨1",
						imgUrl:hot2,
						userIcon:userImg,
						num:"123"
					},
					{
						links:"/homeList/zbInfo/zbInfo",
						userName:"糖果雨2",
						imgUrl:hot3,
						userIcon:userImg,
						num:"12124"
					},
				]
			};
		},
		methods:{
			aa(a){
				this.nowIndex = a;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		//width: 100%;
		background: #fff;
		display: flex;
		//padding: 24upx 12upx;
		align-items: center;
		background: #FFFFFF;
		border-radius: 16upx;
		margin:50upx 24upx;
		padding-left: 24upx;
		height: 70upx;
		border: 2upx solid #DADADA;
		img {
			width: 40upx;
			height: 40upx;
			margin-right: 16upx;
		}

		input {
			flex: 1;
		}
	}
	.cen{
		display: flex;
		align-items: center;
		justify-content: center;
		.per{
			font-family: PingFangSC-Regular;
			font-size: 38upx;
			color: #000000;
			padding: 10upx 0;
			margin: 0 74upx;
			border-bottom: 4upx solid transparent;
		}
		.on{
			border-bottom: 8upx solid #FDD003;
		}
	}
	.line{
		width: 100%;
		height: 8upx;
		background: #DADADA;
		margin-top: -8upx;
		position: relative;
		z-index: -1;
	}
	.bot{
		flex: 1;
		overflow-y: auto;
		
		
		.pd1{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			padding: 54upx;
			.per{
				width: 48%;
				dl{
					dt{
						height: 252upx;
						border-radius: 8upx;
						overflow: hidden;
						.mask{
							width: 100%;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							background: rgba(000,000,000,0.4);
							
							image{
								width: 42upx;
								height: 46upx;
							}
						}
					}
					dd{
						padding: 20upx 0 50upx 0;
						text-align: center;
						font-family: PingFangSC-Regular;
						font-size: 32upx;
						color: #545454;
					}
				}
			}
		}
		.pd2{
			padding: 54upx;
			dl{
				dt{
					position: relative;
					border-radius: 8upx;
					overflow: hidden;
					>image{
						width: 100%;
					}
					.mask{
						position: absolute;
						left: 0;
						bottom: 0;
						width: 100%;
						height: 100%;
						z-index: 2;
						display: flex;
						align-items: center;
						justify-content: center;
						background: rgba(000,000,000,0.4);
						>image{
							width: 56upx;
							height: 62upx!important;
						}
					}
				}
				dd{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 50upx 0 20upx;
					font-family: PingFangSC-Regular;
					font-size: 36upx;
					color: #545454;
					.l{
						
						display: flex;
						align-items: center;
						justify-content: center;
						>image{
							width: 90upx;
							height: 90upx!important;
							margin-right: 16upx;
						}
					}
				}
			}
		}
	}
</style>
<style lang="scss">
	#zhibo {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
<style>
page {
	height: 100%;
}
</style>