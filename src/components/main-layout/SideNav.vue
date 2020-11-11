<template>
	<div :class="isToggle ? 'sidenav open' : 'sidenav'">
		<ul>
			<li
				@click="$router.go(0)">首页
			</li>
			<li
				@click="$router.push({
					name: 'equipment'
				})">设备运行
			</li>
			<li
				@click="$router.push({
					name: 'management'
				})">设备管理
			</li>
			<li>能源监控</li>
			<li>视频监控</li>
			<li>生产管理</li>
			<li>系统维护</li>
		</ul>
	</div>
</template>
<script>
  import EventHub from '@/services/event-hub';
	export default {
		data() {
			return {
				isToggle: false
			}
		},
		created(){
      EventHub.$on('isToggle',data => {
        this.isToggle = data;
      })
    },
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
  @import '~styles/base/variable';

	.sidenav {
		position: fixed;
		top: 88px;
		right: -100px;
		width: 100px;
		transition: all .5s;
		&.open {
			right: -0;
		}
		li {
			font-size: 14px;
			height: 46px;
			line-height: 46px;
			text-align: center;
			color: #333;
			border-top: 1px solid #999;
			cursor: pointer;
			&:hover {
				color: #fff;
				background: $blue-dark;
			}
		}
	}
</style>