<template lang="">
  <div class="wrapper">
    <ServicesSlider :images="images"></ServicesSlider>
  </div>
  <div class="container-sm content">
    <div class="nav-text d-flex flex-column container" v-if="currentSlide == 0">
      <h2>Web i desktop aplikacije</h2>
      <h2>Mobilne aplikacije</h2>
      <h2>API integracija</h2>
    </div>
    <div v-if="currentSlide == 0">
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
        },

        {
          id: 2,
          url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
          name: "ERP",
        },
        { id: 3, url: require("@/assets/images/dms-header.jpg"), name: "DMS" },
        { id: 4, url: require("@/assets/images/wms-header.jpg"), name: "WMS" },
        {
          id: 5,
          url: require("@/assets/images/sistemi-placanja.jpg"),
          name: "Sistemi plaćanja",
        },
        {
          id: 6,
          url: require("@/assets/images/rijesenja-po-mjeri.jpg"),
          name: "Rješenja po mjeri",
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

.card {
  margin: 20px;
  margin-bottom: 10px;
}

.content {
  padding: 20px;
  text-align: left;
  h3 {
    margin-left: 2vw;
  }
  ul {
    padding-left: 0px;
  }
  li {
    margin-left: 7px;
    margin-bottom: 1vw;
  }
}
.card {
  margin: 20px;
  margin-bottom: 10px;
  p {
    padding: 15px;
  }
  h2 {
    padding: 5px;
  }
}

.card {
  margin: 20px;
  margin-bottom: 10px;
}

.content {
  padding: 20px;
  text-align: left;
  h3 {
    margin-left: 2vw;
  }
  ul {
    padding-left: 0px;
  }
  li {
    margin-left: 7px;
    margin-bottom: 1vw;
  }
}
.card {
  margin: 20px;
  margin-bottom: 10px;
  p {
    padding: 15px;
  }
  h2 {
    padding: 5px;
  }
}

.card {
  margin: 20px;
  margin-bottom: 10px;
}

.content {
  padding: 20px;
  text-align: left;
  h3 {
    margin-left: 2vw;
  }
  ul {
    padding-left: 0px;
  }
  li {
    margin-left: 7px;
    margin-bottom: 1vw;
  }
}
</style>
