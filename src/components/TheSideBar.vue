<template lang="">
  <div class="burger burger1" :class="openedMenu" @click="toogleMenu">
    <div></div>
  </div>
  <div :class="displaySideBar">
    <div class="container-sm d-flex">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSideBar",
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
  data() {
    return {
      openedMenu: "unToggled",
      displaySideBar: "sidebar-close",
    };
  },
};
</script>
<style lang="scss" scoped>
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
    opacity: 0.7;
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
  opacity: 0.7;
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
</style>
