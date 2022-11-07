<template>
	<div class="sidenav">
		<div
			class="sidenav-content"
			:class="{ sidenav_content_visible: getSideNav }"
		>
			<ul class="nav-links-vertical">
				<Links
					:sidenavRoutes="sidenav_routes"
					:contents="contents"
				/>
			</ul>
		</div>

		<div
			v-for="content in contents"
			:key="content"
			:class="[{ active: content.state }, content.class]"
			v-if="this.$store.state.sidecontent"
		>
			<div v-if="content.id == 0">
				<HomeContent :navs="navs" />
			</div>
			<div v-if="content.id == 1">
				<AboutContent />
			</div>
			<div v-if="content.id == 2">
				<ProductContent />
			</div>
		</div>
	</div>
</template>

<script>
	import Links from './NavigationLinks.vue';
	import HomeContent from './SidenavCompContent/HomeContent.vue';
	import AboutContent from './SidenavCompContent/AboutContent.vue';
	import ProductContent from './SidenavCompContent/ProductContent.vue';
	import { mapGetters, mapMutations } from 'vuex';
	import BaseButton from '../forms/buttons/BaseButton.vue';

	export default {
		name: 'Sidenav',
		components: { Links, BaseButton, HomeContent, AboutContent, ProductContent },
		props: ['contents'],
		data() {
			return {
				presentation: true,
				routes: [
					{ class: 'grid-a', text: 'home' },
					{ class: 'grid-b', text: 'about' },
					{ class: 'grid-c', text: 'products' },
					{ class: 'grid-d', text: 'services' },
					{ class: 'grid-e', text: 'contact' },
				],
				navs: [
					{
						row_heading: 'home_icon_companies',
						row_text: 'home_icon_companies_p',
						icon: 'icon-companies',
					},
					{
						row_heading: 'home_icon_cloud',
						row_text: 'home_icon_cloud_p',
						icon: 'icon-cloud',
					},
					{
						row_heading: 'home_icon_config',
						row_text: 'home_icon_config_p',
						icon: 'icon-config',
					},
					{
						row_heading: 'home_icon_circle',
						row_text: 'home_icon_circle_p',
						icon: 'icon-circle',
					},
				],
				sidenav_routes: [
					{
						to: '/',
						name: 'home',
						isActive: true,
						id: 0,

						classname: 'sidenav',
					},
					{
						to: '/',
						name: 'about',
						isActive: false,
						id: 1,

						classname: 'sidenav',
					},
					{
						to: '/',
						name: 'products',
						isActive: false,
						id: 2,

						classname: 'sidenav',
					},
					{
						to: '/',
						name: 'services',
						isActive: false,
						id: 3,

						classname: 'sidenav',
					},
					{
						to: '/',
						name: 'contact',
						isActive: false,
						id: 4,

						classname: 'sidenav',
					},
				],
			};
		},
		methods: {},

		computed: {
			...mapGetters(['getSideNav']),
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.sidenav {
		position: fixed;
		top: 0;
		right: -100%;
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
			background-color: white;
			transition: all 0.4s;
			a {
				color: gray;
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
		background-color: white;
		top: 0;
		left: -83%;
		width: 83%;
		height: 100vh;
	}

	.active {
		animation: toLeft 0.2s forwards;
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
	@keyframes toLeft {
		from {
			left: -83%;
		}
		to {
			left: 0%;
		}
	}
</style>
