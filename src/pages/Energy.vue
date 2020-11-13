<template>
	<div class="management">
		<canvas id="cylinder" ref="cylinder" width="200" height="600"></canvas>
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
				
			}
		},
		created() {

		},
		mounted() {
			this.draw();
		},
		
		methods: {
			draw() {
				let cylinder = this.$refs.cylinder;
				if(cylinder.getContext) {
					let	ctx = cylinder.getContext('2d');
						ctx.beginPath();
						ctx.ellipse(100,100,60,20,0,0,Math.PI*2);
            ctx.fillStyle="#001b54";
						ctx.strokeStyle="#3bf3f4";
						ctx.fill();
						ctx.stroke();
						ctx.moveTo(40, 100);
				    ctx.lineTo(40, 200);
				    ctx.lineTo(160, 200);
				    ctx.lineTo(160, 100);
				    ctx.fill();
				    ctx.ellipse(100,200,60,20,0,0,Math.PI*2);
				    ctx.fill();
						ctx.stroke();
						ctx.closePath();


				}else {
					// canvas-unsupported code here
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '~styles/adaptive';
	@import '~styles/pages/management';
</style>