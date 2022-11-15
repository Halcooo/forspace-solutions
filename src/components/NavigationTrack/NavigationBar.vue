@author Halid Lihovac
<template>
  <div class="nav-wrapper">
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
  .main_dropnav {
    position: absolute;
    .dropnav {
      padding: 10px;
      position: absolute;
      bottom: -30;
      display: none;

      a {
        padding: 10px 20px;
        color: rgb(54, 54, 54);
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
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(145, 145, 145);
      border-radius: 2px;
    }
    .second {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      transform: translate(80%, 33%);
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(145, 145, 145);
      border-radius: 2px;
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

@media screen and (max-width: 567px) {
  .logo {
    width: 40%;
  }
  .nav-links {
    display: none;
  }
}
</style>
