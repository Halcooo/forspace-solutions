@author Halid Lihovac
<template>
  <div class="footer">
    <!-- <div class="square"></div>
    <div class="circle"></div>
    <div class="round"></div> -->
    <footer class="text-center text-dark text-lg-start text-muted">
      <section class="d-flex justify-content-between">
        <div class="d-none d-md-block">
          <span>Get connected with us on social networks</span>
        </div>
        <TheSocialIcons></TheSocialIcons>
      </section>
      <section class="">
        <div class="container text-md-start pb-5 mt-5">
          <div class="d-flex mt-3">
            <div class="col-md-3 mx-auto mb-4 text-center">
              <RouterLink to="/">
                <img src="../assets/svg/logo_white.svg" alt="" />
              </RouterLink>

              <h6 class="text-uppercase fw-bold mb-4"></h6>
              <p class="ms-2">
                Mi ne radimo sa vama!
                <br />
                Mi radimo za vas!
              </p>
            </div>
            <div class="col-md-3 mx-auto mb-4 text-center">
              <RouterLink to="/products">
                <h6 class="text-uppercase fw-bold text-light mb-4">
                  {{ $t("footer_forspace_products") }}
                </h6>
              </RouterLink>
              <p class="text-reset">
                {{ $t("footer_accounting") }}
              </p>
              <p class="text-reset">
                {{ $t("footer_controlling") }}
              </p>
              <p class="text-reset">
                {{ $t("footer_all_in_one") }}
              </p>
              <p class="text-reset">
                {{ $t("footer_mobile_app") }}
              </p>
            </div>
            <div class="col-md-3 mx-auto mb-md-0 mb-4 uppercase text-center">
              <RouterLink to="/contact">
                <h6 class="text-uppercase fw-bold text-light mb-4">
                  {{ $t("footer_contact") }}
                </h6>
              </RouterLink>
              <p>
                <font-awesome-icon icon="fa-solid fa-home" />
                Bulevar Meše Selimovića 16, 71000 Sarajevo, Bosna i Hercegovina
              </p>
              <p>
                <font-awesome-icon icon="fa-solid fa-envelope" />
                info@forspace.ba
              </p>
              <p>
                <font-awesome-icon icon="fa-solid fa-phone" />
                +387 33 774 873
              </p>
            </div>

            <div class="col-md-3 mx-auto mb-md-0 mb-4 uppercase text-center">
              <h6 class="text-uppercase fw-bold text-light mb-4">Prevedi</h6>

              <div class="">
                <p
                  class="cursor-pointer"
                  v-for="lang in languages"
                  :key="lang"
                  @click="translatePage(lang)"
                >
                  {{ lang.language }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script>
import TheSocialIcons from "./TheSocialIcons.vue";
export default {
  name: "TheFooter",
  components: {
    TheSocialIcons,
  },
  data() {
    return {
      selected: "bs",
      languages: [
        { language: "Bosanski", abr: "bs" },
        { language: "Engleski", abr: "en" },
        { language: "Njemački", abr: "de" },
      ],
    };
  },
  methods: {
    translatePage(lang) {
      this.selected = lang.abr;
      console.log(this.selected);
      this.language = lang.language;

      return (this.$i18n.locale = this.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
* {
  color: rgb(155, 155, 155);
  animation: fadeInAnimation 1s;
}

img {
  width: 170px;
}
.footer {
  // height: 30vh;
  // padding-top: 2%;
  padding: 10px 5px;
  background-color: rgb(31, 31, 31);
  position: relative;
  bottom: 0;
  @media screen and (max-width: 567px) {
    height: 100%;
  }
  // background: url("@/assets/images/footer.jpg") no-repeat center center/cover;
  // background: linear-gradient(
  //     to top,
  //     rgba(75, 108, 218, 0.363),
  //     rgba(48, 48, 199, 0.411),
  //     rgba(0, 0, 255, 0.363)
  //   ),
  //   url("@/assets/images/footer2.png") no-repeat center center/cover;
  // background-image: url("@/assets/images/bg-pattern-2.png");
  // background: url("@/assets/images/leaf.jpg") no-repeat center center/cover;
  .square {
    width: 50px;
    height: 50px;

    border: 10px solid rgba(116, 116, 116, 0.363);
    position: absolute;
    top: 20%;
    right: 35%;
    transform: rotate(35deg);
  }
  .circle {
    width: 250px;
    height: 250px;
    border: 20px solid rgba(116, 116, 116, 0.363);
    position: absolute;
    top: 10%;
    left: 18%;
  }
  .round {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(116, 116, 116, 0.363);
    border-radius: 50%;
    position: absolute;
    top: 20%;
    left: 42%;
  }
  h6,
  .text-reset {
    text-transform: capitalize;
  }
}
.cursor-pointer {
  // text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
}
</style>
