<template>
	<div class="sidenav">
		<div
			class="sidenav-content"
			:class="{ sidenav_content_visible: getSideNav }"
			@mouseover="displaySidenav"
		>
			<ul class="nav-links-vertical">
				<Links />
			</ul>
		</div>
		<div class="grid-container"></div>
	</div>
</template>

<script>
	import Links from './NavigationLinks.vue';
	import { mapGetters } from 'vuex';
	export default {
		name: 'Sidenav',
		components: { Links },

		data() {
			return {
				sidenav: this.$store.state.sidenav,
			};
		},
		methods: {},

		computed: {
			...mapGetters(['getSideNav']),
		},

		mounted() {
			console.log(this.sidenav);
		},
	};
</script>

<style lang="scss" scoped>
	.sidenav {
		position: fixed;
		width: 100%;
		height: 100vh;

		display: flex;
	}
	// display mora biti flex

	.sidenav-content {
		position: fixed;
		z-index: 5;
		display: flex;

		justify-content: left;
		align-items: center;
		margin: auto;
		top: 0%;
		right: -40%;
		width: 20%;
		height: 100vh;
		background-color: rgb(158, 158, 158);
	}
	.sidenav_content_visible {
		right: 0%;
	}
	.grid-container {
		background-color: white;
		position: fixed;
		z-index: 8;
		top: 0;
		left: -80%;
		width: 80%;
		height: 100vh;
		transition: 0.4s;
		// border-right: 3px solid rgba(255, 166, 0, 0.315);
		.times {
			display: flex;
			justify-content: right;
			margin: 20px;
			font-size: 30px;
			color: rgb(255, 102, 0);
		}

		.d-grid {
			width: 500px;
			height: 500px;
			background-color: red;
		}
	}

	.nav-links-vertical {
		display: flex;
		flex-direction: column;
		line-height: 4rem;
	}
	@keyframes gridShow {
		from {
			left: -80%;
		}
		to {
			left: 0%;
		}
	}
	@keyframes hideGridShow {
		from {
			left: 0%;
		}
		to {
			left: -80%;
		}
	}
</style>
