<template>
  <li v-for="navItem in routes" :key="navItem">
    <router-link
      :to="navItem.to"
      class="nav"
      :class="{ sidenav_r: sidenav_class }"
      @click="showSideNav"
    >
      {{ $t(navItem.name) }}
    </router-link>
  </li>

  <li style="display: inline-block">
    <div
      class="sidenav"
      @mouseover="
        () => {
          if (drop) {
            drop = false;
            active = false;
          } else {
            drop = true;
            active = true;
          }
        }
      "
      :class="{ sidelang: sidenav_class }"
    >
      {{ language }} <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </div>
    <div v-if="drop" class="dropdown">
      <div v-for="lang in languages" @click="translatePage(lang)">
        <div class="lang">
          {{ lang.language }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Links",
  props: {
    routes: { type: Array },
    sidenav_class: { type: Boolean },
    showSideNav: { type: Function },
    drop_class: { type: Boolean },
  },
  data() {
    return {
      active: false,
      drop: false,
      language: "Language",
      selected: "bs",
      languages: [
        { language: "Bosanski", abr: "bs" },
        { language: "Engleski", abr: "en" },
        { language: "Njemački", abr: "de" },
      ],
    };
  },
  computed: {
    fetchDropData() {
      return this.languages;
    },
  },
  methods: {
    show() {
      if (this.drop) {
        this.drop = false;
      } else {
        this.drop = true;
      }
    },
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
  mounted() {
    console.log(this.$props);
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

li {
  list-style: none;
  text-align: left;

  svg {
    width: 17px;
  }

  .nav {
    color: $navy;
    font-size: 23px;
  }

  .sidenav {
    font-size: 23px;
    &:hover {
      cursor: pointer;
    }
  }

  .dropdown {
    position: absolute;
    display: inline-block;
    width: 200px;
    padding: 5px;
    transform: translate(0%, 24%);

    background-color: white;

    .lang {
      width: 100%;
      height: 100%;
      padding: 10px 5px;

      cursor: pointer;
      // background-color: white;
      &:hover {
        background-color: #ccc;
      }
    }
  }
  .sidelang {
    color: white;
  }
  .sidenav_r {
    color: white;
  }

  .router-link-active {
    color: $lightgreen;
  }
}
</style>
