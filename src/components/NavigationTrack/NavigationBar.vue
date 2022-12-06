@author Halid Lihovac
<template>
  <div class="nav-wrapper" :class="{ white_wrapper: white_wrapper }">
    <div class="nav-wrapper-flex" style="position: relative">
      <div class="logo" :class="{ none: none }">
        <router-link to="/">
          <!-- <img
            src="../../assets/images/logo-background.png"
            class="logo-back"
            alt=""
            style="" /> -->
          <img alt="Forspace Solutions" src="@/assets/svg/logo_white.svg"
        /></router-link>
      </div>
      <div class="logo" v-if="white_wrapper" :class="{ mobile: white_wrapper }">
        <router-link to="/">
          <img alt="Forspace Solutions" src="@/assets/svg/logo.svg"
        /></router-link>
      </div>
      <div class="navigation">
        <ul class="nav-links">
          <Links :routes="routes" @index="currentEmit" />
        </ul>
        <div class="group">
          <MenuButton :showSideNav="showSideNav" />
          <Sidenav :showSideNav="showSideNav" :routes="routes" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Links from "@/components/NavigationTrack/NavigationLinks.vue";
import { mapMutations, mapGetters } from "vuex";

import Sidenav from "../../components/NavigationTrack/Sidenav.vue";
import BaseButton from "../Forms/buttons/BaseButton.vue";
import MenuButton from "./MenuButton.vue";
import NavLink from "./NavLinks/NavLink.vue";
export default {
  name: "Nav",

  components: { Links, Sidenav, BaseButton, MenuButton, NavLink },
  data() {
    return {
      route: { route: "/contact", name: "about_presentation" },
      white_wrapper: false,
      mobile: false,
      none: false,
      navy: false,

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
          to: "/appointment",
          name: "appointment",
          isActive: false,
          id: 4,

          classname: "nav",
        },

        {
          to: "/contact",
          name: "contact",
          isActive: false,
          id: 5,

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
      this.routes.forEach((item) => {
        item.isActive = item.id == index ? true : false;
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 30) {
        this.white_wrapper = true;
        this.mobile = true;
        this.none = true;
        this.navy = true;
      } else {
        this.white_wrapper = false;
        this.mobile = false;
        this.none = false;
        this.navy = false;
      }
    });
  },
};
</script>
<style lang="scss">
@import "../../styles/variables.scss";

.nav-wrapper {
  position: fixed;

  z-index: 2;
  margin: 0;
  padding: 5px 0px;

  width: 100%;
  .logo {
    // position: absolute;
    .logo-back {
      position: absolute;
      top: 0%;
      left: -5%;
      z-index: -1;
    }
    width: 20%;
    &:hover {
      cursor: pointer;
    }
  }
  .nav-wrapper-flex {
    display: flex;
    width: 70%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 20px;
  }
  @media screen and (max-width: 567px) {
    .nav-wrapper {
      background-color: rgba(255, 255, 255, 0.349);
    }

    .nav-links {
      display: none;
    }
    .nav-wrapper-flex {
      padding: 0px 10px;
      width: 100%;
    }
    .logo {
      padding: 15px;
      width: 50%;
    }
  }
}
.third {
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
}
.nav-img {
  width: 100%;
  height: 45%;
  border-radius: 10px;
  background: url("@/assets/images/forspace_info_2.jpg") no-repeat center
    center/cover;
}
.nav-img_2 {
  width: 100%;
  height: 45%;
  border-radius: 10px;
  background: url("@/assets/images/product_item_2.jpg") no-repeat center
    center/cover;
}

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  .main_dropnav {
    position: absolute;
    .dropnav {
      padding: 10px;
      position: absolute;
      bottom: -30;
      display: none;

      a {
        padding: 10px 20px;
        color: black;
      }
    }
    .first {
      display: flex;
      // grid-template-columns: repeat(1, 1fr);
      width: 500px;
      height: 400px;
      transform: translate(-20%, 10%);
      background-color: rgb(255, 255, 255);

      border-radius: 2px;
      h4 {
        padding-left: 20px;
      }
      a {
        display: block;
        color: rgb(95, 95, 95);
      }
      > div {
        padding: 5px;

        width: 100%;
      }

      .nav_btn {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;

        a {
          color: gray;
        }
      }
    }
    .second {
      display: flex;
      justify-content: center;
      width: 900px;
      // height: 400px;
      transform: translate(-20%, 10%);
      background-color: rgb(255, 255, 255);
      border-radius: 2px;

      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
      }

      .dropnav_item {
        border-radius: 5px;

        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease-out;
        // padding: 5px;
        small {
          display: block;
          width: 100%;
          word-break: break-all;
        }
        &:hover {
          background-color: rgb(236, 236, 236);
          cursor: pointer;
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 5px;
        }
      }
    }
  }
  .group {
    display: none;
    @media screen and (max-width: 567px) {
      display: block;
    }
  }
}

.nav-links {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
  padding: 0;
  margin: 0;
}

.button {
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 2px;
  color: white;
  font-size: 25px;
  &:hover {
    border: 2px solid rgb(0, 0, 0);
  }
}

.cookie {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  text-align: center;
  color: white;

  @media screen and (max-width: 567px) {
    font-size: 12px;
    // padding: 0px 5px;
    height: 50px;
  }
}

.none {
  display: none;
}
.mobile {
  display: block;
}

.white_wrapper {
  background-color: white;
  top: 0%;
}
</style>
