<template>
	<div>
		<div
			class="times-head"
			@click="showSideNav"
		>
			<p class="times-line"></p>
			<p class="times-line middle"></p>
			<p class="times-line"></p>
		</div>
	</div>
</template>

<script>
	import Sidenav from './Sidenav.vue';
	export default {
		name: 'CloseBtn',
		props: {
			showSideNav: { type: Function },
		},
		data() {
			return {};
		},
		components: { Sidenav },
		methods: {},

		computed: {},
	};
</script>

<style lang="scss" scoped>
	.times-head {
		padding: 3px 5px;
		width: 50px;
		height: 50px;
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
		&:hover {
			cursor: pointer;
		}
		border-radius: 50%;
		.times-line {
			width: 80%;
			margin: 4px auto;

			background-color: gray;
			padding: 1px 4px;
			transition: all 0.5s;
		}

		.middle {
			width: 40%;
			margin-left: auto;
			margin-right: 5px;
		}
	}
</style>
