<template>
	<div class="onama">
		<div class="onama-heading">
			<div class="about_div">
				<ClosingButton
					@click="removeSideNav(contentId)"
					:btn="true"
				/>
			</div>
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
	import ClosingButton from '@/components/forms/buttons/ClosingButton.vue';
	export default {
		name: 'AboutContent',
		props: { contentId: { type: Number }, removeSideNav: { type: Function } },
		components: { BaseButton, ClosingButton },
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
			justify-content: center;
			align-items: center;

			font-size: 40px;
			background: linear-gradient(
					to right,
					rgba(0, 10, 153, 0),
					#1e7ebe2c,
					#003e9b2f
				),
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
				font-size: 55px;
			}
			.about_div {
				display: none;
				position: absolute;
				justify-content: center;
				align-items: center;
				margin: auto;
				top: 2.1%;
				right: 3.7%;
				width: 20px;
				height: 20px;
				padding: 2px;
				@media screen and (max-width: 567px) {
					display: flex;
				}
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
				color: gray;
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
					background-color: rgb(0, 156, 161);
					border-radius: 50px;
				}
				.middle {
					width: 50px;
					padding: 2px;
					background-color: rgb(0, 156, 161);
					border-radius: 50px;
				}
				.bottom {
					width: 60px;
					padding: 2px;
					background-color: rgb(0, 156, 161);
					border-radius: 50px;
				}
			}
			.right-text {
				background: linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0.6),
						rgba(0, 0, 0, 0.5),
						rgba(0, 0, 0, 0.5)
					),
					url('@/assets/images/product_item_1.jpg') no-repeat center center/cover;
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
			@media screen and (max-width: 567px) {
				flex-direction: column;

				padding: 10px;

				.left-text,
				.right-text {
					width: 100%;
					height: 100%;
				}
				.left-text {
					> div {
						width: 100%;
					}
				}
			}
		}
	}
</style>
