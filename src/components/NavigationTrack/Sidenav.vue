<template>
  <div class="sidenav">
    <div
      class="sidenav-content"
      :class="{ sidenav_content_visible: getSideNav }"
    >
      <div>
        <div class="img">
          <img alt="Forspace Solutions" src="@/assets/svg/logo.svg" />
        </div>

        <ul class="nav-links-vertical">
          <Links
            :routes="routes"
            :sidenav_class="true"
            :showSideNav="showSideNav"
          />
        </ul>
        <div class="sidenav_times">
          <ClosingButton @click="showSideNav" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Links from "./NavigationLinks.vue";

import ClosingButton from "../Forms/buttons/ClosingButton.vue";

export default {
  name: "Sidenav",

  components: {
    Links,
    ClosingButton,
  },
  props: {
    routes: { type: Array },

    showSideNav: { type: Function },
  },
  data() {
    return {
      presentation: true,

      sidenav_routes: [
        {
          to: "/",
          name: "home",
          isActive: true,
          id: 0,

          classname: "sidenav",
        },
        {
          to: "/",
          name: "about",
          isActive: false,
          id: 1,

          classname: "sidenav",
        },
        {
          to: "/",
          name: "products",
          isActive: false,
          id: 2,

          classname: "sidenav",
        },
        {
          to: "/",
          name: "services",
          isActive: false,
          id: 3,

          classname: "sidenav",
        },
        {
          to: "/",
          name: "contact",
          isActive: false,
          id: 4,

          classname: "sidenav",
        },
      ],
    };
  },
  methods: {},

  computed: {
    ...mapGetters(["getSideNav"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
.sidenav {
  .sidenav-content {
    position: fixed;
    display: flex;

    justify-content: center;
    text-align: center;
    // align-items: center;

    // margin: auto;
    top: 0;
    padding-top: 25%;
    right: -28%;
    width: 0%;
    height: 100vh;
    background-color: #ffffff;
    transition: all 0.4s;
    a {
      color: gray;
      &:hover {
        border-bottom: none;
        color: gray;
      }
    }
  }

  // .grid {
  //   position: fixed;
  //   z-index: 1;
  //   background-color: white;
  //   top: 0;
  //   left: -83%;
  //   width: 83%;
  //   height: 100vh;
  // }

  // .active {
  //   animation: toLeft 0.2s forwards;
  // }
  .nav-links-vertical {
    // width: 100%;

    display: inline-flex;
    flex-direction: column;
    line-height: 4rem;
    padding-left: 4%;
    ul {
      li {
        text-align: left;
        a {
          color: gray;
          font-size: 23px;
        }
      }
    }
  }

  .sidenav_times {
    position: absolute;
    top: 2.5%;
    left: 83%;
    width: 35px;
    height: 35px;
  }
  .img {
    width: 200px;
    height: 150px;
  }
  @media screen and (min-width: 1500px) {
    .sidenav_content_visible {
      right: 0%;
    }
  }
  @media screen and (max-width: 1450px) {
    .sidenav_content_visible {
      width: 22.5%;
    }
  }
  @media screen and (max-width: 1400px) {
    .sidenav_content_visible {
      width: 27.5%;
    }
  }
  @media screen and (max-width: 1024px) {
    .sidenav_content_visible {
      width: 32.5%;
    }
  }
  @media screen and (max-width: 900px) {
    .sidenav_content_visible {
      width: 35.5%;
    }
  }
  @media screen and (max-width: 768px) {
    .sidenav_content_visible {
      width: 40.5%;
    }
  }
  @media screen and (max-width: 600px) {
    .sidenav_content_visible {
      width: 50.5%;
    }
  }

  @media screen and (max-width: 560px) {
    .grid {
      z-index: 3;
      left: -210%;
      width: 100%;
      height: 100vh;
      overflow-y: scroll;
    }

    .sidenav_content_visible {
      width: 100%;
      right: 0%;
    }

    z-index: 3;
    .sidenav-content {
      .button_device {
        left: 88%;
      }
    }
  }
}
</style>
