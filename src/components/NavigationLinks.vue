<template>
	<li
		v-for="(navItem, index) in routes"
		:key="navItem"
		@click="toggleActive(index)"
	>
		<router-link
			:to="navItem.to"
			:class="{ active: navItem.isActive }"
		>
			{{ $t(navItem.name) }}
		</router-link>
	</li>
	<li class="drop-nav ul-li">
		<div class="drop-bar">
			<div class="select">
				<div class="d-flex ul-li-a">
					<div class="language">
						{{ language }}
					</div>
					<div class="svg">
						<font-awesome-icon icon="fa-solid fa-chevron-down" />
					</div>
				</div>
				<div class="dropdown none">
					<div
						v-for="lang in fetchDropData"
						:key="lang"
						class="select-lang"
					>
						<div
							class="option"
							@click="translatePage(lang)"
						>
							{{ lang.language }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
	export default {
		name: 'Links',
		data() {
			return {
				routes: [
					{ to: '/', name: 'home', isActive: true, id: 0 },
					{ to: '/', name: 'about', isActive: false, id: 1 },
					{ to: '/', name: 'products', isActive: false, id: 2 },
					{ to: '/', name: 'services', isActive: false, id: 3 },
					{ to: '/', name: 'contact', isActive: false, id: 4 },
				],
				language: 'Language',
				selected: 'bs',
				languages: [
					{ language: 'Engleski', abr: 'en' },
					{ language: 'Bosanski', abr: 'bs' },
					{ language: 'Njemački', abr: 'de' },
				],
			};
		},
		computed: {
			fetchDropData() {
				return this.languages;
			},
		},
		methods: {
			translatePage(lang) {
				this.selected = lang.abr;
				this.language = lang.language;
				return (this.$i18n.locale = this.selected);
			},
			toggleActive(index) {
				this.routes.forEach((item) => {
					item.isActive = index == item.id ? true : false;
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '../styles/variables.scss';

	li {
		list-style: none;
		a {
			color: white;
			&:hover {
				border-bottom: 3px solid $links-color;
			}
		}
		.active {
			color: $links-color;
		}
	}
	.drop-nav {
		width: 110px;

		a {
			color: $links-color;
		}
	}

	.logo {
		width: 11%;
	}
	.navigation {
		// background-color: white;
		padding-top: 10px;
		color: black;
	}

	.drop-bar {
		.select {
			width: 100%;
			color: white;
			position: relative;
			cursor: pointer;
			.d-flex {
				display: flex;
				gap: 20px;
				justify-content: space-between;
				font-size: 20px;

				svg {
					margin-top: 2px;
				}

				&:hover {
					color: $links-color;
				}
			}
			.active {
				color: $links-color;
			}

			.dropdown {
				position: absolute;

				background-color: rgba($color: #fff, $alpha: 1);

				border-radius: 1px;
				width: 200px;
				bottom: 1;
				left: 0%;
				margin-top: 10%;
			}

			.none {
				display: none;
			}
			.select-lang {
				margin: 10px 0px;
				.option {
					text-align: left;
					padding: 10px 20px;
					font-size: 18px;
					color: black;
					&:hover {
						cursor: pointer;
						background-color: rgb(218, 245, 255);
					}
				}
			}
		}
	}
</style>
