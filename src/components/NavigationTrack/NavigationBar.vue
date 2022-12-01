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

          <div v-for="drop in classes" :key="drop" class="main_dropnav">
            <div
              @mouseleave="() => (drop.active = false)"
              class="dropnav"
              :class="{ first: drop.active }"
            >
              <div>
                <h4>Trenutno aktuelno</h4>
                <div v-for="link in nav_one">
                  <NavLink :to="link.route" :name="link.name" />
                </div>
              </div>
              <div>
                <h4>Teme i Vijesti</h4>
                <div v-for="link in nav_two">
                  <NavLink :to="link.route" :name="link.name" />
                </div>
              </div>
              <!-- <div class="third p-3">
                <div class="nav-img mb-4"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores animi molestiae consequatur doloremque, aspernatur
                  commodi.
                </p>
                <div class="nav_btn mt-4">
                  <a href=""> Procitaj vise ></a>
                </div>
              </div> -->
            </div>
            <!-- <div
              v-if="drop.id == 2"
              class="dropnav"
              :class="{ second: drop.active }"
            >
              <div class="grid">
                <div v-for="product in products" class="dropnav_item">
                  <div
                    style="
                      width: 30px;
                      padding: 2px;
                      background-color: rgb(255, 98, 0);
                    "
                  ></div>
               
                  <router-link :to="product.to">
                    <div>
                      <p>
                        {{ product.heading }}
                      </p>
                      <small>{{ product.p }}</small>
                    </div>
                  </router-link>
                </div>
              </div>
            </div> -->
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
      nav_one: [
        { route: "/about", name: "news" },
        { route: "/preview", name: "preview" },
        { route: "/team", name: "our_team" },
        { route: "/reserve", name: "reserve" },
      ],
      nav_two: [
        { route: "/dms", name: "nav_news_1" },
        { route: "/preview", name: "nav_news_2" },
        { route: "/team", name: "nav_news_3" },
        { route: "/reserve", name: "nav_news_4" },
        {
          route: "/reserve",
          name: "nav_news_5",
        },
        {
          route: "/reserve",
          name: "nav_news_6",
        },
      ],

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
      classes: [{ id: 1, active: false }],
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
      this.classes.forEach((item) => {
        item.active = item.id == index ? true : false;
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
    padding: 40px 20px 20px 20px;
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
      width: 30%;
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
  padding: 12px 0px;
  top: 0%;
}
</style>
