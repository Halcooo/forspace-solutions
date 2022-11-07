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
          <div class="card">
            <h2>ERP Sistemi</h2>
            <img src="@/assets/images/erp-sistemi.png" alt="" />
            <p>
              ERP (Enterprise Resource Planning) sistem je poslovni program koji
              omogućava kompanijama da planiraju svoje resurse i upravljaju
              cjelokupnim poslovanjem i pokriva sve procesne tokove uslužne,
              prodajne ili proizvodne djelatnosti.
            </p>
          </div>
        </div>
        <div class="col-sm" v-if="currentSlide == 2">
          <div class="card">
            <h2>DMS Sistemi</h2>
            <img src="@/assets/images/dms.png" alt="" />
            <p>
              DMS (Document Management System) je poslovni program za praćenje,
              upravljanje i digitalno arhiviranje dokumenata. Vodi evidenciju o
              različitim vrstama dokumenata kreiranih i arhiviranih od strane
              različitih korisnika (praćenje historije).
            </p>
          </div>
        </div>
        <div class="col-sm" v-if="currentSlide == 3">
          <div class="card">
            <h2>WMS Sistemi</h2>
            <img src="@/assets/images/wms.png" alt="" />
            <p>
              WMS (Warehouse Management System) je poslovni program za
              upravljanje skladištem koji ima za cilj da automatizuje,
              pojednostavi i racionalizuje radne zadatke i aktivnosti unutar
              skladišta, čime se povećava produktivnost i smanjuje mogućnost
              greške na minimum.
            </p>
          </div>
        </div>
        <div class="col-sm" v-if="currentSlide == 4">
          <div class="card">
            <h2>Sistemi plaćanja</h2>
            <img src="@/assets/images/sistemiplacanja.png" alt="" />
            <p>
              Payment Provider aplikacije za platne sisteme u eCommerce sektoru
              i integracija u cjelokupan lanac procesa.
            </p>
          </div>
        </div>
        <div class="col-sm" v-if="currentSlide == 5">
          <div class="card">
            <h2>Riješenja po mjeri</h2>
            <img src="@/assets/images/rijesenjapomjeri.jpg" alt="" />
            <p>
              Stručnjaci smo u pretvaranju različitih poslovnih potreba/ideja
              naših klijenata u digitalne proizvode namijenjene unapređenju
              njihovih poslovnih procesa, razvoju i digitalnoj transformaciji.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ServicesSlider from "@/components/services/ServicesSlider.vue";
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
</style>
