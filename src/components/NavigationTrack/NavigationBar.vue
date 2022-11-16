@author Halid Lihovac
<template>
  <div class="nav-wrapper" :class="{ white_wrapper: white_wrapper }">
    <div class="nav-wrapper-flex">
      <div class="logo">
        <router-link to="/">
          <img alt="Forspace Solutions" src="@/assets/svg/logo.svg"
        /></router-link>
      </div>
      <div class="navigation">
        <ul class="nav-links">
          <Links :routes="routes" @index="currentEmit" />

          <div v-for="drop in classes" :key="drop" class="main_dropnav">
            <div
              v-if="drop.id == 1"
              class="dropnav"
              :class="{ first: drop.active }"
            >
              <router-link to="/about">Novosti</router-link>

              <router-link to="/about">Pregled</router-link>

              <router-link to="/about">Nas tim</router-link>

              <router-link to="/about">Rezervisi</router-link>
            </div>
            <div
              v-if="drop.id == 2"
              class="dropnav"
              :class="{ second: drop.active }"
            >
              <router-link to="/products/purchase">Nabava</router-link>

              <router-link to="/products/sales">Prodaja</router-link>

              <router-link to="/products/production">Proizvodnja</router-link>

              <router-link to="/products/warehouse">Skladiste</router-link>

              <router-link to="/products/dms">DMS</router-link>

              <router-link to="/products/finance">Finansije</router-link>

              <router-link to="/products/human-resources"
                >HR i place</router-link
              >
            </div>
          </div>
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
export default {
  name: "Nav",

  components: { Links, Sidenav, BaseButton, MenuButton },
  data() {
    return {
      white_wrapper: false,
      mobile: false,
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
          id: 5,

          classname: "nav",
        },
      ],
      classes: [
        { id: 1, active: false },
        { id: 2, active: false },
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
      this.classes.forEach((item) => {
        item.active = item.id == index ? true : false;
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        this.white_wrapper = true;
      } else {
        this.white_wrapper = false;
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
  // padding: 20px;

  width: 100%;
  .logo {
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
    padding: 30px 20px 20px 20px;
  }
  @media screen and (max-width: 567px) {
    .nav-wrapper {
      background-color: rgba(255, 255, 255, 0.349);
    }

    .nav-links {
      display: none;
    }
    .nav-wrapper-flex {
      padding: 10px;
      width: 100%;
    }
    .logo {
      width: 30%;
    }
  }
}
.white_wrapper {
  background-color: white;
  top: 0%;
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
        color: white;

        &:hover {
          background-color: rgb(230, 230, 230);
        }
      }
      .router-link-active {
        color: $lightgreen;
      }
    }
    .first {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 200px;
      transform: translate(45%, 33%);
      background-color: rgb(204, 204, 204);

      border-radius: 2px;
    }
    .second {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      transform: translate(80%, 33%);
      background-color: rgb(204, 204, 204);

      border-radius: 2px;
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
  gap: 32px;
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
</style>
