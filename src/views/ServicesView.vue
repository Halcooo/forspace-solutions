<template lang="">
  <div class="wrapper">
    <ServicesSlider :images="images"></ServicesSlider>
  </div>
  <div class="content">
    <!-- <div class="nav-text d-flex flex-column container" v-if="currentSlide == 0">
      <h2>Web i desktop aplikacije</h2>
      <h2>Mobilne aplikacije</h2>
      <h2>API integracija</h2>
    </div> -->
    <!-- <div v-if="currentSlide == 0">
      <div class="container">
        <h1 class="mb-5">Programerske usluge i razvoj:</h1>
        <h2 class="mb-2">
          <b>Web i desktop aplikacija</b> podržanih na OS platformama Linux,
          Unix, macOS, Windows
        </h2>
        <h2 class="mb-2">
          <b>Mobilnih aplikacija</b> podržanih na Android i iOS operativnim
          sistemima
        </h2>
        <h2 class="mb-2"><b>API integracija</b></h2>
        <p>
          Naš tim za razvoj softvera čine iskusni inžinjeri i profesionalci koji
          koristeći napredne alate, jezike i tehnologije, osiguravaju uspješnu
          realizaciju projekata u dogovorenim rokovima.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div v-if="currentSlide == 1" class="col-sm">
          <Erp></Erp>
        </div>
        <div class="col-sm" v-if="currentSlide == 2">
          <Dms></Dms>
        </div>
        <div class="col-sm" v-if="currentSlide == 3">
          <Wms></Wms>
        </div>
        <div class="col-sm" v-if="currentSlide == 4">
          <PaymentProvider></PaymentProvider>
        </div>
        <div class="col-sm" v-if="currentSlide == 5">
          <CustomSolutions></CustomSolutions>
        </div>
      </div>
    </div> -->

    <div class="services-container mt-5">
      <div class="heading">
        <h1 class="mb-5 text-center">Programerske usluge i razvoj</h1>
        <div
          class="d-flex gap-5 col-12 justify-content-center align-items-center m-auto"
        >
          <div class="bg-light text-center card-body w-100 p-2">
            <font-awesome-icon icon="fa-solid fa-desktop " />
            <h3>Web i desktop aplikacije</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-light text-center card-body w-100 p-2">
            <font-awesome-icon icon="fa-solid fa-mobile" />
            <h3>Mobilne aplikacije</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="bg-light text-center card-body w-100 p-2">
            <font-awesome-icon icon="fa-solid fa-server" />
            <h3>API Integracija</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div class="grid">
        <div class="first erp">
          <h1 class="text-center mt-5">ERP Sistemi</h1>
          <p
            style="
              width: 100px;
              padding: 3px;
              background-color: tomato;
              margin: auto;
              margin-top: 10%;
            "
          ></p>
          <p class="text-center mt-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corporis odio voluptas? Perspiciatis, enim mollitia quaerat quia
            voluptas necessitatibus officiis voluptatem delectus error rerum!
            Nam voluptates et fugit libero quisquam.
          </p>
          <div class="flex">
            <router-link to="">Read More</router-link>
          </div>
        </div>

        <div class="first dms">
          <h1 class="text-center mt-5">DMS Sistemi</h1>
          <p
            style="
              width: 100px;
              padding: 3px;
              background-color: tomato;
              margin: auto;
              margin-top: 10%;
            "
          ></p>
          <p class="text-center mt-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corporis odio voluptas? Perspiciatis, enim mollitia quaerat quia
            voluptas necessitatibus officiis voluptatem delectus error rerum!
            Nam voluptates et fugit libero quisquam.
          </p>
          <div class="flex">
            <router-link to="">Read More</router-link>
          </div>
        </div>
        <div class="first wms">
          <h1 class="text-center mt-5">WMS Sistemi</h1>
          <p
            style="
              width: 100px;
              padding: 3px;
              background-color: tomato;
              margin: auto;
              margin-top: 10%;
            "
          ></p>
          <p class="text-center mt-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corporis odio voluptas? Perspiciatis, enim mollitia quaerat quia
            voluptas necessitatibus officiis voluptatem delectus error rerum!
            Nam voluptates et fugit libero quisquam.
          </p>
          <div class="flex">
            <router-link to="">Read More</router-link>
          </div>
        </div>

        <div class="first systemp">
          <h1 class="text-center mt-5">Sistemi Placanja</h1>
          <p
            style="
              width: 100px;
              padding: 3px;
              background-color: tomato;
              margin: auto;
              margin-top: 10%;
            "
          ></p>
          <p class="text-center mt-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corporis odio voluptas? Perspiciatis, enim mollitia quaerat quia
            voluptas necessitatibus officiis voluptatem delectus error rerum!
            Nam voluptates et fugit libero quisquam.
          </p>
          <div class="flex">
            <router-link to="">Read More</router-link>
          </div>
        </div>
        <div class="first solution">
          <h1 class="text-center mt-5">Rjesenja po mjeri</h1>
          <p
            style="
              width: 100px;
              padding: 3px;
              background-color: tomato;
              margin: auto;
              margin-top: 10%;
            "
          ></p>
          <p class="text-center mt-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            corporis odio voluptas? Perspiciatis, enim mollitia quaerat quia
            voluptas necessitatibus officiis voluptatem delectus error rerum!
            Nam voluptates et fugit libero quisquam.
          </p>
          <div class="flex">
            <router-link to="">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ServicesSlider from "@/components/Sliders/ServicesSlider.vue";
