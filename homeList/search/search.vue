<template>
	<view class="mainBox">
		
		<view class="header">
			<view url="" class="top">
				<view class="box">
					<img :src="search" alt="">
					<input type="text" value="" placeholder="视觉传达"/>
				</view>
			</view>
		</view>
		<view class="hot">
			<view class="title">
				热搜
			</view>
			<view class="hotBox">
				<view class="hotPer" v-for="(item,index) in hotList" :key="index">
					<span>
						{{ item.text }}
					</span>
					<em>
						{{ item.num }}
					</em>
				</view>
			</view>
		</view>
		<view class="his">
			<view class="per" v-for="(ele , index) in hist" :key="index">
				<image :src="ele.url" mode="widthFix"></image> {{ ele.text }}
			</view>
		</view>
	</view>
</template>

<script>
import search from "@/static/img/home/Search.png"
import peple from "@/static/img/home/peple.png"
import m1 from "@/static/img/home/day.png"
import m2 from "@/static/img/home/book.png"
import m3 from "@/static/img/home/show.png"
import m4 from "@/static/img/home/msg.png"
import p1 from "@/static/img/home/smile.png"
import p2 from "@/static/img/home/fly.png"
import s1 from "@/static/img/search/time.png"
	export default {
		data() {
			return {
				search,
				hist:[
					{
						text:"上海大学",
						url:s1
					},{
						text:"江南大学",
						url:s1
					},{
						text:"世界现代设计史",
						url:s1
					},{
						text:"中国工艺美术史",
						url:s1
					},
				],
				hotList:[
					{
						text:"视觉传达",
						num:"15633"
					},
					{
						text:"中央美院",
						num:"9433"
					},
					{
						text:"工业设计专业",
						num:"7053"
					},
					{
						text:"服装设计",
						num:"5325"
					},
					{
						text:"安藤忠雄",
						num:"4876"
					},
				],
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
						text:"每日打卡"
					},
					{
						img:m2,
						text:"学堂"
					},
					{
						img:m3,
						text:"直播"
					},
					{
						img:m4,
						text:"研讯"
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

<style lang="scss">
.mainBox{
	.header{
		//background: #FDD003;
		
		.block{
			height: var(--status-bar-height);
			width: 100%;
			background: #FDD003;
		}
		.emptys{
			height: 138upx;
		}
		
		.top{
			//margin:0 36upx;
			padding: 24upx 0 54upx;
			background: rgba(241,241,241,0.50);
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
				margin:0 36upx;
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
	.hot{
		margin: 0 48upx 0 62upx;
		.title{
			font-family: PingFangSC-Regular;
			font-size: 40upx;
			color: #000000;
			padding-top: 68upx;
			font-weight: bold;
			margin-bottom: 28upx;
		}
		.hotBox{
			border-bottom: 2upx solid #DADADA;
			.hotPer{
				margin-bottom: 28upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				span,em{
					font-style: normal;
					font-family: PingFangSC-Regular;
					font-size: 36upx;
					color: #888888;
					line-height: 40upx;
				}
			}
		}
	}
	.his{
		margin: 0 48upx 0 62upx;
		.per{
			display: flex;
			align-items: center;
			font-family: PingFangSC-Regular;
			font-size: 36upx;
			color: #888888;
			margin: 10upx 0;
			image{
				width: 32upx;
				height: 32upx;
				margin-right: 32upx;
			}
		}
	}
}
</style>
