@author Halid Lihovac
<template lang="">
  <div class="burger burger1" :class="openedMenu" @click="toogleMenu">
    <div></div>
  </div>

  <div :class="displaySideBar">
    <div class="inner-sidebar">
      <div class="side-logo d-flex flex-row">
        <img width="60" src="@/assets/svg/logo-short.svg" alt="" />
      </div>
      <div class="container-sm d-flex side-links">
        <ul @click="toogleMenu">
          <li>
            <router-link to="/">{{ $t("home") }}</router-link>
          </li>
          <li>
            <router-link to="/news">{{ $t("news") }}</router-link>
          </li>

          <li>
            <router-link to="/about">{{ $t("about") }}</router-link>
          </li>
          <li>
            <router-link to="/forspace-preview">{{
              $t("preview")
            }}</router-link>
          </li>
          <li>
            <router-link to="/promo">{{ $t("promo") }}</router-link>
          </li>
          <li>
            <router-link to="/services">{{ $t("services") }}</router-link>
          </li>
          <li>
            <router-link to="/products">{{ $t("products") }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{ $t("contact") }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="icons">
       <TheSocialIcons></TheSocialIcons>
    </div>
   
  </div>
</template>
<script>
import TheSocialIcons from "./TheSocialIcons.vue";
export default {
  name: "TheSideBar",
  components: {
    TheSocialIcons,
  },
  data() {
    return {
      openedMenu: "unToggled",
      displaySideBar: "sidebar-close",
    };
  },
  methods: {
    toogleMenu() {
      if (this.openedMenu == "unToggled") {
        this.openedMenu = "toggled";
        this.displaySideBar = "sidebar-open";
      } else {
        this.openedMenu = "unToggled";
        this.displaySideBar = "sidebar-close";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.side-logo {
  margin: 40px;
}
.inner-sidebar {
  display: flex;
  flex-direction: column;
}
.side-links {
  margin-top: 135px;
  ul {
    list-style-type: none;
    li {
      text-align: left;
    }
    a {
      text-align: left;
      vertical-align: middle;
      font-weight: lighter;
      color: #162250;
      font-size: 1.15em;
      text-decoration: none;
      margin-right: 17px;
      margin-bottom: 15px;
      &:hover {
        text-decoration: underline;
      }

      &.router-link-exact-active {
        color: #f16822;
      }
    }
  }
}
.sidebar-close {
  display: none;
  animation: fadeOut 0.5s ease-out;
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 0.85;
    transform: translateX(0);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
.sidebar-open {
  opacity: 0.85;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 0px;
  width: 26vw;
  right: 0px;
  background-image: url(@/assets/images/pattern-bg.webp);
  background-position: cover;
  background-repeat: no-repeat;
  height: 100vh;
  animation: fadeInDown 0.5s ease-in;
}
.burger {
  z-index: 20;
  justify-self: flex-end;
  --font-size: 0.5; // Scale is using font-size in rems;
  --color1: #162250;
  --borderRadius: 1em;
  font-size: var(--font-size);
  scale: 0.5;
  cursor: pointer;
  padding: 3em 1.5em; ///////////////// touch area size
  &.showHitArea {
    border: 1px solid olive;
  }
  & > div {
    width: 4em;
    justify-content: right;
    height: 0.5em;
    border-radius: var(--borderRadius);
    background: var(--color1);
    &::before,
    &::after {
      transition: font-size 0s;
      content: "";
      display: block;
      position: absolute;
      width: 4em;
      height: 0.5em;
      background: var(--color1);
      border-radius: var(--borderRadius);
    }
    &::before {
      margin-top: -1.5em;
    }
    &::after {
      margin-top: 1.5em;
    }
  }
}

.burger1 {
  transition: all 0.7s, font-size 0s;
  transition-timing-function: cubic-bezier(0.68, -0.35, 0.265, 1.35);
  & > div {
    transition: all 0.1s 0.3s, font-size 0s;
    &::before,
    &::after {
      transition: all 0.3s 0.2s, font-size 0s;
    }
  }
  &.toggled {
    transform: rotate(180deg);
    > div::before {
      transform: rotate(45deg) translate(1.1em, 1em);
    }
    > div {
      background: transparent;
    }
    > div::after {
      transform: rotate(-45deg) translate(1.1em, -1em);
    }
  }
}
.icons{
  position: absolute;
  bottom:20px;
  right:10px;
}
</style>
