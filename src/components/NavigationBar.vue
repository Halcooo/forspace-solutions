@author Halid Lihovac
<template lang="" v-if="showFullNav">
  <div
    class="nav-wrapper"
    :class="sticky"
    data-aos="fade-in"
    data-aos-easing="ease-in"
    data-aos-duration="800"
  >
    <img
      @click="onHome"
      class="logo"
      alt="Forspace Solutions"
      src="@/assets/svg/logo.svg"
    />
    <nav>
      <!-- <router-link to="/">{{ $t("home") }}</router-link> -->
      <!-- <router-link to="/news">{{ $t("news") }}</router-link> -->
      <!-- <router-link to="/about">{{ $t("about") }}</router-link> -->
      <router-link to="/products">{{ $t("products") }}</router-link>
      <router-link to="/services">{{ $t("services") }}</router-link>
      <!-- <router-link to="/forspace-preview">{{ $t("preview") }}</router-link> -->
      <router-link to="/contact">{{ $t("contact") }}</router-link>
      <!-- <router-link to="/promo">{{ $t("promo") }}</router-link> -->
    </nav>
    <!-- <DropBar></DropBar> -->

    <TheSideBar></TheSideBar>
  </div>
</template>
<script>
import DropBar from "@/components/DropBar.vue";
import TheSideBar from "@/components/TheSideBar.vue";
export default {
  name: "NavigationBar",
  data() {
    return { show: true, scrollPosition: 0, showFullNav: true };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: { DropBar, TheSideBar },
  methods: {
    onHome() {
      this.$router.push("/");
    },
    handleScroll() {
      var currentScrollPosition = window.scrollY;

      if (currentScrollPosition < this.scrollPosition) {
        console.log("Scrolling up");
        this.showFullNav = true;
      } else {
        this.showFullNav = false;
        console.log("Scrolling down");
      }

      this.scrollPosition = window.scrollY;
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes underline {
  0% {
  }
  100% {
    text-decoration: underline;
  }
}

nav {
  padding: 25px;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  a {
    vertical-align: middle;
    font-weight: lighter;
    color: #162250;
    font-size: 1.15em;
    text-decoration: none;
    margin-right: 17px;
    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: #f16822;
    }
  }
}
.logo {
  justify-self: flex-end;
  margin-left: 15vw;
  scale: 0.8;
}
.nav-wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  width: 100%;
}
</style>
