<template>
	<div class="grid_service">
		<div class="row_1">
			<div
				class="services_div"
				style="
					position: absolute;

					justify-content: center;
					align-items: center;
					margin: auto;
					top: 2.1%;
					right: 3.7%;
					width: 20px;
					height: 20px;

					border-radius: 50%;
					padding: 2px;
				"
			>
				<ClosingButton
					@click="removeSideNav(contentId)"
					:btn="true"
				/>
			</div>
			<h1>Usluge</h1>
		</div>
		<div class="flex">
			<div class="grid_item">
				<div>
					<h1>ERP Sistemi</h1>
					<p
						style="
							width: 90px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
					</ul>
					<BaseButton
						:to="routes.route"
						:name="routes.name"
					/>
				</div>
			</div>
			<div class="grid_item">
				<div>
					<h1>DMS Sistemi</h1>
					<p
						style="
							width: 60px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
					</ul>
					<BaseButton
						:to="routes.route"
						:name="routes.name"
					/>
				</div>
			</div>
			<div class="grid_item">
				<div>
					<h1>WMS Sistemi</h1>
					<p
						style="
							width: 70px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
					</ul>
					<BaseButton
						:to="routes.route"
						:name="routes.name"
					/>
				</div>
			</div>
			<div class="grid_item">
				<div>
					<h1>Sistemi plaćanja</h1>
					<p
						style="
							width: 40px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
						<li>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.itationem,
						</li>
					</ul>
					<BaseButton
						:to="routes.route"
						:name="routes.name"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '@/styles/variables.scss';
	import BaseButton from '@/components/forms/buttons/BaseButton.vue';
	import ClosingButton from '@/components/forms/buttons/ClosingButton.vue';
	export default {
		name: 'ServicesContent',
		props: { contentId: { type: Number }, removeSideNav: { type: Function } },

		data() {
			return {
				routes: { route: '/erp', name: 'erp' },
			};
		},
		components: { BaseButton, ClosingButton },
	};
</script>

<style lang="scss" scoped>
	.row_1 {
		width: 100%;
		height: 50vh;
		background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4),
				rgba(0, 0, 0, 0.4)
			),
			url('@/assets/images/cover.png') no-repeat center center/cover;

		display: flex;
		justify-content: center;
		align-items: center;
		h1 {
			color: white;
			font-size: 55px;
		}
		.services_div {
			display: none;
			@media screen and (max-width: 567px) {
				display: flex;
			}
		}
	}
	.grid_service {
		display: grid;
		width: 100%;
		height: 100vh;
		grid-template-columns: repeat(1, 1fr);

		.flex {
			display: flex;
			height: 50vh;
			gap: 10px;
			// padding: 20px;
			> div {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: left;
				padding: 5% 0 0 3%;
				// align-items: center;
				transition: 0.8s;
				h1 {
					color: #ccc;
				}

				&:hover {
					opacity: 0.8;
					cursor: pointer;
				}
			}
			@media screen and (max-width: 567px) {
				padding: 10px;
				height: 100%;
				flex-direction: column;

				> div {
					background-color: rgb(241, 241, 241);
					padding: 10px;
					border-radius: 5px;
					color: gray;
					h1 {
						color: rgb(0, 136, 129);
					}
				}
			}
		}
		.grid_item {
			ul {
				margin: 0;
				padding: 0;
				li {
					list-style: none;
					margin-bottom: 10%;
					@media screen and (max-width: 567px) {
						margin-bottom: 7%;
					}
				}
			}
			a {
				margin-left: 0%;
			}
		}
	}
</style>
