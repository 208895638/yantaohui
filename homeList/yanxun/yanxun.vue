<template>
	<view id="yx">
		<!--  #ifdef  H5 -->
		<!-- <block></block> -->
		<headers :imgSrc="imgSrc" :classs="'on'" :title="title"></headers>
		<!--  #endif -->
		<view class="swipers">
			<swiper class="swiper" indicator-color="#000" indicator-active-color="#FDD003" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="circular" :duration="duration">
				<swiper-item class="swiList" v-for="(ele , index) in lists" :key="index">
					<image :src="ele.imgs" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="cen">
			<view @click="aa(index)" :class="nowIndex == index ? 'on' : ''" class="per" v-for="(ite , index) in menu" :key="index">
				{{ ite.title }}
			</view>
		</view>
		<view class="bot">
			<view class="per" v-show="index == nowIndex" v-for="(ite , index) in yxList" :key="index">
				<view class="t">
					{{ ite.title }}
				</view>
				<view class="c">
					{{ ite.info }}
				</view>
				<view class="b">
					{{ ite.time }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import peple from "@/static/img/home/yanxun/inquiry.png"
	export default {
		data() {
			return {
				imgSrc:"@/static/img/back.png",
				title:"研讯",
				nowIndex:0,
				lists:[
					{
						imgs:peple
					},{
						imgs:peple
					},{
						imgs:peple
					},
				],
				menu:[
					{
						title:'报考经验'
					},
					{
						title:'政策新闻'
					},
					{
						title:'复试调剂'
					},
				],
				yxList:[
					{
						title:'2019年全国硕士研究生招生考试时间1',
						info:"根据《2019年全国硕士研究生招生工作管理定》现将2019年全国硕士研究生招生考…",
						time:"2018-08-22"
					},
					{
						title:'2019年全国硕士研究生招生考试时间2',
						info:"根据《2019年全国硕士研究生招生工作管理定》现将2019年全国硕士研究生招生考…",
						time:"2018-08-22"
					},
					{
						title:'2019年全国硕士研究生招生考试时间3',
						info:"根据《2019年全国硕士研究生招生工作管理定》现将2019年全国硕士研究生招生考…",
						time:"2018-08-22"
					},
				],
				indicatorDots:true,
				autoplay:true,
				interval:3000,
				duration:500,
				circular:true,
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
.swipers{
		
		.swiList{
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 694upx;
				height: 240upx;
			}
		}
	}
	.cen{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10upx 40upx;
		.per{
			border-bottom: 8upx solid transparent;
			font-family: PingFangSC-Regular;
			font-size: 38upx;
			color: #595959;
		}
		.on{
			border-bottom: 8upx solid #FDD003;
			color: #000;
		}
		
	}
	.bot{
		
		.per{
			padding: 26upx 32upx;
			border-bottom: 2upx solid  #DADADA;
		}
		.t{
			font-family: PingFangSC-Regular;
			font-size: 36upx;
			color: #000000;
		}
		.t,.b{
			margin: 6upx 0;
		}
		.c,.b{
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #666666;
		}
		.b{
			
		}
	}
</style>
<style lang="scss">
page{
		height:100%;
	}
	#yx{
		height: 100%;
		display: flex;
		flex-direction: column;
		.bot{
			flex: 1;
			overflow-y: auto;
		}
	}
</style>
	
