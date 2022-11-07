<template>
	<li
		v-if="routes"
		v-for="(navItem, index) in routes"
		:key="navItem"
	>
		<router-link
			:to="navItem.to"
			class="nav"
			:class="{ active: navItem.isActive }"
			@click="toggleActive(index, true)"
		>
			{{ $t(navItem.name) }}
		</router-link>
	</li>
	<li
		v-if="sidenavRoutes"
		v-for="(navItem, index) in sidenavRoutes"
		:key="navItem"
		@mouseover="displayContent(index)"
	>
		<router-link
			:to="navItem.to"
			class="sidenav"
			:class="{ active: navItem.isActive }"
			@click="toggleActive(index, false)"
		>
			{{ $t(navItem.name) }}
		</router-link>
	</li>
	<!-- <li class="drop-nav ul-li"> -->
	<!-- <div class="drop-bar">
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
		</div> -->
	<!-- </li> -->
</template>

<script>
	export default {
		name: 'Links',
		props: ['routes', 'sidenavRoutes', 'contents'],
		data() {
			return {
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
			toggleActive(index, bin) {
				if (bin) {
					this.routes.forEach((item) => {
						item.isActive = index == item.id ? true : false;
					});
				} else {
					this.sidenavRoutes.forEach((item) => {
						item.isActive = index == item.id ? true : false;
					});
				}
			},
			displayContent(index) {
				this.contents.forEach((item) => {
					item.state = index == item.id ? true : false;
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import '../../styles/variables.scss';

	li {
		list-style: none;
		text-align: left;

		.nav {
			color: white;
			font-size: 23px;
		}
		.sidenav {
			color: gray;
			font-size: 23px;
		}
		.active {
			color: $cornflowerblue;
		}
	}
	.drop-nav {
		width: 110px;

		a {
			color: $cornflowerblue;
		}
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
