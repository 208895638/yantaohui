<template>
	<view id="xuetang">
		<!--  #ifdef  H5 -->
		<!-- <block></block> -->
		<headers :imgSrc="imgSrc" :classs="'on'" :title="title"></headers>
		<!--  #endif -->
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="index" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box xt" duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in tabBars" :key="index1">
				<scroll-view class="list" scroll-y scroll-left="0">
					<image :src="tab.banner" class="ban" mode="widthFix"></image>
					<view class="tops">
						<view :class="ite.id == nowIndex ? 'on' : ''" 
						class="per" v-for="(ite,in4) in tab.titles" 
						:key="in4"
						@click="nowIndex = ite.id">
						{{ ite.title }}
						</view>
					</view>
					<view class="bot">
						<view v-show="(in5 + 1) == nowIndex" v-for="(ites,in5) in tab.content" :key="in5">
							<view  class="botList" v-for="(itess,in6) in ites.list" :key="in6">
								<image :src="itess.url" mode="widthFix"></image>
							</view>
						</view>
					</view>
					<!-- <view class="ls">
						
						<view class="info"  v-for="(newsitem,index2) in tab.content" :key="index2">
							<view class="infos"  v-for="(ele , in3) in newsitem.list" :key="in3">
								<image :src="ele.url" ></image>
							</view>
						</view>
						
					</view> -->
					<!-- <view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="tab.loadingType" :contentText="loadingText"></uni-load-more>
					</view> -->
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import img1 from "@/static/img/home/xuetang/school1.png"
import img2 from "@/static/img/home/xuetang/school2.png"
import img3 from "@/static/img/home/xuetang/school3.png"
import img4 from "@/static/img/home/xuetang/school4.png"
	export default {
		data() {
			return {
				imgSrc:"@/static/img/back.png",
				title:"学堂",
				scrollLeft: 0,
				nowIndex: 1,
				tabIndex: 0,
				tabBars:[
					{
						name:"19考研",
						banner:img1,
						titles:[
							{
								title:"手绘",
								id:1,
								cur:1,
							},
							{
								title:"理论",
								id:2,
								cur:1,
							}
						],
						content:[
							{
								
								list:[
									{
										url:img2
									},
									{
										url:img3
									},
									{
										url:img4
									},
								]
							},
							{
								
								list:[
									{
										url:img3
									},
									{
										url:img2
									},
									{
										url:img4
									},
								]
							},
						]
					},
					{
						name:"20考研",
						banner:img1,
						titles:[
							{
								title:"手绘1",
								id:1,
								cur:1,
							},
							{
								title:"理论1",
								id:2,
								cur:1,
							}
						],
						content:[
							{
								
								list:[
									{
										url:img2
									},
									{
										url:img3
									},
									{
										url:img4
									},
								]
							},
							{
								
								list:[
									{
										url:img3
									},
									{
										url:img2
									},
									{
										url:img4
									},
								]
							},
						]
					},{
						name:"21考研",
						banner:img1,
						titles:[
							{
								title:"手绘2",
								id:1,
								cur:1,
							},
							{
								title:"理论2",
								id:2,
								cur:1,
							}
						],
						content:[
							{
								
								list:[
									{
										url:img2
									},
									{
										url:img3
									},
									{
										url:img4
									},
								]
							},
							{
								
								list:[
									{
										url:img3
									},
									{
										url:img2
									},
									{
										url:img4
									},
								]
							},
						]
					},{
						name:"22考研",
						banner:img1,
						titles:[
							{
								title:"手绘3",
								id:1,
								cur:1,
							},
							{
								title:"理论3",
								id:2,
								cur:1,
							}
						],
						content:[
							{
								
								list:[
									{
										url:img2
									},
									{
										url:img3
									},
									{
										url:img4
									},
								]
							},
							{
								
								list:[
									{
										url:img3
									},
									{
										url:img2
									},
									{
										url:img4
									},
								]
							},
						]
					}
				]
			};
		},
		methods:{
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			tapTab(a){
				this.tabIndex = a;
			},
			changeTab(a){
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.tabIndex = a.target.current;
				if(this.tabIndex > 2){
					this.scrollLeft = (this.tabIndex - 2)*(winWidth/3)
				}else{
					this.scrollLeft = 0;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
#xuetang{
	height: 100%;
	
	display: flex;
	flex-direction: column;
}
.scroll-view_H{
	display: flex;
	align-items: center;
}
.active{
	color: #FDD003;
}
.xt{
	.list{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ban{
		width: 100%;
		height: 316upx!important;
		margin: 0 auto;
	}
	.ls{
		
	}
	.tops{
		display: flex;
		align-items: center;
		justify-content: center;
		.per{
			font-family: PingFangSC-Regular;
			font-size: 32upx;
			color: #000000;
			padding: 10upx 20upx;
			margin: 0 48upx;
			border-bottom: 8upx solid transparent;
		}
		.on{
			border-bottom: 8upx solid #FDD003;
		}
	}
	.bot{
		.botList{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		image{
			margin: 0 auto;
		}
	}
	.ls{
		.info{
			.infos{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			image{
				width: 682upx;
				height:316upx;
			}
		}
	}
}
</style>
<style>
page {
	height: 100%;
}
</style>
