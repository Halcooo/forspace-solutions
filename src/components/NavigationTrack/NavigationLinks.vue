<template>
  <li v-for="(navItem, index) in routes" :key="navItem">
    <router-link
      :to="navItem.to"
      class="nav"
      :class="[{ sidenav_r: sidenav_class }, { navy: navy }]"
      @click="showSideNav"
      @mouseover="giveindex(index)"
    >
      <div class="link-title">
        {{ $t(navItem.name) }}
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
      visible: false,
      language: "Bosanski",
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
    showLanguages() {
      if (!this.visible) {
        this.visible = true;
      }
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
.link-title {
  white-space: nowrap;
}

li {
  list-style: none;
  position: relative;
  svg {
    width: 17px;
  }

  .nav {
    color: rgb(255, 255, 255);
    font-size: 20px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .underline {
      width: 0%;
      height: 2px;
    }
    &:hover {
      opacity: 0.8;
      .underline {
        background-color: white;
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
    color: orange;
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

.search {
  font-size: 20px;
}
.box {
  overflow: hidden;
  color: white;
  font-size: 20px;
  padding: 0px 10px;

  &:hover {
    cursor: pointer;
  }
  .menu {
    padding: 5px;
    background-color: white;
    color: #333;
    display: none;
    position: absolute;
    transform: translate(0%, 5%);
    p {
      padding-right: 30px;
      font-size: 17px;
      &:hover {
        background-color: rgb(190, 213, 255);
        cursor: pointer;
      }
    }
  }
  .visible {
    display: block;
  }
}
</style>
