@author Halid Lihovac
<template>
	<div class="nav-wrapper">
		<div class="nav-wrapper-flex">
			<div class="logo">
				<img
					alt="Forspace Solutions"
					src="@/assets/svg/logo_white.svg"
				/>
			</div>
			<div class="navigation">
				<ul class="nav-links">
					<Links :routes="routes_nav" />
				</ul>

				<CloseBtn />
			</div>
		</div>
	</div>
</template>
<script>
	import Links from '@/components/NavigationTrack/NavigationLinks.vue';
	import CloseBtn from './CloseButton.vue';
	export default {
		name: 'Nav',
		components: { Links, CloseBtn },
		data() {
			return {
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
	};
</script>
<style lang="scss">
	@import '../../styles/variables.scss';

	.nav-wrapper {
		position: fixed;
		z-index: 1;
		margin: 0;
		padding: 20px;
		width: 100%;
		background-color: rgba(255, 255, 255, 0);

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
</style>
