//@author Halid Lihovac
<template>
	<NavigationBar />
	<router-view />

	<TheFooter />
</template>
<script>
	import NavigationBar from '@/components/NavigationTrack/NavigationBar.vue';
	import TheFooter from '@/components/TheFooter.vue';
	import Sidenav from '@/components/NavigationTrack/Sidenav.vue';

	export default {
		components: {
			NavigationBar,

			TheFooter,
			Sidenav,
		},
		data() {
			return {
				sideState: [],
			};
		},
		methods: {
			onHome() {
				this.$router.push({ path: '/' });
			},

			mounted() {},
		},
	};
</script>
<style lang="scss">
	@import './styles/variables.scss';
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');

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
		box-sizing: border-box;
	}
	#app {
		font-family: Raleway, Helvetica, Arial, sans-serif;

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
</style>
