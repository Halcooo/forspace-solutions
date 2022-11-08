<template>
	<div class="button_device">
		<div>
			<p class="x-one"></p>
			<p class="x-two"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ClosingButton',
	};
</script>

<style lang="scss" scoped>
	.button_device {
		position: absolute;
		top: 2.5%;
		left: 80%;
		width: 40px;
		height: 40px;
		display: block;
		&:hover {
			cursor: pointer;
		}
		div {
			position: relative;
			width: 100%;
			height: 100%;
		}
		.x-one {
			width: 100%;
			padding: 1px;
			border-radius: 50%;
			background-color: orangered;
			transform: rotate(45deg);
			position: absolute;
			top: 50%;
			left: 0;
		}
		.x-two {
			width: 100%;
			padding: 1px;
			border-radius: 50%;
			background-color: orangered;
			transform: rotate(-45deg);
			position: absolute;
			top: 50%;
			left: 0;
		}
		@media screen and (max-width: 560px) {
			.sidenav-content {
				.button_device {
					left: 88%;
				}
			}
		}
	}
</style>
