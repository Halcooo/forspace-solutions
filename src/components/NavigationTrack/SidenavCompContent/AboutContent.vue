<template>
	<div class="onama">
		<div class="onama-heading">
			<h1>
				{{ $t('about') }}
			</h1>
		</div>
		<div class="onama-text">
			<div class="left-text">
				<div v-for="left in leftText">
					<h3>{{ $t(left.heading) }}</h3>
					<p :class="left.classLine"></p>
					<p>{{ $t(left.paragraph) }}</p>
				</div>
			</div>
			<div class="right-text">
				<div>
					<h3>Želite surađivati ?</h3>

					<small class="moto">
						Istražite rješenja sa
						<span style="color: rgb(255, 102, 0); font-size: 18px">Forspace</span>
					</small>

					<BaseButton
						:to="routes.route"
						:name="routes.name"
					/>

					<small class="insights-moto">Insights</small>
					<div class="insights">
						<p>
							<span>
								Improving productivity with digital field workforce management
							</span>
							<router-link to="/">view</router-link>
						</p>
						<p>
							<span>Developing talent for our digital future</span>
							<router-link to="/">view</router-link>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseButton from '@/components/forms/buttons/BaseButton.vue';
	export default {
		name: 'AboutContent',
		components: { BaseButton },
		data() {
			return {
				routes: { route: '/about', name: 'about' },
				leftText: [
					{
						heading: 'about_experience',
						classLine: 'top',
						paragraph: 'about_experience_paragraph',
					},
					{
						heading: 'about_creativity',
						classLine: 'middle',
						paragraph: 'about_creativity_paragraph',
					},
					{
						heading: 'about_inovation',
						classLine: 'bottom',
						paragraph: 'about_inovation_paragraph',
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.onama {
		width: 100%;
		height: 100%;

		.onama-heading {
			height: 50vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30px;
			font-size: 40px;
			background: linear-gradient(to right, #00000050, #00000086, #000000c2),
				url('@/assets/images/purchase-cover-image.png') no-repeat center
					center/cover;
			// position: relative;
			// h1 {
			// 	position: absolute;

			// 	color: white;
			// 	bottom: -2%;
			// 	padding: 20px 40px;
			// 	left: 15%;
			// }
			h1 {
				color: white;
			}
		}
		.onama-text {
			padding: 30px 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left-text,
			.right-text {
				width: 560px;
				height: 450px;

				padding: 20px 0px;
			}

			.left-text {
				color: black;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				> div {
					margin: 15px;
				}
				.top {
					width: 80px;
					padding: 2px;
					background-color: cornflowerblue;
					border-radius: 50px;
				}
				.middle {
					width: 50px;
					padding: 2px;
					background-color: cornflowerblue;
					border-radius: 50px;
				}
				.bottom {
					width: 60px;
					padding: 2px;
					background-color: cornflowerblue;
					border-radius: 50px;
				}
			}
			.right-text {
				background-color: cornflowerblue;
				color: white;
				display: flex;
				justify-content: left;
				padding-top: 5%;
				padding-left: 5%;
				h3 {
					font-size: 50px;
					margin-bottom: 2%;
				}
				small {
					display: block;
				}
				.moto {
					width: 65%;
					margin-bottom: 5%;
					display: block;
				}
				.insights-moto {
					margin-top: 10%;
				}
				.insights {
					display: flex;
					justify-content: center;
					margin-top: 5%;
					display: flex;

					p {
						width: 50%;
					}

					span {
						display: block;
					}
				}
			}
		}
	}
</style>