import Erp from "@/components/ServicesView/Erp.vue";
import Dms from "@/components/ServicesView/Dms.vue";
import Wms from "@/components/ServicesView/Wms.vue";
import PaymentProvider from "@/components/ServicesView/PaymentProvider.vue";
import CustomSolutions from "@/components/ServicesView/CustomSolutions.vue";
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url: require("@/assets/images/services.jpg"),
          name: "Usluge",
          text: "",
        },

        {
          id: 2,
          url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
          name: "ERP",
          text: " ERP (Enterprise Resource Planning) sistem je poslovni program koji omogućava kompanijama da planiraju svoje resurse i upravljaju cjelokupnim poslovanjem i pokriva sve procesne tokove uslužne, prodajne ili proizvodne djelatnosti.",
        },
        {
          id: 3,
          url: require("@/assets/images/dms-header.jpg"),
          name: "DMS",
          text: "DMS (Document Management System) je poslovni program za praćenje, upravljanje i digitalno arhiviranje dokumenata. Vodi evidenciju o različitim vrstama dokumenata kreiranih i arhiviranih od strane različitih korisnika (praćenje historije).",
        },
        {
          id: 4,
          url: require("@/assets/images/wms-header.jpg"),
          name: "WMS",
          text: " Poslovni program za upravljanje skladištem koji ima za cilj da automatizuje, pojednostavi i racionalizuje radne zadatke i aktivnosti unutar skladišta, čime se povećava produktivnost i smanjuje mogućnost greške na minimum.",
        },
        {
          id: 5,
          url: require("@/assets/images/sistemi-placanja.jpg"),
          name: "Sistemi plaćanja",
          text: "Payment Provider aplikacije za platne sisteme u eCommerce sektoru i integracija u cjelokupan lanac procesa.",
        },
        {
          id: 6,
          url: require("@/assets/images/rijesenja-po-mjeri.jpg"),
          name: "Rješenja po mjeri",
          text: " Stručnjaci smo u pretvaranju različitih poslovnih potreba/ideja naših klijenata u digitalne proizvode namijenjene unapređenju njihovih poslovnih procesa, razvoju i digitalnoj transformaciji.",
        },
      ],
    };
  },
  components: {
    ServicesSlider,
    Erp,
    Dms,
    Wms,
    PaymentProvider,
    CustomSolutions,
  },
  computed: {
    currentSlide() {
      return this.$store.getters.getCurrentSlide;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

.nav-text {
  position: absolute;
  z-index: 5;
  top: 23%;
  background-color: rgba(255, 253, 253, 0.6);
  box-shadow: rgba(255, 253, 253, 0.8) 0px 40px 100px 4px;
  padding: 15px;
  max-width: 390px;
  border-radius: 15px;
}

.heading {
  // text-align: center;
  .w-100 {
    color: rgb(117, 117, 117);
    svg {
      width: 60px;
      height: 60px;
      margin-top: 15%;
      margin-bottom: 5%;
      // background-color: red;
      color: rgb(42, 95, 131);
      path {
        width: 50px;
        height: 50px;
      }
    }
  }
}

.services-container {
  width: 70%;
  margin: auto;
  .grid {
    width: 100%;
    margin-top: 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    .first {
      height: 500px;

      h1 {
        font-size: 60px;
        color: white;
      }
      p {
        color: white;
      }
      .flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        align-items: center;
        padding: 12px 40px;
        color: white;
        border: 1px solid white;
      }
    }
    .second {
      background-color: tomato;
      transition: 0.6s;
      border-radius: 7px;

      &:hover {
        cursor: pointer;
        opacity: 0.6;
        // transform: scale(0.9);
      }
    }

    .erp {
      background: linear-gradient(
          to top,
          rgba(59, 59, 59, 0.405),
          rgba(0, 0, 0, 0.432),
          rgba(0, 0, 0, 0.438)
        ),
        url("@/assets/images/mockup2-1.png") no-repeat center center/cover;
    }
    .dms {
      background: linear-gradient(
          to top,
          rgba(59, 59, 59, 0.405),
          rgba(0, 0, 0, 0.432),
          rgba(0, 0, 0, 0.438)
        ),
        url("@/assets/images/mockup3-1.png") no-repeat center center/cover;
    }
    .wms {
      background: linear-gradient(
          to top,
          rgba(59, 59, 59, 0.405),
          rgba(0, 0, 0, 0.432),
          rgba(0, 0, 0, 0.438)
        ),
        url("@/assets/images/erp-sistemi.png") no-repeat center center/cover;
    }
    .systemp {
      background: linear-gradient(
          to top,
          rgba(59, 59, 59, 0.405),
          rgba(0, 0, 0, 0.432),
          rgba(0, 0, 0, 0.438)
        ),
        url("@/assets/images/product_item_2.jpg") no-repeat center center/cover;
    }
    .solution {
      background: linear-gradient(
          to top,
          rgba(59, 59, 59, 0.405),
          rgba(0, 0, 0, 0.432),
          rgba(0, 0, 0, 0.438)
        ),
        url("@/assets/images/payments.jpg") no-repeat center center/cover;
    }
  }
}
</style>
