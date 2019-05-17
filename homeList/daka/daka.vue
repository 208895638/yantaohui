<template>
	<view class="mainContent" id="daka">
		
		<view class="box">
			<view class="top">
				<text class="text">2018九月</text>
				<view class="info">
					<view class="span" :class="ele.classs" v-for="(ele , index) in datas" :key="index"><span >{{ ele.text }}</span></view>
					
				</view>
			</view>
			<view class="cen">
				<view class="title">
					<image class="imgs" :src="img1" mode="widthFix"></image>今天也是元气满满的一天！
				</view>
				<view class="uni-lists">
					<view class="uni-list-cells" v-for="(item,index) in statuss" :key="index">
						<view class="uni-list-cell-navigate ">
							<span>{{item.text}}</span><switch size="mini" checked color="#FDD003" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bot">
			发表感言
			<input type="text" value="" placeholder="" />
		</view>
	</view>
</template>

<script>
import img1 from "@/static/img/home/pic.png"
import headers from "@/components/header.vue"
	export default {
		components:{
			headers
		},
		data() {
			return {
				img1,
				imgSrc:"@/static/img/back.png",
				title:"每日打卡",
				statuss:[
					{
						text:"今天早起了",
						clssss:"on"
					},{
						text:"学习了外语",
						clssss:"on"
					},{
						text:"学习了政治",
						clssss:"on"
					},{
						text:"学习专业课",
						clssss:"on"
					},{
						text:"学习了理论",
						clssss:"on"
					},{
						text:"锻炼了身体",
						clssss:"on"
					},
				],
				datas:[
					{
						text:"一",
						classs:""
					},
					{
						text:"二",
						classs:""
					},
					{
						text:"三",
						classs:""
					},
					{
						text:"四",
						classs:""
					},
					{
						text:"五",
						classs:""
					},
					{
						text:"六",
						classs:""
					},
					{
						text:"日",
						classs:""
					},
					{
						text:"27",
						classs:""
					},
					{
						text:"28",
						classs:""
					},
					{
						text:"29",
						classs:""
					},
					{
						text:"30",
						classs:""
					},
					{
						text:"31",
						classs:""
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"补",
						classs:"on"
					},
					{
						text:"今",
						classs:"dark"
					},
					{
						text:"20",
						classs:""
					},
					{
						text:"21",
						classs:""
					},
					{
						text:"22",
						classs:""
					},
					{
						text:"23",
						classs:""
					},
					
					{
						text:"24",
						classs:""
					},
					{
						text:"25",
						classs:""
					},
					{
						text:"26",
						classs:""
					},
					{
						text:"27",
						classs:""
					},
					{
						text:"28",
						classs:""
					},
					{
						text:"29",
						classs:""
					},{
						text:"30",
						classs:""
					},
				]
			};
		}
	}
</script>

<style lang="scss">
uni-page{
	
	display: flex;
}

uni-page-body, uni-page-refresh{
	flex: 1;
	display: flex;
	
}
.block{
			height: var(--status-bar-height);
			width: 100%;
			background: #FDD003;
		}
.mainContent{
	/*  #ifdef  H5  */
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	/*  #endif  */
	/*  #ifdef  MP-WEIXIN || APP-PLUS  */
	height: 100vh;
	overflow-y: auto;
	flex: 1;
	display: flex;
	flex-direction: column;
	/*  #endif  */
	.box{
		flex: 1;
		overflow-y: auto;
		padding-bottom: 40upx;
	}
	.bot{
		height: 82upx;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #8A8A8A;
		display: flex;
		align-items: center;
		padding: 0 44upx;
		input{
			flex: 1;
			border: 1px solid #DADADA;
			border-radius: 16upx;
			margin-left: 20upx;
		}
	}
}
.box{
	background: rgba(241,241,241,0.50);
}
.top{
	.text{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #888888;
		padding-left: 28upx;
		padding-top: 8upx;
	}
	.info{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		.span{
			width: 14.28%;
			margin: 12upx 0;
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #888888;
			display: flex;
			align-items: center;
			justify-content: center;
			span{
				width: 54upx;
				height: 54upx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
			}
		}
		.on{
			span{
				background: #FDD003;
				color: #fff;
			}
			
		}
		.dark{
			span{
				background: #393939;
				color: #fff;
			}
			
		}
	}
	
}
.cen{
	background: #fff;
		.title{
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #8A8A8A;
			display: flex;
			align-items: center;
			margin: 0 50upx;
			padding: 38upx 0;
			.imgs{
				width: 72upx;
				height: 72upx;
				margin-right: 22upx;
			}
		}
		.uni-lists{
			border-top: 1px solid #DADADA;
		}
		.uni-list-cells{
			border-bottom: 1px solid #DADADA;
			.uni-list-cell-navigate{
				padding: 14upx 50upx;
			}
		}
	}
</style>
<style lang="scss">
#daka .uni-list-cell-navigate{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>