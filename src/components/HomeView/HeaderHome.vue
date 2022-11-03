@author Halid Lihovac
<template>
	<div class="landing-page">
		<div class="div">
			<div>
				<div class="head-1">
					<h1>Mi ne radimo za Vas.</h1>
				</div>
				<div class="head-2">
					<h1>Mi radimo sa Vama!</h1>
				</div>
				<div class="head-3">
					<router-link
						to="/"
						class="landing-button"
					>
						{{ $t('presentation') }}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import HeaderText from '@/components/HomeView/HeaderText.vue';

	export default {
		name: 'HeaderHome',
		components: {
			HeaderText,
		},
	};
</script>
<style lang="scss" scoped>
	@import '@/styles/variables.scss';
	@keyframes backgroundFade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.landing-page {
		width: 100%;
		height: 80vh;
		background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0.3),
				#21445b86,
				#143463c2
			),
			url('@/assets/images/header-cover.jpg') no-repeat center center/cover;
		background-attachment: fixed;
		animation: backgroundFade 0.5s ease-in;
		.div {
			display: flex;
			justify-content: left;
			align-items: center;
			height: 100%;
			margin-right: auto;
			margin-left: 10%;
			h1 {
				font-size: 60px;
				color: white;
				margin: 0;
				padding: 0;
				font-family: 'Oswald', sans-serif;
			}

			.head-3 {
				margin-top: 10%;
				.landing-button {
					color: white;
					border: 2px solid rgb(255, 255, 255);
					padding: 20px 40px;
					transition: 0.3s ease-out;

					&:hover {
						background: rgb(255, 102, 0);
						border: 2px solid rgb(255, 102, 0);
					}
				}
			}
		}
	}
</style>
