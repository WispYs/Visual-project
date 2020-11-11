<template>
  <div class="footer">
	  <div class="linkBox">
	    <div class="link">
	      <div class="linkTitle">友情链接</div>
	      <div class="link_list">   
	      	<a href="#" target="_blank">上海泷得自动化</a>     
	      	<a href="#" target="_blank">上海机械工业</a>     
	      	<a href="#" target="_blank">上海建材工业</a>     
	      	<a href="#" target="_blank">上海汽车工业</a>    
	      </div>
	    </div>
	  </div>
	  <div class="footBox">
	  	<div class="btnav">
			  <div class="btnavlist"> 
			  	<a href="/" title="网站首页">网站首页</a>　 |　 
					<a href="#" title="新闻动态">新闻动态</a>　 |　 
					<a href="#" title="产品展示">产品展示</a>　 |　 
					<a href="#" title="工程案例">工程案例</a>　 |　 
					<a href="#" title="科普知识">科普知识</a>　 |　 
					<a href="#" title="营销网络">营销网络</a>　 |　 
					<a href="#" title="关于我们">关于我们</a>　 |　 
				</div>
			</div>
			<div class="copyrightnr"> 
				<p class="">地址：上海泷得自动化有限公司　　电话：+86 13978659985　　QQ：80044685</p>
				<p>
					版权所有：上海泷得自动化有限公司 　　技术支持：<a href="#" target="_blank" title="">上海泷得自动化有限公司</a>　ICP备案编号：<a href="http://www.miitbeian.gov.cn/" target="_blank" title=" ICP备********号"> ICP备********号</a>
				</p>    
			 </div>
			<div class="footOne">
			  <ul class="share">
			    <li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=80044685&amp;site=qq&amp;menu=yes" class="list qq" target="blank">在线咨询</a></li>
			    <li class="shareDiv"><a href="javascript:void(0)" class="list qq2">分享网站</a>
			      <div class="shareList"> </div>
			    </li>
			  </ul>
			</div>
	  </div>
	</div>
</template>

<script>
  export default {
    
  };
</script>
<style lang="scss" scoped>
	@import '~styles/base/variable';
  @import '~styles/mixins/clearfix';
  /* footer*/
	.footer {
		width: 100%;
		background: #404040;
		.linkBox {
			width: 100%;
			height: 42px;
			min-height: 42px;
			border-top: 1px solid #d2d2d2;
			background: #ffffff;
			.link {
				position: relative;
				max-width: 1200px;
				height: 42px;
				min-height: 42px;
				margin: 0px auto;
			}
			.linkTitle {
				float: left;
				position: relative;
				width: 84px;
				height: 42px;
				color: #004384;
				font-size: 14px;
				line-height: 42px;
				font-weight: bold;
			}
			.link_list {
				float: left;
				width: calc(100% - 84px);
				height: auto!important;
				a {
					float: left;
					display: inline-block;
					padding-right: 40px;
					color: #565656;
					font-size: 14px;
					line-height: 42px;
				}
				a:hover {
					color: #000000;
				}
			}
		}
		.footBox {
			max-width: 1200px;
			margin: 0 auto;
		}
		.copyrightnr {
			width: 100%;
			margin: 0 auto;
			color: #bababa;
			font-size: 12px;
			line-height: 24px;
			text-align: left;
			a {
				color: #bababa
			}
			a:hover {
				color: #ffffff
			}
		}
		.btnav {
			padding-top: 14px;
			.btnavlist {
				position: relative;
				width: 100%;
				height: 46px;
				margin: 0 auto;
				color: #525252;
				a {
					display: inline-block;
					color: #ffffff;
					font-size: 14px;
					line-height: 46px;
				}
			}
		}
		.footOne {
			width: 100%;
			height: 60px;
			padding-top: 15px;
			margin: 0 auto;
			.share {
				float: left;
				width: 300px;
				li {
					position: relative;
					float: left;
					width: 150px;
					height: 40px;
				}
				.list {
					width: 102px;
					height: 40px;
					line-height: 40px;
					padding-left: 48px;
					display: block;
					color: #bababa;
				}
				.qq {
					background: url(~images/qq.png) left top no-repeat;
					background-size: contain;
				}
				.qq2 {
					background: url(~images/share.png) left top no-repeat;
					background-size: contain;
				}
				a.list:hover {
					color: #fff;
				}
			}
			.shareList {
				position: absolute;
				left: 30px;
				top: 35px;
				z-index: 99;
				display: none;
				width: 200px;
				a {
					display: inline;
				}
			}
		}
	}
	
  @import '~styles/adaptive';
</style>
