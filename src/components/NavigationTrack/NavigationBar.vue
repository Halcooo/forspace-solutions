@author Halid Lihovac
<template>
  <div class="nav-wrapper">
    <div class="nav-wrapper-flex">
      <div class="logo">
        <img alt="Forspace Solutions" src="@/assets/svg/logo.svg" />
      </div>
      <div class="navigation">
        <ul class="nav-links">
          <Links :routes="routes" @index="currentEmit" />
        </ul>

        <CloseBtn :showSideNav="showSideNav" />
        <Sidenav :showSideNav="showSideNav" :routes="routes" />
      </div>
    </div>
  </div>
</template>
<script>
import Links from "@/components/NavigationTrack/NavigationLinks.vue";
import { mapMutations, mapGetters } from "vuex";

import CloseBtn from "./CloseButton.vue";
import Sidenav from "../../components/NavigationTrack/Sidenav.vue";
export default {
  name: "Nav",
  emits: ["index"],
  components: { Links, CloseBtn, Sidenav },
  data() {
    return {
      routes: [
        {
          to: "/",
          name: "home",
          isActive: true,
          id: 0,

          classname: "nav",
        },
        {
          to: "/about",
          name: "about",
          isActive: false,
          id: 1,

          classname: "nav",
        },
        {
          to: "/products/purchase",
          name: "products",
          isActive: false,
          id: 2,

          classname: "nav",
        },
        {
          to: "/services",
          name: "services",
          isActive: false,
          id: 3,

          classname: "nav",
        },
        {
          to: "/contact",
          name: "contact",
          isActive: false,
          id: 4,

          classname: "nav",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setSideNav"]),
    ...mapGetters(["getSideNav"]),

    showSideNav() {
      if (this.getSideNav()) {
        this.setSideNav(false);
      } else {
        this.setSideNav(true);
      }
    },
    currentEmit(index) {
      console.log(index);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "../../styles/variables.scss";

.nav-wrapper {
  position: fixed;
  z-index: 2;
  margin: 0;
  padding: 20px;
  width: 100%;
  background-color: white;

  .nav-wrapper-flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  width: 12%;
  &:hover {
    cursor: pointer;
  }
}
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
}
.nav-links {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 32px;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 567px) {
  .logo {
    width: 40%;
  }
  .nav-links {
    display: none;
  }
}
</style>
