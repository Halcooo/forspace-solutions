@author Halid Lihovac
<template>
	<div class="nav-wrapper">
		<div class="nav-wrapper-flex">
			<div class="logo">
				<img
					alt="Forspace Solutions"
					src="@/assets/svg/logo.svg"
				/>
			</div>
			<div class="navigation">
				<ul class="nav-links">
					<Links :routes="routes_nav" />
				</ul>

				<CloseBtn :showSideNav="showSideNav" />
				<Sidenav
					:contents="contents"
					:showSideNav="showSideNav"
				/>
			</div>
		</div>
	</div>
</template>
<script>
	import Links from '@/components/NavigationTrack/NavigationLinks.vue';
	import { mapMutations, mapGetters } from 'vuex';

	import CloseBtn from './CloseButton.vue';
	import Sidenav from '../../components/NavigationTrack/Sidenav.vue';
	export default {
		name: 'Nav',
		components: { Links, CloseBtn, Sidenav },
		data() {
			return {
				contents: [
					{ id: 0, state: false },
					{ id: 1, state: false },
					{ id: 2, state: false },
					{ id: 3, state: false },
					{ id: 4, state: false },
				],
				routes_nav: [
					{
						to: '/',
						name: 'home',
						isActive: true,
						id: 0,

						classname: 'nav',
					},
					{
						to: '/about',
						name: 'about',
						isActive: false,
						id: 1,

						classname: 'nav',
					},
					{
						to: '/products',
						name: 'products',
						isActive: false,
						id: 2,

						classname: 'nav',
					},
					{
						to: '/services',
						name: 'services',
						isActive: false,
						id: 3,

						classname: 'nav',
					},
					{
						to: '/contact',
						name: 'contact',
						isActive: false,
						id: 4,

						classname: 'nav',
					},
				],
			};
		},
		methods: {
			...mapMutations(['setSideNav']),
			...mapGetters(['getSideNav']),

			showSideNav() {
				if (this.getSideNav()) {
					this.$store.state.sidecontent = false;
					this.setSideNav(false);
					this.contents.forEach((item) => {
						item.state = false;
					});
				} else {
					this.$store.state.sidecontent = true;

					this.setSideNav(true);
				}

				this.top && this.middle_none && this.bottom
					? ((this.top = false), (this.middle_none = false), (this.bottom = false))
					: ((this.top = true), (this.middle_none = true), (this.bottom = true));
			},
		},
	};
</script>
<style lang="scss">
	@import '../../styles/variables.scss';

	.nav-wrapper {
		position: fixed;

		margin: 0;
		padding: 20px;
		width: 100%;
		background-color: rgb(255, 255, 255);

		.nav-wrapper-flex {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
		}
	}

	.logo {
		width: 15%;
		&:hover {
			cursor: pointer;
		}
	}
	.navigation {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 200px;
	}
	.nav-links {
		display: flex;

		justify-content: space-around;
		gap: 50px;
		padding: 0;

		margin: 0;
	}

	@media screen and (max-width: 567px) {
		.logo {
			width: 40%;
		}
		.nav-links {
			display: none;
		}
	}
</style>
