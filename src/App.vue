//@author Halid Lihovac
<template>
	<NavigationBar />
	<router-view />
	<BaseScrollToTop />
	<TheFooter />
</template>
<script>
	import NavigationBar from '@/components/NavigationTrack/NavigationBar.vue';
	import TheFooter from '@/components/TheFooter.vue';
	import Sidenav from '@/components/NavigationTrack/Sidenav.vue';
	import BaseScrollToTop from './components/BaseScrollToTop.vue';

	export default {
		components: {
			NavigationBar,
			TheFooter,
			Sidenav,
			BaseScrollToTop,
		},
		data() {
			return {};
		},
		methods: {
			onHome() {
				this.$router.push({ path: '/' });
			},
		},
	};
</script>
<style lang="scss">
	@import './styles/variables.scss';
	// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
	// @font-face {
	// 	font-family: 'Raleway';
	// 	src: local('Raleway'),
	// 		url('@/assets/fonts/Raleway-Medium.ttf') format('truetype');
	// }
	.show {
		display: block;
		background-color: red;
	}
	html {
		scroll-behavior: smooth;
	}
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: 'Oswald', sans-serif;

		color: $primary-color;
	}
	a {
		text-decoration: none;
	}
	ul {
		li {
			list-style: none;
		}
	}

	h1 {
		color: $primary-color;
	}
	@media screen and (max-width: 560px) {
	}
</style>
