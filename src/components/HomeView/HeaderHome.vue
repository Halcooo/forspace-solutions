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
						<div class="anim"></div>
						<div class="text">{{ $t('presentation') }}</div>
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
		background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
			url('@/assets/images/header-cover.jpg') no-repeat center center/cover;
		background-attachment: fixed;
		animation: backgroundFade 0.5s ease-in;
		.div {
			// padding-left: 10%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;

			// padding: 120px 60px;
			// margin: 10% 0% 0% 10%;
			h1 {
				font-size: 60px;
				color: white;
				margin: 0;
				padding: 0;
				font-family: 'Oswald', sans-serif;
			}

			.head-3 {
				.landing-button {
					display: flex;
					justify-content: center;
					margin: auto;
					position: relative;
					padding: 30px 70px;
					width: 220px;
					color: white;
					border: 3px solid rgb(255, 255, 255);
					// border-radius: 10px;
					// background-color: rgb(231, 92, 0);

					// margin-top: 25%;
					transform: translate(0%, 100%);

					.anim {
						display: block;
						position: absolute;
						top: 0;
						left: 0%;
						// border-radius: 10px;
						background-color: rgb(255, 102, 0);
						width: 0%;
						height: 100%;
						transition: 0.5s;
					}
					.text {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 100%;
						position: absolute;

						top: 0;
						left: 0;
					}
					&:hover {
						.anim {
							width: 100%;
							transition: width 0.5s;
						}
						border: 3px solid rgb(255, 102, 0);
					}
				}
			}
		}
	}
	.wrapper {
		background: url('../../assets/images/header-cover.jpg') no-repeat center
			center/cover;
		background-attachment: fixed;
		width: 100%;
		height: 100vh;
		animation: backgroundFade 0.5s ease-in-out;
		.div {
			padding-left: 10%;
			display: inline-block;
			margin-right: auto;

			padding: 120px 60px;
			margin: 5% 0% 0% 10%;
			h1 {
				font-size: 60px;
				color: white;
				margin: 0;
				padding: 0;
				font-family: 'Oswald', sans-serif;
			}

			.head-3 {
				.landing-button {
					display: flex;
					justify-content: center;
					position: relative;
					padding: 25px 55px;
					width: 200px;
					color: white;
					border: 2px solid black;
					// margin-top: 25%;
					transform: translate(0%, 100%);

					.anim {
						display: block;
						position: absolute;
						top: 0;
						left: 0;
						background-color: red;
						height: 100%;
						transition: 0.4s;
					}
					.text {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 100%;
						position: absolute;

						top: 0;
						left: 0;
					}
					&:hover {
						.anim {
							animation: fillButton 0.4s forwards;
						}
						border: 2px solid rgb(231, 93, 0);
					}
				}
			}
		}
	}
	.header-text {
		display: flex;
		position: absolute;
		color: white;
		align-items: center;
		justify-content: center;
		top: 50%;
		animation: 1s ease-out 0s 1 slideInLeft;
	}
	@keyframes slideInLeft {
		0% {
			transform: translateX(-100%);
			opacity: 0;
		}
		100% {
			transform: translateX(0%);
			opacity: 1;
		}
	}
	.demo-full-container {
		bottom: 30px;
		right: 30px;
		background-color: #f16822;
		padding: 7px;
		border-radius: 5px;
		right: 5%;
		bottom: 15%;
		position: absolute;
		a {
			text-decoration: none;
			color: white;
			font-size: 1.1em;
			&:hover {
				color: #25435b;
			}
		}
		&:hover {
			cursor: pointer;
			color: #25435b;
		}
	}

	@keyframes fillButton {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
