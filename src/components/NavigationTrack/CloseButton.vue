<template>
	<div>
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
		<Sidenav />
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	import Sidenav from './Sidenav.vue';
	export default {
		name: 'CloseBtn',
		data() {
			return {
				top: false,
				middle_none: false,
				bottom: false,
				contentState: false,
			};
		},
		components: { Sidenav },
		methods: {
			...mapMutations(['setSideNav']),
			...mapGetters(['getSideNav']),
			...mapMutations(['setSideContent']),
			...mapGetters(['getSideContent']),
			showSideNav() {
				if (this.getSideNav()) {
					this.$store.state.grid_a = false;
					this.$store.state.grid_b = false;
					this.$store.state.grid_c = false;
					this.$store.state.grid_d = false;
					this.$store.state.grid_e = false;
					this.setSideNav(false);
				} else {
					this.setSideNav(true);
				}

				this.top && this.middle_none && this.bottom
					? ((this.top = false), (this.middle_none = false), (this.bottom = false))
					: ((this.top = true), (this.middle_none = true), (this.bottom = true));
			},
		},

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
		position: relative;
		z-index: 4;
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
