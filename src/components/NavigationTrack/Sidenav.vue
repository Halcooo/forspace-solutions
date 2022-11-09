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
			<div class="sidenav_times">
				<ClosingButton @click="showSideNav" />
			</div>
		</div>

		<div
			v-for="content in contents"
			:key="content"
			class="grid"
			:class="{ active: content.state }"
			v-if="this.$store.state.sidecontent"
		>
			<div v-if="content.id == 0">
				<HomeContent
					:navs="navs"
					:contentId="content.id"
					:removeSideNav="removeSideNav"
				/>
			</div>
			<div v-if="content.id == 1">
				<AboutContent
					:contentId="content.id"
					:removeSideNav="removeSideNav"
				/>
			</div>
			<div v-if="content.id == 2">
				<ProductContent
					:contentId="content.id"
					:removeSideNav="removeSideNav"
				/>
			</div>
			<div v-if="content.id == 3">
				<ServicesContent
					:contentId="content.id"
					:removeSideNav="removeSideNav"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	import Links from './NavigationLinks.vue';
	import HomeContent from './SidenavCompContent/HomeContent.vue';
	import AboutContent from './SidenavCompContent/AboutContent.vue';
	import ProductContent from './SidenavCompContent/ProductContent.vue';
	import ServicesContent from './SidenavCompContent/ServicesContent.vue';
	import ClosingButton from '../forms/buttons/ClosingButton.vue';

	export default {
		name: 'Sidenav',
		components: {
			Links,
			HomeContent,
			AboutContent,
			ProductContent,
			ServicesContent,
			ClosingButton,
		},
		props: {
			contents: { type: Array },
			showSideNav: { type: Function },
			removeSideNav: { type: Function },
		},
		data() {
			return {
				presentation: true,

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
		left: 100%;
		width: 100%;
		height: 100vh;
		display: flex;

		.sidenav-content {
			position: fixed;
			display: flex;
			justify-content: left;
			align-items: center;
			margin: auto;
			top: 0;
			right: 0;
			width: 0%;
			height: 100vh;
			background: rgb(4, 34, 116);
			transition: all 0.4s;
			a {
				color: gray;
				&:hover {
					border-bottom: none;
					color: gray;
				}
			}
		}

		.grid {
			position: fixed;
			z-index: 1;
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

		.sidenav_times {
			position: absolute;
			top: 2.5%;
			left: 80%;
			width: 35px;
			height: 35px;
		}
		@media screen and (min-width: 1500px) {
			.sidenav_content_visible {
				width: 17.5%;
			}
		}
		@media screen and (max-width: 1450px) {
			.sidenav_content_visible {
				width: 22.5%;
			}
		}
		@media screen and (max-width: 1400px) {
			.sidenav_content_visible {
				width: 27.5%;
			}
		}
		@media screen and (max-width: 1024px) {
			.sidenav_content_visible {
				width: 32.5%;
			}
		}
		@media screen and (max-width: 900px) {
			.sidenav_content_visible {
				width: 35.5%;
			}
		}
		@media screen and (max-width: 768px) {
			.sidenav_content_visible {
				width: 40.5%;
			}
		}
		@media screen and (max-width: 600px) {
			.sidenav_content_visible {
				width: 50.5%;
			}
		}

		@media screen and (max-width: 560px) {
			.grid {
				z-index: 3;
				left: -210%;
				width: 100%;
				height: 100vh;
				overflow-y: scroll;
			}

			.sidenav_content_visible {
				width: 100%;
			}

			z-index: 3;
			.sidenav-content {
				.button_device {
					left: 88%;
				}
			}
		}
	}

	@keyframes toLeft {
		from {
			left: -210%;
		}
		to {
			left: 0%;
		}
	}
</style>
