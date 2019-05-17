<template>
	<view class="mainBox">
		
		<view class="header">
			
			<navigator url="/pages/home/search/search" class="top">
				<view class="box">
					<img :src="search" alt="">
					<input type="text" value="" disabled placeholder="中央美术学院"/>
				</view>
			</navigator>
			<view class="emptys">
				&nbsp;
			</view>
		</view>
		<view class="swipers">
			<swiper class="swiper" indicator-color="#000" indicator-active-color="#FDD003" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="circular" :duration="duration">
				<swiper-item class="swiList" v-for="(ele , index) in lists" :key="index">
					<image :src="ele.imgs" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="menu">
			<navigator :url="item.url" v-for="(item , index) in menu" :key="index">
			<dl >
				<dt>
					<image class="imgs" :src="item.img" mode="widthFix"></image>
				</dt>
				<dd>
					{{ item.text }}
				</dd>
			</dl>
			</navigator>
		</view>
		<view class="last">
			<dl>
				<dt>
					推荐
				</dt>
				<dd v-for="(ele , index) in imgList" :key="index">
					<image :src="ele.img" mode="widthFix"></image>
				</dd>
			</dl>
		</view>
	</view>
</template>

<script>
import search from "../img/Search.png"
import peple from "../img/peple.png"
import m1 from "../img/day.png"
import m2 from "../img/book.png"
import m3 from "../img/show.png"
import m4 from "../img/msg.png"
import p1 from "../img/smile.png"
import p2 from "../img/fly.png"
	export default {
		data() {
			return {
				search,
				lists:[
					{
						imgs:peple
					},{
						imgs:peple
					},{
						imgs:peple
					},
				],
				indicatorDots:true,
				autoplay:true,
				interval:3000,
				duration:500,
				circular:true,
				menu:[
					{
						img:m1,
						text:"每日打卡",
						url:"/homeList/daka/daka"
					},
					{
						img:m2,
						text:"学堂",
						url:"/homeList/xuetang/xuetang"
					},
					{
						img:m3,
						text:"直播",
						url:"/homeList/zhibo/zhibo"
					},
					{
						img:m4,
						text:"研讯",
						url:"/homeList/yanxun/yanxun"
					},
				],
				imgList:[
					{
						img:p1
					},
					{
						img:p2
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
.mainBox{
	.header{
		background: #FDD003;
		
		.block{
			height: var(--status-bar-height);
			width: 100%;
		}
		.emptys{
			height: 138upx;
		}
		
		.top{
			margin:0 36upx;
			padding: 24upx 0 54upx;
			.box{
				//width: 100%;
				background: #fff;
				display: flex;
				//padding: 24upx 12upx;
				align-items: center;
				background: #FFFFFF;
				border-radius: 16upx;
				padding-left: 24upx;
				height: 70upx;
				img{
					width: 40upx;
					height: 40upx;
					margin-right: 16upx;
				}
				input{
					flex: 1;
				}
			}
		}
	}
	.swipers{
		margin-top: -150upx;
		//marign-top: -138upx;
		.swiList{
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.menu{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 2upx solid #DADADA;
		border-bottom: 2upx solid #DADADA;
		margin: 0 38upx;
		padding-bottom: 22upx;
		dl{
			dt{
				padding: 22upx 0 22upx 0;
			}
			.imgs{
				width: 80upx;
				height: 70upx;
			}
			dt,dd{
				display: flex;
				align-items: center;
				justify-content: center;
			}
			dd{
				font-family: PingFangSC-Regular;
				font-size: 28upx;
				color: #000000;
			}
		}
	}
	.last{
		margin: 0 38upx;
		dl{
			font-family: PingFangSC-Medium;
			font-size: 28upx;
			color: #545454;
			margin: 18upx 0;
		}
		dd{
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			image{
				width: 646upx;
				height: 390upx;
			}
		}
	}
}
</style>
