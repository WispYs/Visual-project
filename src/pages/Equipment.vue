<template>
	<div class="equipment">
		<div class="equipment__wrapper">
			<div class="equipment__title"
				@click="$router.push({
					name: 'index'
				})">
				<!-- <h1>XX车间智能运维平台</h1> -->
			</div>
			<div class="equipment__top">
				<div class="equipment__top__item">
					<img class="background__img" src="~images/equip_border2.png" alt="">
					<div class="equipment__top__item__box">
						<h2>设备基本数据</h2>
            <!-- <div id="saleStatistics" class="item__chart"></div> -->
            <div class="item__infomode">
      				<ul style="margin-left: -20px">
      					<li>
                  <div class="info__tit">
                    <img src="~images/info_icon1.png" alt="">
                    <span>出口温度</span>
                  </div>
      						<h4>56℃</h4>
      					</li>
      					<li>
                  <div class="info__tit">
                    <img src="~images/info_icon2.png" alt="">
                    <span>出口湿度</span>
                  </div>
      						<h4>40℃</h4>
      					</li>
      					<li>
                  <div class="info__tit">
                    <img src="~images/info_icon3.png" alt="">
                    <span>制冷温度</span>
                  </div>
      						<h4>26℃</h4>
      					</li>
                <li>
                  <div class="info__tit">
                    <img src="~images/info_icon4.png" alt="">
                    <span>入风温度</span>
                  </div>
                  <h4>26℃</h4>
                </li>
                <li>
                  <div class="info__tit">
                    <img src="~images/info_icon5.png" alt="">
                    <span>入风湿度</span>
                  </div>
                  <h4>26℃</h4>
                </li>
      				</ul>
      			</div>
						<!-- <h2>每日销售趋势变化</h2> -->
            <div id="saleTendency" class="item__chart"></div>
						
					</div>
				</div>
				<div class="equipment__top__item main__item">
					<img src="~images/equipment2.png" alt="">
					
				</div>
				<div class="equipment__top__item">
					<img class="background__img" src="~images/equip_border2.png" alt="">
					<div class="equipment__top__item__box">
						<h2>设备开关信息</h2>
	            <div class="item__signal">
	              <ul>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>集控启动</span>
	                  <em>开启</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>设备运行</span>
	                  <em>开启</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>设备故障</span>
	                  <em>开启</em>
	                </li>
	                <li class="close">
	                  <div class="signal__icon"></div>
	                  <span>自动加热</span>
	                  <em>关闭</em>
	                </li>
	                <li class="close">
	                  <div class="signal__icon"></div>
	                  <span>自动除湿</span>
	                  <em>关闭</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>自动制冷</span>
	                  <em>开启</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>手动加热</span>
	                  <em>开启</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>手动除湿</span>
	                  <em>开启</em>
	                </li>
	                <li class="close">
	                  <div class="signal__icon"></div>
	                  <span>手动制冷</span>
	                  <em>关闭</em>
	                </li>
	                <li class="open">
	                  <div class="signal__icon"></div>
	                  <span>集控输入</span>
	                  <em>开启</em>
	                </li>
	              </ul>
	            </div>
						<!-- <h2>每日销售趋势变化</h2> -->
            <div id="typePieChart" class="item__chart"></div>
					</div>
				</div>
			</div>
			<div class="equipment__bottom">
				<div class="equipment__bottom__item">
					<img class="background__img" src="~images/equip_border3.png" alt="">
					<div class="equipment__bottom__item__box">
						<h2>设备信息</h2>
            <div id="lineChart" class="item__chart1"></div>
					</div>
				</div>
				<div class="equipment__bottom__item">
					<img class="background__img" src="~images/equip_border3.png" alt="">
					<div class="equipment__bottom__item__box">
						<h2>设备计量表</h2>
						<div class="charts2__box">
							<div id="temperatureChart" class="item__chart2"></div>
	            <div id="humidityChart" class="item__chart2"></div>
	            <div id="pressureChart" class="item__chart2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import rem from '@/services/rem';

	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// let saleStatistics = this.$echarts.init(document.getElementById('saleStatistics'));
				let saleTendency = this.$echarts.init(document.getElementById('saleTendency'));
				// let typeStatistics = this.$echarts.init(document.getElementById('typeStatistics'));
				let typePieChart = this.$echarts.init(document.getElementById('typePieChart'));
				let lineChart = this.$echarts.init(document.getElementById('lineChart'));
				let temperatureChart = this.$echarts.init(document.getElementById('temperatureChart'));
				let humidityChart = this.$echarts.init(document.getElementById('humidityChart'));
				let pressureChart = this.$echarts.init(document.getElementById('pressureChart'));
				// 散点图
        // saleStatistics.setOption({
       //    xAxis: {
       //    	//去除网格线
       //    	splitLine: {
       //    		show: false
       //    	},				
       //    	axisLine: {
       //        lineStyle: {
       //            color: '#fff'
       //        }
       //      },
       //      axisLabel: {
       //          color: '#fff'
       //      },
       //    },
			    // yAxis: {
			    // 	// 坐标轴的分割段数
			    // 	splitNumber: 2,
			    // 	splitLine: {
       //    		show: false
       //    	},	
			    // 	axisLine: {
       //          lineStyle: {
       //              color: '#fff'
       //          }
       //      },
       //      axisLabel: {
       //          color: '#fff'
       //      },
			    // },
			    // series: [{
		     //    symbolSize: 10,
		     //    data: [
		     //        [10.0, 8.04],[8.0, 6.95],[13.0, 7.58],[9.0, 8.81],
		     //        [11.0, 8.33],[14.0, 9.96],[6.0, 7.24],[4.0, 4.26],
		     //        [12.0, 10.84],[7.0, 4.82],[5.0, 5.68]
		     //    ],
		     //    color: '#20a0ff',
		     //    type: 'scatter'
			    // }]
        // });
        // 堆叠区域图
        saleTendency.setOption({
			    tooltip: {
		        // trigger: 'axis',
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
			    color: ['#ff4949', '#67c23a', '#20a0ff', '#f7ba2a', '#DC143C'],
			    legend: {
		        data: ['出口温度', '出口湿度', '制冷温度', '入风温度', '入风湿度'],
		        textStyle: {
	            color: '#fff',
	            fontSize: 10,
		        },
		        top: 10,
			    },
			    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
			    },
			    xAxis: [
		        {
	            type: 'category',
	            boundaryGap: false,
	            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	            axisLine: {
                lineStyle: {
                  color: '#fff'
                }
	            },
		        }
			    ],
			    yAxis: [
		        {
	            type: 'value',
	            // 坐标轴的分割段数
			    		splitNumber: 2,
	            axisLine: {
                lineStyle: {
                  color: '#fff'
                }
	            },
		        }
			    ],
			    series: [
		        {
	            name: '出口温度',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [43, 32, 42, 76, 86, 96, 50]
		        },
		        {
	            name: '出口湿度',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [12, 42, 33, 52, 23, 32, 12]
		        },
		        {
	            name: '制冷温度',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [54, 23, 42, 43, 45, 65, 65]
		        },
		        {
	            name: '入风温度',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [22, 33, 44, 53, 12, 32, 23]
		        },
		        {
	            name: '入风湿度',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [11, 21, 32, 52, 32, 23, 13]
		        }
			    ]
        });
        // 柱状图
        // typeStatistics.setOption({
        //   tooltip: {},
	       //  xAxis: {
	       //    data: ["一月","二月","三月","四月","五月","六月"],
	       //    axisLine: {
        //       lineStyle: {
        //         color: '#fff'
        //       }
        //     },
	       //  },
	       //  yAxis: {
		    		// splitNumber: 2,
	       //  	axisLine: {
        //       lineStyle: {
        //         color: '#fff'
        //       }
        //     },
	       //  },
	       //  series: [{
	       //    name: '销量',
	       //    type: 'bar',
	       //    color: '#58b7ff',
	       //    data: [5, 20, 53, 30, 10, 20]
	       //  }]
        // });
        // 饼状图
        typePieChart.setOption({
          series: [
		        {
	            type: 'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	              show: false,
	              position: 'center',
	              formatter:'{d}%',
	              fontSize: '12',
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
	            color: ['#24CBFF', '#0860a2'],
	            data: [
	              {
	              	value: 1335,
	              	label:{
	                  normal:{
	                    show:true
	                  }
	                }
	              },
	              {
	              	value: 748,
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
        // 折线图
        lineChart.setOption({
	        xAxis: {
	          type: 'category',
	          data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
	          axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },

	        },
	        yAxis: {
	          type: 'value',
		    		splitNumber: 2,
	          axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
	        },
	        color: '#58b7ff',
	        series: [{
	          data: [230, 400, 500, 934, 1090, 1230, 1340],
	          type: 'line'
	        }]
	      });
	      // 计量表图
	      var gaugeOption = {
	        series: [
	          {
	            name: '业务指标',
	            type: 'gauge',
	            axisLine: {            // 坐标轴线
	              lineStyle: {       // 属性lineStyle控制线条样式
	                width: 5,
	                color : [ //表盘颜色
	                  [ 0.5, "#20AE51" ],//0-50%处的颜色
	                  [ 0.7, "#FFED44" ],//51%-70%处的颜色
	                  [ 0.9, "#FF9618" ],//70%-90%处的颜色
	                  [ 1,"#DA462C" ]//90%-100%处的颜色
	                 ],
                 	shadowBlur: 15,             //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。 
                	shadowColor: "#fff",        //阴影颜色。支持的格式同color。
	              }
	            },
	            axisTick: {            // 坐标轴小标记
	              length: 3,        // 属性length控制线长
	              lineStyle: {       // 属性lineStyle控制线条样式
	                  color: '#fff'
	              }
	            },
	            splitNumber: 10,   	// 仪表盘刻度的分割段数,默认 10。
	            splitLine: {           // 分隔线
	              length: 10,         // 属性length控制线长
	              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                  color: '#fff',
	              }
	            },
	            pointer: {              // 仪表盘指针。
                show: true,             // 是否显示指针,默认 true。
                length: "60%",          // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                width: 5,               // 指针宽度,默认 8。
              },
              title: {                // 仪表盘标题。
                  show: true,             // 是否显示标题,默认 true。
                  offsetCenter: [0,"-120%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                  color: "#fff",          // 文字的颜色,默认 #333。
                  fontSize: 12,           // 文字的字体大小,默认 15。
              },
	            detail: {
	              formatter: '{value}%',
	              fontWeight: 'bolder',
	              borderRadius: 3,
	              backgroundColor: '#444',
	              borderColor: '#aaa',
	              shadowBlur: 5,
	              shadowColor: '#333',
	              shadowOffsetX: 0,
	              shadowOffsetY: 3,
	              borderWidth: 2,
	              textBorderColor: '#000',
	              textBorderWidth: 2,
	              textShadowBlur: 2,
	              textShadowColor: '#fff',
	              textShadowOffsetX: 0,
	              textShadowOffsetY: 0,
	              fontFamily: 'Arial',
	              width: 20,
	              fontSize: 10,
	              color: '#eee',
	              rich: {}
	            },
	            data: [{value: 50, name: '温度'}]
	          }
	        ]
	      };
	      temperatureChart.setOption(gaugeOption);
	      humidityChart.setOption(gaugeOption);
	      pressureChart.setOption(gaugeOption);
	      setInterval(function () {
	        gaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
	        temperatureChart.setOption(gaugeOption, true);
	      },2000);  
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '~styles/mixins/clearfix';
	@import '~styles/adaptive';
	html,body {
		width: 100%;
		height: 100%;
	}
	.equipment {
		width: 100%;
		height: 100%;
		background: url(~images/blue_banner.jpg) no-repeat;
		background-size: cover;
		&__wrapper {
			width: 100%;
			height: 100%;
			background: url(~images/equip_frame.png) no-repeat;
			background-size: cover;
			z-index: 10;
		}
		&__title {
			height: 1rem;
			text-align: center;
			color: #fff;
			h1 {
				font-size: 28px;
				font-weight: normal;
			}
		}
		&__top {
			width: calc(100% - .8rem);
			height: 6.2rem;
			padding: .2rem .4rem;
			display: flex;
			justify-content: space-between;
			&__item {
				position: relative;
				padding-top: .2rem;
				width: 5.6rem;
				height: 6rem;
				&.main__item {
					flex-grow: 1;
					img {
						display: block;
						margin: 0 auto;
				    max-width: 100%;
    				max-height: 100%;
					}
				}
				&__box {
					position: relative;
					z-index: 1;
					width: 100%;
					height: 100%;
					h2 {
						text-align: center;
						color: #fff;
						font-size: 16px;
						line-height: .4rem;
					}
					.item__infomode {
						margin-top: 20px;
						ul {
						  width: 100%;
						  overflow: hidden;
						  li {
							  float: left;
							  width: 33%;
							  text-align: center;
							  margin-bottom: 8px;
							  h4 {
								  font-size: 20px;
								  color: #F8E730;
								  line-height: 40px;
								  padding-left: 44px;
								}
								.info__tit {
								  overflow: hidden;
								  display: flex;
								  justify-content: center;
								  align-items: center;
								  img {
									  width: 32px;
									  margin-right: 4px;
									}
									span {
									  font-size: 13px;
									  color: #fff;
									  line-height: 32px;
									}
								}
							}
						}
					}
					.item__signal {
						margin: 10px;
					  padding: 15px 20px;
					  overflow: hidden;
					  ul {
					  	overflow: hidden;
					  }
					  li {
						  float: left;
						  line-height: 30px;
						  font-size: 14px;
						  overflow: hidden;
						  margin-bottom: 4px;
						  margin-right: 40px;
	    				width: calc(50% - 20px);
    					text-align: center;
						  &:nth-of-type(2n) {
							  margin-right: 0;
							}
							&.open {
								.signal__icon{
							  	background: #7FFF00;
								}
								em {
								  color: #7FFF00;
								}
							}
							&.close {
								.signal__icon{
							  	background: #DC143C;
								}
								em {
								  color: #DC143C;
								}
							}
							.signal__icon {
							  display: inline-block;
							  width: 12px;
							  height: 12px;
							  border-radius: 50%;
							  margin-right: 5px;
							}
							span {
							  color: #fff;
							  margin-right: 5px;
							}
							em {
							  font-size: 12px;
							  font-style: normal;
							}
						}
					}
					.item__chart {
						width: 90%;
						height: 3rem;
						margin: 0 auto;
						&#saleStatistics,&#typeStatistics {
							height: 3rem;
							margin: -0.4rem auto -0.3rem;
						}
						&#typePieChart {
							height: 2.5rem;
						}
					}
				}
				.background__img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 0;
				}
			}
		}
		&__bottom {
			width: calc(100% - .8rem);
			height: 2.4rem;
			padding: .4rem;
			padding-top: 0;
			display: flex;
			justify-content: space-between;
			&__item {
				position: relative;
				padding-top: .2rem;
				width: 9rem;
				height: 2.2rem;
				&__box {
					position: relative;
					z-index: 1;
					width: 100%;
					height: 100%;
					h2 {
						text-align: center;
						color: #fff;
						font-size: 16px;
						line-height: .4rem;
					}
					.item__chart1 {
						width: 90%;
						height: 3rem;
						margin: 0 auto;
						&#lineChart {
							margin-top: -.7rem;
						}
					}
					.charts2__box {
						height: calc(100% - .4rem);
						overflow: hidden;
						display: flex;
						justify-content: space-around;
						.item__chart2 {
							width: 2.2rem;
							height: 2.2rem;
						}
					}
					
				}
				.background__img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 0;
				}
			}
		}
	}
</style>