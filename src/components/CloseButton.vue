<template>
	<div
		class="times-head"
		@click="showSideNav"
	>
		<p
			class="times-line"
			:class="{ top: top }"
		></p>
		<p
			class="times-line middle"
			:class="{ middle_none: middle_none }"
		></p>
		<p
			class="times-line"
			:class="{ bottom: bottom }"
		></p>
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		name: 'CloseBtn',
		data() {
			return {
				top: false,
				middle_none: false,
				bottom: false,
			};
		},

		methods: {
			...mapMutations(['setSideNav']),
			...mapGetters(['getSideNav']),

			showSideNav() {
				if (this.getSideNav()) {
					this.setSideNav(false);
				} else {
					this.setSideNav(true);
				}

				this.top && this.middle_none && this.bottom
					? ((this.top = false), (this.middle_none = false), (this.bottom = false))
					: ((this.top = true), (this.middle_none = true), (this.bottom = true));
			},
		},
	};
</script>

<style lang="scss" scoped>
	.times-head {
		padding: 3px 5px;
		width: 50px;
		height: 50px;
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 2.5%;
		z-index: 5;

		right: 2%;
		margin: -8px;
		margin-left: 180px;
		justify-content: center;
		align-items: center;
		&:hover {
			cursor: pointer;
		}
		border-radius: 50%;
		.times-line {
			width: 80%;
			margin: 4px auto;

			background-color: white;
			padding: 1px 4px;
		}
		.top {
			transform: translate(0%, 220%) rotate(45deg);
			transition: 0.5s;
			background-color: rgb(255, 102, 0);
		}

		.middle_none {
			display: none;
		}
		.bottom {
			transform: translate(0%, -220%) rotate(-45deg);
			transition: 0.5s;
			background-color: rgb(255, 102, 0);
		}
		.middle {
			width: 40%;
			margin-left: auto;
			margin-right: 5px;
		}
	}
</style>
