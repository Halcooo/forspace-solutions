<template>
	<div class="wrapper">
		<div class="about-nav">
			<div class="about-heading">
				<div>
					<h1>About</h1>
					<small>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, atque
						amet architecto vitae sapiente explicabo.
					</small>
				</div>
			</div>
			<div class="about-flex-grid">
				<div class="flex-first">
					<div class="div-1">
						<h1>In the news</h1>
					</div>
					<div class="div-2">
						<p>
							Forspace ERP jedinstveno all-in-one cloud softversko rješenje za
							standardizaciju i digitalizaciju poslovnih procesa
						</p>
					</div>
					<div class="div-3">
						<p>Zašto kompanije trebaju DMS?</p>
						<p>
							Vođenje biznisa može biti stresno na mnogo načina a poseban izazov u ovom
							pogledu je i način na koji kompanija upravlja dokumentima.
						</p>
					</div>
					<div class="div-4">
						<p>Zašto je poslovni program baziran na web-u pravi izbor?</p>
					</div>

					<div class="overlay"></div>
				</div>
				<div class="flex-second">
					<div class="card-1">
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="card-2">
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="card-3">
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
					<div class="card-4">
						<h3>Lorem, ipsum dolor.</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="the_next">
			<div class="the_next_heading">
				<h1>The Next</h1>
				<h3>Forspace Preview</h3>
				<!-- <small>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
					consequatur veniam amet voluptatum totam beatae.
				</small> -->
			</div>

			<div class="the_next_content">
				<div class="item_one">
					<div class="overlay">
						<h3>Prednosti digitalne transformacije</h3>
						<p>
							Ubrzanje digitalnog svijeta zahtijeva prilagođavanje organizacija, zbog
							čega većina kompanija u svijetu radi na digitalnoj transform...
						</p>
					</div>
				</div>
				<div class="item_two">
					<div class="overlay">
						<h3>Šta je API?</h3>
						<p>
							Izraz “API” je često korišten u web razvoju. Ažuriranja operativnog
							sistema, web pretraživača i aplikacija često najavljuju nove API-je za
							programere. Stoga, šta je API i kako ga programeri..
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="recension">
			<h1 style="text-align: center">Our Team</h1>
			<div
				class="recension_background"
				style="position: relative"
			>
				<h1 style="position: absolute; bottom: 2%; left: 2%; color: white">
					Life at Forspace
				</h1>
				<div
					class="recension_overlay"
					style="
						background-color: gray;
						width: 450px;
						height: 170px;
						transform: translate(140%, 180%);
						padding: 20px;
					"
				>
					<h4 style="color: white">What our people say</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quos
						cupiditate, temporibus aspernatur provident odit cum necessitatibus odio.
						Maxime, soluta?
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BaseButton from '@/components/forms/buttons/BaseButton.vue';

	export default {
		components: { BaseButton },
		data() {
			return {
				route_acc: { route: '/services', name: 'product_btn' },
			};
		},
	};
</script>
<style lang="scss" scoped>
	.wrapper {
		.about-nav {
			width: 100%;
			padding-top: 8%;

			p {
				color: white;
			}
			h3 {
				color: white;
			}
			.about-heading {
				text-align: center;
			}
			.about-flex-grid {
				width: 55%;
				margin: auto;
				height: 60vh;
				display: flex;
				margin-top: 5%;
				margin-bottom: 5%;
				border-radius: 5px;
				.flex-first {
					width: 45%;
					height: 100%;
					background: rgb(0, 59, 114);
					padding: 10px;
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
					.div-1,
					.div-2,
					.div-3,
					.div-4 {
						width: 80%;
						margin: auto;
						padding: 15px 0px;
					}

					.div-1,
					.div-2,
					.div-3 {
						border-bottom: 2px solid white;
					}

					.overlay {
						width: 80%;
						margin: auto;
						background-color: rgba(255, 255, 255, 0.568);
						height: 20%;
					}
					h1,
					p {
						color: white;
					}
				}
				.flex-second {
					width: 60%;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					.card-1,
					.card-2,
					.card-3,
					.card-4 {
						width: 100%;
						height: 100%;

						&:hover {
							opacity: 0.8;
							cursor: pointer;
						}
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					.card-1 {
						background: linear-gradient(
								to right,
								rgba(0, 0, 0, 0.397),
								rgba(0, 0, 0, 0.199),
								rgba(0, 0, 0, 0.404)
							),
							url('@/assets/images/erp-sistemi.png') no-repeat center center/cover;
					}
					.card-2 {
						border-top-right-radius: 5px;

						background: linear-gradient(
								to right,
								rgba(0, 0, 0, 0.397),
								rgba(0, 0, 0, 0.199),
								rgba(0, 0, 0, 0.404)
							),
							url('@/assets/images/sistemi-placanja.jpg') no-repeat center center/cover;
					}
					.card-3 {
						background: linear-gradient(
								to right,
								rgba(0, 0, 0, 0.397),
								rgba(0, 0, 0, 0.199),
								rgba(0, 0, 0, 0.404)
							),
							url('@/assets/images/forspace_info.jpg') no-repeat center center/cover;
					}
					.card-4 {
						border-bottom-right-radius: 5px;
						background: linear-gradient(
								to right,
								rgba(0, 0, 0, 0.397),
								rgba(0, 0, 0, 0.199),
								rgba(0, 0, 0, 0.404)
							),
							url('@/assets/images/forspace_info_2.jpg') no-repeat center center/cover;
					}
				}
			}
		}

		.the_next {
			width: 100%;

			.the_next_heading {
				text-align: center;
			}

			.the_next_content {
				width: 55%;
				margin: 7% auto;

				height: 370px;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 20px;
				.item_one {
					width: 100%;
					height: 100%;
					background: url('@/assets/images/about_preview.jpg') no-repeat center
						center/cover;
					position: relative;
				}
				.item_two {
					width: 100%;
					height: 100%;
					background: url('@/assets/images/about_preview_2.jpg') no-repeat center
						center/cover;
					position: relative;
				}

				.overlay {
					position: absolute;
					bottom: 0;
					width: 90%;
					margin: auto;
					height: 15vh;
					background-color: rgba(255, 72, 0, 0.74);
					transform: translate(6%, 50%);
					padding: 20px;
					h3,
					p {
						color: white;
					}
				}
			}
		}

		.recension {
			width: 100%;
			padding-top: 6%;
			.recension_background {
				width: 55%;
				margin: 5% auto;
				height: 400px;
				background: url('@/assets/images/product_item_2.jpg') no-repeat center
					center/cover;
				.recension_overlay {
				}
			}
		}
	}
</style>
