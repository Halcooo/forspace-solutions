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
	>
		<router-link
			:to="navItem.to"
			class="sidenav"
			:class="{ active: navItem.isActive }"
			@mouseover="displayContent(index)"
		>
			{{ $t(navItem.name) }}
		</router-link>
	</li>
	<li>
		<div class="sidenav">{{ language }}</div>
		<div
			class="dropdown"
			style="position: absolute; top: 100%; bottom: 0"
		>
			<div
				v-for="lang in languages"
				style="width: 150px"
				@click="translatePage(lang)"
			>
				<div
					class="lang"
					style="width: 100%; padding: 5px; background-color: white"
				>
					{{ lang.language }}
				</div>
			</div>
		</div>
	</li>
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

				this.toggleActive(index, false);
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
			color: gray;
			font-size: 23px;
		}
		.sidenav {
			color: gray;
			font-size: 23px;
		}
		.active {
			color: $lightgreen;
		}
	}
</style>
