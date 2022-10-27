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

			<ul class="nav-links">
				<Links />
			</ul>
		</div>
	</div>
</template>
<script>
	import Links from '@/components/NavigationLinks.vue';
	export default {
		name: 'Nav',
		components: { Links },
	};
</script>
<style lang="scss" scoped>
	@import '../styles/variables.scss';

	.nav-wrapper {
		position: fixed;
		z-index: 0;
		width: 100%;

		.nav-wrapper-flex {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			padding: 26px 200px 26px 36px;
			position: relative;
			box-sizing: border-box;
		}
	}

	.nav-links {
		display: flex;
		gap: 30px;
	}
</style>
