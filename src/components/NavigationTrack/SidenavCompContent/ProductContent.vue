<template>
	<div class="grid-container">
		<div class="product">
			<div class="product_div">
				<ClosingButton
					@click="removeSideNav(contentId)"
					:btn="true"
				/>
			</div>

			<h1>Proizvodi</h1>
		</div>
		<div class="flex-container">
			<div
				class="flex-background-item-1"
				style="position: relative"
			>
				<div
					style="
						position: absolute;
						top: -4%;
						right: 2%;
						padding: 5px 20px;
						color: white;
						background-color: rgb(255, 98, 0);
					"
				>
					Forspace
				</div>
				<div>
					<h3>Forspace Accounting</h3>
					<p
						style="
							width: 80px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
					</ul>
					<BaseButton
						:to="route_acc.route"
						:name="route_acc.name"
					/>
				</div>
			</div>

			<div
				class="flex-background-item-2"
				style="position: relative"
			>
				<div
					style="
						position: absolute;
						top: -4%;
						right: 2%;
						padding: 5px 20px;
						color: white;
						background-color: rgb(255, 98, 0);
					"
				>
					Forspace
				</div>
				<div>
					<h3>Forspace DMS</h3>
					<p
						style="
							width: 50px;
							padding: 2px;
							background-color: rgb(0, 156, 161);
							border-radius: 50px;
						"
					></p>
					<ul>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
					</ul>
					<BaseButton
						:to="route_dms.route"
						:name="route_dms.name"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BaseButton from '../../forms/buttons/BaseButton.vue';
	import ClosingButton from '@/components/forms/buttons/ClosingButton.vue';

	export default {
		name: 'ProductContent',
		props: { contentId: { type: Number }, removeSideNav: { type: Function } },

		components: { BaseButton, ClosingButton },
		data() {
			return {
				route_acc: { route: '/services', name: 'product_btn' },
				route_dms: { route: '/dms', name: 'product_btn' },
			};
		},
	};
</script>

<style lang="scss" scoped>
	h1 {
		color: white;
		font-size: 55px;
	}
	h3 {
		color: white;
	}
	ul {
		margin: 20% 0%;

		li {
			color: white;
			list-style: square;
			margin: 10px 0px;
		}
	}
	a {
		margin-left: 13%;
	}
	.grid-container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(1, 1fr);

		.product {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 50vh;
			background: linear-gradient(
					to right,
					rgba(0, 10, 153, 0),
					#1e7ebe2c,
					#003e9b2f
				),
				url('@/assets/images/product.png') no-repeat center center/cover;
			.product_div {
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

		.flex-container {
			display: flex;
			width: 100%;
			height: 50vh;
			justify-content: center;
			align-items: center;
			gap: 30px;

			// background-color: rgb(221, 221, 221);

			.flex-background-item-1,
			.flex-background-item-2 {
				width: 500px;
				height: 400px;
				transition: 0.5s;
				display: flex;
				justify-content: left;
				align-items: center;
				padding: 30px 0px 0px 10px;
				&:hover {
					opacity: 0.8;
					cursor: pointer;
				}
				@media screen and (max-width: 567px) {
					width: 100%;
				}
			}
			.flex-background-item-1 {
				background: linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0.5),
						rgba(0, 0, 0, 0.4),
						rgba(0, 0, 0, 0.4)
					),
					url('@/assets/images/product_item_1.jpg') no-repeat center center/cover;
			}
			.flex-background-item-2 {
				background: linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0.5),
						rgba(0, 0, 0, 0.4),
						rgba(0, 0, 0, 0.4)
					),
					url('@/assets/images/product_item_2.jpg') no-repeat center center/cover;
			}
		}

		@media screen and (max-width: 567px) {
			.flex-container {
				flex-direction: column;
				height: 100%;
				padding: 20px 10px;
			}
		}
	}
</style>
