<template>
	<div class="index" :style="{ left: isToggle?'-100px':'0' }">
		<div class="index__banner" :style="{height: autoHeight}">
      <div class="index__banner__container">
        <el-carousel :height="autoHeight" class="banner__swiper">
          <el-carousel-item>
            <img src="~images/jt1.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="~images/jt2.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="~images/jt3.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="~images/jt4.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="index__news">
      <div class="index__news__wrapper">
        <i class="ld_left"></i>
        <p class="ld_left">中船动力集团所属沪东重机有限公司和江苏扬子江船业集团公司签订了2+8台WinGD 7X52DF主机和LNG燃气供应系统建造合同</p>
      </div>
    </div>
    <div class="index__wrapper index__products">
      <div class="index__wrapper__title">
        <h2>产品</h2>
        <p>通过图表直观高效的展示数据</p>
      </div>
      <div class="index__wrapper__containers">
        <div class="containers__left">
          <div class="containers__item">
            <h4>可视化图表</h4>
            <p>"数据可视化"可以帮助用户理解数据，一直是热门方向。图表是"数据可视化"的常用手段，其中又以基本图表----柱状图、折线图、饼图等等----最为常用。</p>
            <div id="myChart1" ref="myChart1" class="chart__left"></div>
          </div>
        </div>
        <div class="containers__right">
          <div class="containers__item">
            <h4>数据源管理</h4>
            <div class="item__box">
              <p class="ld_left">"数据可视化"可以帮助用户理解数据，一直是热门方向。图表是"数据可视化"的常用手段，其中又以基本图表----柱状图、折线图、饼图等等----最为常用。</p>
              <div id="myChart2" ref="myChart2" class="chart__right ld_right"></div>
            </div>
            
          </div>
          <div class="containers__item">
            <h4>运维监控系统</h4>
            <div class="item__box">
              <p class="ld_left">"数据可视化"可以帮助用户理解数据，一直是热门方向。图表是"数据可视化"的常用手段，其中又以基本图表----柱状图、折线图、饼图等等----最为常用。</p>
              <div id="myChart3" ref="myChart3" style="width: 180px;height: 250px;margin-top: -40px" class="chart__right ld_right"></div>
            </div>
          </div>
          <div class="containers__item">
            <h4>云图管理</h4>
            <div class="item__box">
              <p class="ld_left">"数据可视化"可以帮助用户理解数据，一直是热门方向。图表是"数据可视化"的常用手段，其中又以基本图表----柱状图、折线图、饼图等等----最为常用。</p>
              <div id="myChart4" ref="myChart4" style="width: 180px;height: 250px;margin-top: -40px" class="chart__right ld_right"></div>
            </div>
          </div>
          <div class="containers__item">
            <h4>实时动态更新</h4>
           <div class="item__box">
              <p class="ld_left">"数据可视化"可以帮助用户理解数据，一直是热门方向。图表是"数据可视化"的常用手段，其中又以基本图表----柱状图、折线图、饼图等等----最为常用。</p>
              <div id="myChart5" ref="myChart5" class="chart__right ld_right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index__wrapper index__service">
      <div class="index__wrapper__title">
        <h2>技术服务</h2>
        <p>全方位高品质的项目开发服务 为企业智能化提速</p>
      </div>
      <div class="index__wrapper__containers">
        <ul>
          <li>
            <a target="_blank" href="#">
              <img src="~images/hyt1.png">
              <div>
                <img src="~images/jjfa1.png">
                <h4>生产智能化</h4>
                <p>全领域智能制造解决方案，打造智能工厂，助力工业4.0</p>
                <span>了解详情 &gt;&gt;</span>
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src="~images/hyt2.png">
              <div>
                <img src="~images/jjfa2.png">
                <h4>管理智能化</h4>
                <p>以SAP的智能化ERP系统为核心，帮助企业达成业务目标</p>
                <span>了解详情 &gt;&gt;</span>
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src="~/images/hyt3.png">
              <div>
                <img src="~/images/jjfa3.png">
                <h4>决策智能化</h4>
                <p>涵盖采集-处理-建模-可视化分析的全方位企业大数据方案</p>
                <span>了解详情 &gt;&gt;</span>
              </div>
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              <img src="~/images/hyt4.png">
              <div>
                <img src="~/images/jjfa4.png">
                <h4>设计智能化</h4>
                <p>以达索系统SolidWorks为核心 提供设计到制造一体化方案</p>
                <span>了解详情 &gt;&gt;</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="more__btn">查看更多</div>
      </div>
    </div>
    <div class="index__wrapper index__cases">
      <div class="index__wrapper__title">
        <h2>可视化案例</h2>
        <p>对海量丰富的数据内容进行清洗、计算、挖掘，得到具有专业价值的数据结果</p>
      </div>
      <div class="index__wrapper__containers">
        <ul>
          <li>
            <img src="~images/case1.png" alt="" />
            <h5>永辉超市借助腾讯云图数据可视化平台，在店里数据大屏每天会实时推送各类人气单品，同时也可以根据商圈实时热力等数据，告诉用户永辉门店到底是多么受欢迎。</h5>
            <p>时间：  2020年11月10日 14:00-15：00</p>
          </li>
          <li>
            <img src="~images/case2.png" alt="" />
            <h5>展示云计算服务的各种关键业务实时情况，通过不同图表体现任务总量，月度趋势变化，cpu和内存的利用率等指标。</h5>
            <p>时间：  2020年11月10日 14:00-15：00</p>
          </li>
          <li>
            <img src="~images/case3.png" alt="" />
            <h5>通过腾讯云图的大屏与地图，实时展现各个地域的水域质量与有害污染物的情况，整体变化一目了然。</h5>
            <p>时间：  2020年11月10日 14:00-15：00</p>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
  import EventHub from '@/services/event-hub';
  export default {
    // components: {
    //   SideNav,
    // },
    data() {
      return {
        autoHeight: '375px',
        isToggle: false
      }
    },
    created(){
      EventHub.$on('isToggle',data => {
        console.log(data);
        this.isToggle = data;
      })
    },
    mounted() {
      this.drawLine();
      this.setAutoHeight();
      window.addEventListener('resize', () => {
        this.setAutoHeight();
      }, false)
    },
    methods: {
      setAutoHeight() {
        // banner像素 1600:375
        let _w = document.documentElement.clientWidth || document.body.clientWidth;
        if (_w >= 1200) this.autoHeight = (_w * 375) / 1600 + "px";
        
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(this.$refs.myChart1);
        let myChart2 = this.$echarts.init(this.$refs.myChart2);
        let myChart3 = this.$echarts.init(this.$refs.myChart3);
        let myChart4 = this.$echarts.init(this.$refs.myChart4);
        let myChart5 = this.$echarts.init(this.$refs.myChart5);
        // 绘制图表
        myChart1.setOption({
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                color: '#155B9D',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        myChart2.setOption({
          series : [
            {
              name: '费用统计',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              color: ['#f7ba2a', '#e8e7e3', '#ff4949', '#67c23a', '#20a0ff'],

              data:[
                {value:235, name:'水费'},
                {value:274, name:'煤炭'},
                {value:310, name:'油费'},
                {value:335, name:'天然气'},
                {value:400, name:'电费'}
              ]
            }
          ]
        });
        myChart3.setOption({
          xAxis: {},
          yAxis: {},
          series: [{
              symbolSize: 5,
              data: [
                  [10.0, 8.04],
                  [8.0, 6.95],
                  [13.0, 7.58],
                  [9.0, 8.81],
                  [11.0, 8.33],
                  [14.0, 9.96],
                  [6.0, 7.24],
                  [4.0, 4.26],
                  [12.0, 10.84],
                  [7.0, 4.82],
                  [5.0, 5.68]
              ],
              color: '#155B9D',
              type: 'scatter'
          }]
        });
        myChart4.setOption({
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          color: '#155B9D',
          series: [{
              data: [230, 400, 500, 934, 1290, 1330, 1340],
              type: 'line'
          }]
        });
        var option5 = {
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                  width: 10,
                  color : [ //表盘颜色
                    [ 0.5, "#20AE51" ],//0-50%处的颜色
                    [ 0.7, "#FFED44" ],//51%-70%处的颜色
                    [ 0.9, "#FF9618" ],//70%-90%处的颜色
                    [ 1,"#DA462C" ]//90%-100%处的颜色
                   ],
                }
              },
              axisTick: {            // 坐标轴小标记
                length: 5,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                  color: '#fff'
                }
              },
              splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  color: '#fff'
                }
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
                width: 24,
                fontSize: 12,
                color: '#eee',
                rich: {}
              },
              data: [{value: 50, name: ''}]
            }
          ]
        };
        myChart5.setOption(option5);
        setInterval(function () {
          option5.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myChart5.setOption(option5, true);
        },2000);

      }
    }

  };
</script>

<style lang="scss" scoped>
  @import '~styles/base/variable';
  @import '~styles/mixins/clearfix';
  @import '~styles/pages/index';
  @import '~styles/adaptive';
  
</style>
