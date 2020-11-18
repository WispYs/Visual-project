<template>
	<div class="management">
		<div class="management-title"
			@click="$router.push({
				name: 'index'
			})">
			<p class="management-title__time">{{currentTime}}</p>
		</div>
		<div class="management-container">
			<div class="management-container__top">
				<div class="management-container__top__item">
					<div class="top-info">
						<div class="top-info__item">
							<dl>
								<dt>
									<h4>2065</h4>
									<p>设备排查数</p>
								</dt>
								<dd>
									<span>设备排查率</span>
									<em>92%</em>
								</dd>
							</dl>
						</div>
						<div class="top-info__item">
							<dl>
								<dt>
									<h4>1503</h4>
									<p>设备修复数</p>
								</dt>
								<dd>
									<span>设备修复率</span>
									<em>67%</em>
								</dd>
							</dl>
						</div>
					</div>
					<div class="top-percent">
						<div class="item-title">
							<p>各车间产出占比</p>
						</div>
						<div id="pieChart" ref="pieChart" class="item-chart"></div>
					</div>
				</div>
				<div class="management-container__top__item center">
					<div class="equiment-container">
						<div class="equiment-title">
							<div class="equiment-title__item">
								<div>
									<img src="~images/info_icon6.png" alt="">
									<span>月用电量</span>
								</div>
								<p class="yellow">{{ equipmentBaseInfo.monthElectrical || 0 }}<em>kw</em></p>
							</div>
							<div class="equiment-title__item">
								<div>
									<img src="~images/info_icon7.png" alt="">
									<span>月用水量</span>
								</div>
								<p class="blue">{{ equipmentBaseInfo.monthWater || 0 }}<em>m³</em></p>
							</div>
							<div class="equiment-title__item">
								<div>
									<img src="~images/info_icon8.png" alt="">
									<span>月用气量</span>
								</div>
								<p class="red">{{ equipmentBaseInfo.monthAir || 0 }}<em>m³</em></p>
							</div>
						</div>
						<div class="equiment-content">
							<img src="~images/equipment2.png" alt="">
							<div class="equiment-content__dialog green">
								<h4>总运行时间</h4>
								<p>{{ equipmentBaseInfo.runTime || 0 }}小时</p>
							</div>
							<div class="equiment-content__dialog orange">
								<h4>KPI 指标</h4>
								<p>{{ equipmentBaseInfo.kpi || 0 }}</p>
							</div>
							<!-- <img class="earth" src="~images/earth.png" alt=""> -->
						</div>
					</div>
					
				</div>
				<div class="management-container__top__item">
					<div class="top-news">
						<div class="top-news__list">
							<ul
								:class="activeListIndex == 0? '': 'animate'"
								id="newsList" 
								:style="{ top: newsListTop }" 
								@mouseenter="scrollEnd()" 
								@mouseleave="scrollStart()">
								<li v-for="item in managementData.newsList"><em>{{item.title}}</em><span>{{item.time}}</span></li>
								<li v-if="activeListIndex > 0" v-for="item in managementData.newsList"><em>{{item.title}}</em><span>{{item.time}}</span></li>
							</ul>
						</div>
					</div>
					<div class="top-alarm">
						<div class="item-title">
							<p>公司风险评估</p>
						</div>
						<div class="top-alarm__wrapper">
							<div class="top-alarm__item">
								<div class="top-alarm__item__top">
									<div id="temperatureAlarm" ref="temperatureAlarm" class="top-alarm__item__chart"></div>
								</div>
								<div class="top-alarm__item__bottom">
									<div class="clearfix">
										<span>高高报警次数</span>
										<em><b>{{ managementData.alarm.t_time1 }}</b>次</em>
									</div>
									<div class="clearfix">
										<span>高报警次数</span>
										<em><b>{{ managementData.alarm.t_time2 }}</b>次</em>
									</div>
									<div class="clearfix">
										<span>低报警次数</span>
										<em><b>{{ managementData.alarm.t_time3 }}</b>次</em>
									</div>
								</div>
								
							</div>
							<img class="top-alarm__wrapper__bg" src="~images/manage_line_icon.png" alt="">
							<div class="top-alarm__item">
								<div class="top-alarm__item__top">
									<div id="pressureAlarm" ref="pressureAlarm" class="top-alarm__item__chart"></div>
								</div>
								<div class="top-alarm__item__bottom">
									<div class="clearfix">
										<span>高高报警次数</span>
										<em><b>{{ managementData.alarm.p_time1 }}</b>次</em>
									</div>
									<div class="clearfix">
										<span>高报警次数</span>
										<em><b>{{ managementData.alarm.p_time2 }}</b>次</em>
									</div>
									<div class="clearfix">
										<span>低报警次数</span>
										<em><b>{{ managementData.alarm.p_time3 }}</b>次</em>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="management-container__bottom">
				<div class="management-container__bottom__item">
					<div class="item-title">
						<p>设备用电量</p>
					</div>
					<div id="electricChart" ref="electricChart" class="item-chart"></div>
				</div>
				<div class="management-container__bottom__item">
					<div class="item-title">
						<p>年度营收走势</p>
					</div>
					<div id="revenueChart" ref="revenueChart" class="item-chart"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import rem 							from '@/services/rem';
	import format 					from '@/services/format';
	import api        			from '@/api/api';
	import managementData   from '@/mock-data/management-data';
	export default {
		data() {
			return {
				currentTime: '',
				activeListIndex: 0,
				managementData: managementData,
				newsScrollTimer: null,		// 新闻滚动定时器
				equipmentInfo: {},
				temperatureArr: [],			// 喷砂间房间温度
				humidityArr: [],				// 喷砂间房间湿度
				smokescopeArr: [],			// 喷漆间漆雾浓度
				inserTimeArr: [],				// 添加时间
				equipmentBaseInfo: {},		// 基本设备信息
			}
		},
		created() {
			this.getCurrentTime();
			this.newsScrollUp();
			
		},
		mounted() {
			this.__fetchEquipmentInfo().then(() => {
				// 等待数据更新后加载 ECharts 组件
	      this.drawLine();
			});
  		// this.$nextTick(() => {
	   //    this.drawLine();
	   //  });

			// 监听窗口变化重绘 EChart 组件
			window.addEventListener('resize', this.initEchart, true);

			// 定时请求接口数据
			// const dataTimer = setInterval(() => {
			// 	this.__fetchEquipmentInfo();
			// }, 5000);
			// this.$once('hook:beforeDestroy', () => {
			// 	clearInterval(dataTimer);
			// });
		},
		computed: {
			newsListTop() {
				return -this.activeListIndex * 0.3 + 'rem';
			}
		},
		methods: {
			// 获取设备信息
			__fetchEquipmentInfo() {
				return new Promise((resolve, reject) => {
					api.fetchEquipmentInfo()
          .then(rep => {

            let latestInfo = rep.data.slice(-1)[0],			// 取最新的设备信息			
            		equipmentBaseInfo = {
		            	monthElectrical: Math.round(latestInfo.psElectrical / 1000),
		            	monthWater: Math.round(latestInfo.psWater),
		            	monthAir: Math.round(latestInfo.psAir),
		            	runTime: (Number(latestInfo.psQsj1Runtime) / 3600).toFixed(2),
		            	kpi: Math.round(latestInfo.psKpi) + this.activeListIndex,
		            },																			// 设备基本信息
            		equipmentArr = rep.data.slice(-10);			// 设备段时间内数据信息

            this.equipmentBaseInfo = equipmentBaseInfo;
            // 获取最近的十条数据
            equipmentArr.forEach((it) => {
            	for(let key in it) {
            		if(key == 'psTt1') {
            			this.temperatureArr.push(Number(it[key]).toFixed(2));
            		}
            		if(key == 'psTh1') {
            			this.humidityArr.push(Number(it[key]).toFixed(2));
            		}
            		if(key == 'psCo2') {
            			this.smokescopeArr.push(Number(it[key]).toFixed(2));
            		}
            		if(key == 'psInsertime') {
            			this.inserTimeArr.push(it[key].split(' ')[0]);
            		}
            	}
            });
            resolve(rep);
            // `id`  '主键id',
					  // `psTt1` '喷砂间房间温度',
					  // `psTh1` '喷砂间房间湿度',
					  // `psCo2` '喷漆间漆雾浓度',
					  // `psPt1`  '喷砂间压缩空气压力',
					  // `psQsj1Runtime`  '1号去湿机运行时长',
					  // `psKpi`  'kpi指标',
					  // `psElectrical`  '月用电能耗',
					  // `psWater`  '月用水能耗',
					  // `psAir`  '月用气能耗',
					  // `psInsertime`  '添加时间',
          })
          .catch(err => this.$message.error('获取信息失败'))
				}) 
			},

			// ECharts 组件绘制
			drawLine () {
				// 车间收入产出占比
				let pieChart = this.$echarts.init(this.$refs.pieChart);
				// 温度报警
				let temperatureAlarm = this.$echarts.init(this.$refs.temperatureAlarm);
				// 压力报警
				let pressureAlarm = this.$echarts.init(this.$refs.pressureAlarm);
				// 用电量
				let electricChart = this.$echarts.init(this.$refs.electricChart);
				// 年度营收走势
				let revenueChart = this.$echarts.init(this.$refs.revenueChart);

				// 占比图
				// 处理数据
				let pieData = managementData.plantProduction.map((it) => {
					return {
						value: it.sum,
						name: it.plant
					}
				});
        pieChart.setOption({
			    color: ['#fd895b', '#fed130', '#27e9cb', '#1fb5fc', '#236bd7', '#9456fb', '#fc5659'],
			    textStyle: {
            fontSize: 14,
            fontWeight: 'bold'
	        },
			    series: [
		        {
	            name: '收入占比',
	            type: 'pie',
	            radius: ['40%', '55%'],
	            data: pieData,
       				emphasis: {
                label: {
                  show: true,
                  fontSize: '16',
	              	formatter:'{d}%',
                  fontWeight: 'bold'
                }
            	},
		        }
			    ]
        });
        // 温度报警
        let temperature = managementData.alarm.temperature;
        temperatureAlarm.setOption({
        	title: {
		        text: '温度报警指数',
		        x: 'center',
		        y: 'top', 
		        textStyle: {
			        color: '#ffffff',
			        fontSize: 14,
				    },
			    },
        	series: [
		        {
	            type: 'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	              show: false,
	              position: 'center',
	              formatter: '{d}%',
	              fontSize: '14',
	              fontWeight: 'bold'
	            },
	            emphasis: {
	                label: {
	                  show: true,
	                  fontSize: '16',
	                  fontWeight: 'bold'
	                }
	            },
	            labelLine: {
	              show: false
	            },
	            color: ['#fcb223', 'rgba(126, 130, 140, .5)'],
	            data: [
	              {
	              	value: temperature, 
	              	label:{
	                  normal:{
	                    show:true
	                  }
	                }
	              },
	              {
	              	value: 100 - temperature, 
	              	emphasis: {
		                label: {
	                    show: false,
		                }
			            },
	              }
	            ]
		        }
			    ]
        });
        // 压力报警
        let pressure = managementData.alarm.pressure;
        pressureAlarm.setOption({
    	  	title: {
		        text: '压力报警指数',
		        x: 'center',
		        y: 'top', 
		        textStyle: {
			        color: '#ffffff',
			        fontSize: 14,
			        
				    },
			    },
        	series: [
		        {
	            type: 'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	              show: false,
	              position: 'center',
	              formatter: '{d}%',
	              fontSize: '14',
	              fontWeight: 'bold'
	            },
	            emphasis: {
	                label: {
	                  show: true,
	                  fontSize: '16',
	                  fontWeight: 'bold'
	                }
	            },
	            labelLine: {
	              show: false
	            },
	            color: ['#fc5659', 'rgba(126, 130, 140, .5)'],
	            data: [
	              {
	              	value: pressure, 
	              	label:{
	                  normal:{
	                    show:true
	                  }
	                }
	              },
	              {
	              	value: 100 - pressure, 
	              	emphasis: {
		                label: {
	                    show: false,
		                }
			            },
	              }
	            ]
		        }
			    ]
        });
        // 用电量
        electricChart.setOption({
        	legend: {
        		right: '10%',
		        y: 'top',
        		textStyle : {
	            color: '#fff',
	            fontWeight: 'bold'
	        	},
        	},
        	tooltip: {},
	        textStyle: {
	          color: '#ffffff'
	        },
	        dataset: {
		        source: [
	            ['product', '2019', '2020'],
	            ['一月', 900, 1200],
	            ['二月', 1000, 1540],
	            ['三月', 850, 1350],
	            ['四月', 1200, 1865],
	            ['五月', 900, 1200],
	            ['六月', 820, 1000],
	            ['七月', 1420, 1560],
	            ['八月', 900, 1000],
	            ['九月', 700, 900],
	            ['十月', 1200, 1500],
	            ['十一月', 1020, 1650],
	            ['十二月', 860, 1000],
		        ]
			    },
	        xAxis: {
            type: 'category',
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
	        },
	        yAxis: {
            type: 'value',
            splitNumber: 5,
            textStyle: {
              color: '#ffffff',
              fontSize: 14
            },
	        },
	        grid:{
						top: "15%",
						left:"10%",
						width:"80%", //图例宽度
						height:"70%", //图例高度
					},
	        series: [
	        	{
	        		type: 'bar',
	        		color: '#fdb146'
	        	},
        		{
        			type: 'bar',
	        		color: '#3db6fc'
        		},
        	]
	      });
	      // 年度营收走势
	      revenueChart.setOption({
			    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
	            type: 'cross',
	            label: {
	              backgroundColor: '#6a7985'
	            }
		        },
		        textStyle: {
	            color: '#fff',
	            fontSize: 12,
	            fontWeight: 'bold'
		        },
			    },
			    color: ['#27e9cb', '#fc5659', '#3db6fc'],
			    legend: {
		        data: ['温度', '湿度', '浓度'],
		        textStyle : {
	            color: '#fff',
            	fontSize: 12,
	            fontWeight: 'bold'
	        	},
			    },
			    grid:{
						top: "15%",
						left:"10%",
						width:"80%", //图例宽度
						height:"70%", //图例高度
					},
			    xAxis: {
		        type: 'category',
		        axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
		        data: this.inserTimeArr
			    },
			    yAxis: {
		        type: 'value',
		        // 坐标轴的分割段数
		    		splitNumber: 2,
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
			    },
			    series: [
		        {
	            name: '温度',
	            type: 'line',
	            data: this.temperatureArr
		        },
		        {
	            name: '湿度',
	            type: 'line',
	            data: this.humidityArr
		        },
		        {
	            name: '浓度',
	            type: 'line',
	            data: this.smokescopeArr
		        },
			    ]
	      });
			},

			// ECharts 组件初始化
			initEchart() {
				let pieChart = this.$echarts.init(this.$refs.pieChart);
				let temperatureAlarm = this.$echarts.init(this.$refs.temperatureAlarm);
				let pressureAlarm = this.$echarts.init(this.$refs.pressureAlarm);
				let electricChart = this.$echarts.init(this.$refs.electricChart);
				let revenueChart = this.$echarts.init(this.$refs.revenueChart);

	      pieChart.resize();
				temperatureAlarm.resize();
				pressureAlarm.resize();
				electricChart.resize();
				revenueChart.resize();
			},

			// 时间定时器
			getCurrentTime() {
				const timer = setInterval(() => {
					this.currentTime = format.getDateTime(new Date().getTime());
				}, 1000);

				this.$once('hook:beforeDestroy', () => {
					clearInterval(timer);
				});
			},

			// 新闻资讯滚动
			newsScrollUp() {
				this.newsScrollTimer = setInterval(() => {
					// console.log(this.activeListIndex)
	        if (this.activeListIndex < this.managementData.newsList.length) {
	          this.activeListIndex += 1;
	        }else {
	        	setTimeout(() => {
	        		this.activeListIndex = 0;
	        	},500)
	        };
	      }, 3000);

	      this.$once('hook:beforeDestroy', () => {
	      	clearInterval(this.newsScrollTimer);
	      });
			},
			scrollEnd () {
	      clearInterval(this.newsScrollTimer);
	    },
	    scrollStart () {
	      this.newsScrollUp();
	    },
	    
	    
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.initEchart, true);
		}
	}
</script>
<style lang="scss" scoped>
	@import '~styles/adaptive';
	@import '~styles/pages/management';
</style>