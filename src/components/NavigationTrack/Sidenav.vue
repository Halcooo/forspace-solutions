<template>
	<div class="sidenav">
		<div
			class="sidenav-content"
			:class="{ sidenav_content_visible: getSideNav }"
			@mouseover="displayContent"
		>
			<ul class="nav-links-vertical">
				<Links />
			</ul>
		</div>
		<div>
			<div
				class="grid_a"
				:class="{ active: this.$store.state.grid_a }"
			></div>
			<div
				class="grid_b"
				:class="{ active: this.$store.state.grid_b }"
			></div>
			<div
				class="grid_c"
				:class="{ active: this.$store.state.grid_c }"
			></div>
			<div
				class="grid_d"
				:class="{ active: this.$store.state.grid_d }"
			></div>
			<div
				class="grid_e"
				:class="{ active: this.$store.state.grid_e }"
			></div>
		</div>
	</div>
</template>

<script>
	import Links from './NavigationLinks.vue';

	import { mapGetters, mapMutations } from 'vuex';

	export default {
		name: 'Sidenav',
		components: { Links },

		data() {
			return {};
		},
		methods: {
			displayContent(e) {
				let active = e.target.classList;
				if (active.contains('grid-a')) {
					this.$store.state.grid_a = true;
					this.$store.state.grid_b = false;
					this.$store.state.grid_c = false;
					this.$store.state.grid_d = false;
					this.$store.state.grid_e = false;
				} else if (active.contains('grid-b')) {
					this.$store.state.grid_a = false;
					this.$store.state.grid_b = true;
					this.$store.state.grid_c = false;
					this.$store.state.grid_d = false;
					this.$store.state.grid_e = false;
				} else if (active.contains('grid-c')) {
					this.$store.state.grid_a = false;
					this.$store.state.grid_b = false;
					this.$store.state.grid_c = true;
					this.$store.state.grid_d = false;
					this.$store.state.grid_e = false;
				} else if (active.contains('grid-d')) {
					this.$store.state.grid_a = false;
					this.$store.state.grid_b = false;
					this.$store.state.grid_c = false;
					this.$store.state.grid_d = true;
					this.$store.state.grid_e = false;
				} else if (active.contains('grid-e')) {
					this.$store.state.grid_a = false;
					this.$store.state.grid_b = false;
					this.$store.state.grid_c = false;
					this.$store.state.grid_d = false;
					this.$store.state.grid_e = true;
				}
			},
		},

		computed: {
			...mapGetters(['getSideNav']),
		},
		mounted() {},
	};
</script>

<style lang="scss">
	.sidenav {
		position: fixed;

		width: 100%;
		height: 100vh;
		display: flex;

		.sidenav-content {
			position: fixed;
			display: flex;
			justify-content: left;
			align-items: center;
			margin: auto;
			top: 0%;
			right: 0%;
			width: 0%;
			height: 100vh;
			background-color: rgb(255, 255, 255);
			transition: all 0.4s;
			a {
				&:hover {
					border-bottom: none;
					color: gray;
				}
			}
		}
		.sidenav_content_visible {
			width: 17%;
		}
	}
	.grid_a,
	.grid_b,
	.grid_c,
	.grid_d,
	.grid_e {
		position: fixed;
		top: 0;
		left: 0;
		width: 0%;
		height: 100vh;
		transition: 0.5s;
	}
	.grid_a {
		background-color: white;
	}
	.grid_b {
		background-color: red;
	}
	.grid_c {
		background-color: cornflowerblue;
	}
	.grid_d {
		background-color: orange;
	}
	.grid_e {
		background-color: aqua;
	}

	.active {
		width: 83%;
		transition: width 0.5s;
	}
	.nav-links-vertical {
		display: flex;
		flex-direction: column;
		line-height: 4rem;
		li {
			text-align: left;
			a {
				color: gray;
				font-size: 23px;
			}
		}
	}
</style>
