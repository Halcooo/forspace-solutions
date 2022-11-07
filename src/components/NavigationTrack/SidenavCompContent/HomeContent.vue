<template>
	<div class="flex_column">
		<div class="row_1">
			<h1>
				{{ $t('home') }}
			</h1>
		</div>
		<div class="row_2">
			<div
				class="row_nav"
				v-for="nav in navs"
				:key="nav"
			>
				<div class="row_nav_icon">
					<div
						class="icon"
						:class="nav.icon"
					></div>

					<h1>{{ $t(nav.row_heading) }}</h1>
					<p>{{ $t(nav.row_text) }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeContent',
		props: ['navs'],
	};
</script>

<style lang="scss" scoped>
	.flex_column {
		width: 100%;
		height: 100%;
		display: flex;

		flex-direction: column;

		.row_1 {
			width: 100%;
			height: 50vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30px;
			position: relative;
			z-index: 1;
			background: linear-gradient(
					to right,
					rgba(31, 46, 255, 0.473),
					#1e7ebe86,
					#003e9bc2
				),
				url('@/assets/images/cityscape.webp') no-repeat center center/cover;

			h1 {
				color: white;
			}
		}
		.row_2 {
			width: 100%;
			height: 50vh;
			display: flex;

			.row_nav {
				width: 100%;

				.row_nav_icon {
					width: 100%;
					height: 100%;
					padding-top: 30%;
					text-align: center;
					transition: 0.5s;
					.icon {
						display: flex;
						justify-content: center;
						margin: auto;
					}
					h1 {
						font-size: 25px;
						margin-top: 2%;
					}
					&:hover {
						background-color: cornflowerblue;
						cursor: pointer;

						h1,
						p {
							color: #fff;
						}
					}
				}
				.icon {
					width: 100px;
					height: 100px;
				}
				.icon-companies {
					background: url('@/assets/images/companies.png') no-repeat center
						center/cover;
				}
				.icon-cloud {
					background: url('@/assets/images/cloud.png') no-repeat center center/cover;
				}
				.icon-config {
					background: url('@/assets/images/config.png') no-repeat center center/cover;
				}
				.icon-circle {
					background: url('@/assets/images/circle.png') no-repeat center center/cover;
				}
			}
		}
	}
</style>
