@author Halid Lihovac
<template>
  <div class="footer">
    <footer class="text-center text-dark text-lg-start text-muted">
      <section class="d-flex justify-content-between">
        <div class="d-none d-md-block">
          <span>Get connected with us on social networks</span>
        </div>
        <TheSocialIcons></TheSocialIcons>
      </section>
      <section class="">
        <div class="container text-left text-md-start pb-5 mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
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
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <RouterLink to="/products">
                <h6 class="text-uppercase fw-bold text-light mb-4">
                  Proizvodi
                </h6>
              </RouterLink>
              <p>
                <a href="#" class="text-reset"> Računovodstvo </a>
              </p>
              <p>
                <a href="#" class="text-reset"> Kontroling </a>
              </p>
              <p>
                <a href="#" class="text-reset"> All-in-one ERP rješenje </a>
              </p>
              <p>
                <a href="#" class="text-reset"> Mobilne aplikacije </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <RouterLink to="/contact">
                <h6 class="text-uppercase fw-bold text-light mb-4">Kontakt</h6>
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
          </div>
        </div>
      </section>

      <!-- <div class="text-center p-1 text-dark bg-light">
       
      </div> -->
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
  height: 50vh;
  padding-top: 2%;
  background-color: rgb(31, 31, 31);
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
}
</style>
