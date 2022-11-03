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
			<div
				class="flex_column"
				v-if="content.id == 0"
			>
				<div class="row_1">
					<div class="row_1_home">
						<h1>
							{{ $t('home') }}
						</h1>
					</div>
				</div>
				<div class="row_2">
					<div
						class="row_nav"
						v-for="nav in navs"
						:key="nav"
					>
						<div class="row_nav_icon">
							<div
								class="icon"
								:class="nav.icon"
							></div>

							<h1>{{ $t(nav.row_heading) }}</h1>
							<p>{{ $t(nav.row_text) }}</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="onama"
				v-if="content.id == 1"
			>
				<div class="onama-heading">
					<h1>
						{{ $t('about') }}
					</h1>
				</div>
				<div class="onama-text">
					<p>
						{{ $t('about_text') }}
					</p>
				</div>
			</div>
			<div
				class="flex_column"
				v-if="content.id == 2"
			>
				<div class="row_1">
					<div class="row_1_home">
						<h1>
							{{ $t('home') }}
						</h1>
					</div>
				</div>
				<div class="row_2">
					<div
						class="row_nav"
						v-for="nav in navs"
						:key="nav"
					>
						<div class="row_nav_icon">
							<div
								class="icon"
								:class="nav.icon"
							></div>

							<h1>{{ $t(nav.row_heading) }}</h1>
							<p>{{ $t(nav.row_text) }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Links from './NavigationLinks.vue';

	import { mapGetters, mapMutations } from 'vuex';

	export default {
		name: 'Sidenav',
		components: { Links },
		props: ['contents'],
		data() {
			return {
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
	.flex_column {
		width: 100%;
		height: 100%;
		display: flex;

		flex-direction: column;

		.row_1 {
			width: 100%;
			height: 50vh;
			position: relative;
			z-index: 1;
			background: linear-gradient(
					to right,
					rgba(31, 46, 255, 0.473),
					#1e7ebe86,
					#003e9bc2
				),
				url('@/assets/images/cityscape.webp') no-repeat center center/cover;

			.row_1_home {
				border-radius: 5px;

				text-align: left;
				position: absolute;
				z-index: 1;
				left: 15%;
				bottom: 5%;
				h1 {
					color: white;
				}
			}
		}
		.row_2 {
			width: 100%;
			height: 50vh;
			display: flex;

			.row_nav {
				width: 100%;

				.row_nav_icon {
					width: 100%;
					height: 100%;
					padding-top: 30%;
					text-align: center;
					transition: 0.5s;
					.icon {
						display: flex;
						justify-content: center;
						margin: auto;
					}
					h1 {
						font-size: 25px;
						margin-top: 2%;
					}
					&:hover {
						background-color: cornflowerblue;
						cursor: pointer;

						h1,
						p {
							color: #fff;
						}
					}
				}
				.icon {
					width: 100px;
					height: 100px;
				}
				.icon-companies {
					background: url('@/assets/images/companies.png') no-repeat center
						center/cover;
				}
				.icon-cloud {
					background: url('@/assets/images/cloud.png') no-repeat center center/cover;
				}
				.icon-config {
					background: url('@/assets/images/config.png') no-repeat center center/cover;
				}
				.icon-circle {
					background: url('@/assets/images/circle.png') no-repeat center center/cover;
				}
			}
		}
	}
	.onama {
		width: 100%;
		height: 100%;

		.onama-heading {
			height: 50vh;

			font-size: 40px;
			background: linear-gradient(to right, #0051ff50, #1e7ebe86, #003e9bc2),
				url('@/assets/images/purchase-cover-image.png') no-repeat center
					center/cover;
			position: relative;
			h1 {
				position: absolute;
				color: white;
				bottom: 5%;
				left: 15%;
			}
		}
		.onama-text {
			padding: 30px 50px;
			p {
				color: gray;
				font-size: 22px;
			}
		}
	}
</style>
