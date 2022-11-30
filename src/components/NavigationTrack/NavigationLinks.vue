<template>
  <li v-for="(navItem, index) in routes" :key="navItem">
    <router-link
      :to="navItem.to"
      class="nav"
      :class="[{ sidenav_r: sidenav_class }, { navy: navy }]"
      @click="showSideNav"
      @mouseover="giveindex(index)"
    >
      <div>
        {{ $t(navItem.name) }}

        <font-awesome-icon icon="fa-solid fa-chevron-down" v-if="index == 1" />
      </div>
      <div class="underline"></div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "Links",
  props: {
    routes: { type: Array },
    sidenav_class: { type: Boolean },
    showSideNav: { type: Function },
  },
  data() {
    return {
      language: "Language",
      selected: "bs",
      languages: [
        { language: "Bosanski", abr: "bs" },
        { language: "Engleski", abr: "en" },
        { language: "Njemački", abr: "de" },
      ],
      navy: false,
    };
  },
  computed: {
    fetchDropData() {
      return this.languages;
    },
  },
  methods: {
    giveindex(index) {
      this.$emit("index", index);
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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        this.navy = true;
      } else {
        this.navy = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

li {
  list-style: none;
  position: relative;
  svg {
    width: 17px;
  }

  .nav {
    color: rgb(255, 255, 255);
    font-size: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .underline {
      width: 0%;
      height: 2px;
    }
    &:hover {
      opacity: .8;
      .underline {
        background-color: rgb(166, 166, 166);
        width: 100%;
        transition: width 0.3s ease-out;
      }
    }
  }
  .navy {
    color: #333;
  }

  .sidenav {
    font-size: 23px;
    &:hover {
      cursor: pointer;
    }
  }
  .sidenav_r {
    color: rgb(156, 156, 156);
  }

  .router-link-active {
    color: rgb(55, 165, 255);
  }
  .router-link {
    text-align: left;
  }
}
@media screen and (max-width: 567px) {
  li {
    svg {
      display: none;
    }
  }
}
</style>
