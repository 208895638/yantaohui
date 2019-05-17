<template>
	<view>
		
		<view class="top" >
			<view @click="nowIndex = index" :class="nowIndex == index ? 'on' : ''" class="t per" v-for="(ite , index) in tabList" :key="index">
				{{ ite.title }}
			</view>
		</view>
		<view class="banner">
			<image :src="img1" mode="widthFix"></image>
		</view>
		<view class="top cen" >
			<view @click="menuIndex = index" :class="menuIndex == index ? 'on' : ''" class="t per" v-for="(ite , index) in menuList" :key="index">
				{{ ite.title }}
			</view>
		</view>
		<view class="line"></view>
		<view class="menuInfoList">
			<navigator class="per" v-for="(ite , index) in menuInfoList" :key="index" url="/yuanxiaoList/zhaoshengInfo/zhaoshengInfo">
				<span>{{ ite.title }}</span>
				<v-icon class="r" type="arrowright" size="30"></v-icon>
			</navigator>
			<view class="more">
				查看更多
			</view>
		</view>
		<view class="qun">
			<navigator :url="ite.url" class="per" v-for="(ite , index) in qunList" :key="index">
				<view class="l">
					<image :src="ite.img1" mode="widthFix"></image>
					<text class="t">{{ ite.name }}</text>
				</view>
				<view class="r">
					<view v-html="ite.other"></view>
					<v-icon class="b" type="arrowright" size="30"></v-icon>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import img1 from "@/static/img/yuanxiao/inquiry.png";
	import img2 from "@/static/img/yuanxiao/aixin.png";
	import img3 from "@/static/img/yuanxiao/msg.png";
	import q1 from "@/static/img/yuanxiao/mingshi1.png";
	import q2 from "@/static/img/yuanxiao/mingshi2.png";
	import q3 from "@/static/img/yuanxiao/mingshi3.png";
	export default {
		data() {
			return {
				imgSrc:"@/static/img/back.png",
				title:"院校",
				nowIndex:0,
				menuIndex:0,
				q1,
				q2,
				q3,
				img1,
				tabList:[
					{
						title:"中央美院"
					},
					{
						title:"中国美院"
					},
					{
						title:"清华美院"
					},
				],
				menuList:[
					{
						title:"招生信息"
					},
					{
						title:"专业介绍"
					},
					{
						title:"复试调剂"
					},
					{
						title:"学校论坛"
					}
				],
				menuInfoList:[
					{
						title:"2019年中央美术学院硕士研究生招生简章",
						url:""
					},
					{
						title:"2019年中央美术学院硕士研究生招生简章",
						url:""
					},
					{
						title:"2019年中央美术学院硕士研究生招生简章",
						url:""
					},
					
				],
				qunList:[
					{
						img1:img2,
						name:"分数线",
						other:'近五年分数线',
						url:"/yuanxiaoList/lines/lines"
					},
					{
						img1:img3,
						name:"讨论组(61)",
						other:'',
						url:"/yuanxiaoList/qun/qun"
					},
					{
						img1:img2,
						name:"报录比",
						other:'近五年报录比',
						url:"/yuanxiaoList/baolubi/baolubi"
					},
					{
						img1:img3,
						name:"名师指导",
						other:'',
						url:""
					},
				]
			};
		},
		created(){
			let imgs = `<image :src="${q1}" mode="widthFix"></image>
			<image :src="${q2}" mode="widthFix"></image>
			<image :src="${q3}" mode="widthFix"></image>`;
			this.qunList[1].other = imgs;
			this.qunList[3].other = imgs;
		}
	}
</script>

<style lang="scss" scoped>
.top{
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: PingFangSC-Regular;
	font-size: 36upx;
	color: #8A8A8A;
	padding: 32upx 0;
	.per{
		width: 33.33%;
		border-right:2upx solid #DADADA;
		text-align: center;
	}
	.per:last-child{
		border: none;
	}
	.on{
		color: #000000;
	}
}
.cen{
	.per{
		width: 25%;
		border: none;
		border-bottom: 8upx solid transparent;
	}
	.on{
		border-bottom: 8upx solid #FDCF02;
	}
}
.banner{
	display: flex;
	align-items: center;
	justify-content: center;
	image{
		width: 684upx;
		height: 308upx;
	}
}
.line{
	width: 100%;
	height: 4upx;
	background: #DADADA;
	position: relative;
	z-index: -1;
	margin-top: -32upx;
}
.menuInfoList{
	display: flex;
	flex-direction: column;
	padding-left: 30upx;
	border-bottom: 26upx solid #F0F0F0;
	.per{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16upx 0;
		font-family: PingFangSC-Regular;
		font-size: 30upx;
		color: #454242;
		border-bottom: 4upx solid #DADADA;
		.r{
			margin-right: 30upx;
		}
	}
	.more{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #8A8A8A;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 18upx 0;
	}
}
.qun{
	padding-left: 32upx;
	.per{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #000000;
		border-bottom: 4upx solid #DADADA;
		padding: 30upx 0;
		.l{
			display: flex;
			align-items: center;
			image{
				width:54upx ;
				height: 54upx!important;
				margin-right: 40upx;
			}
			.t{
				flex: 1;
			}
		}
		.r{
			display: flex;
			align-items: center;
			color: #8A8A8A;
			.b{
				margin-right: 30upx;
			}
		}
	}
}
</style>
