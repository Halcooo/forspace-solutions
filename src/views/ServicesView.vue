<template lang="">
  <div class="wrapper"></div>
  <div class="container-sm content" data-aos="slide-up" data-aos-duration="800">
    <h1>Programerske usluge</h1>
    <h3>RAZVOJ</h3>
    <ul>
      Našim klijentima je na raspolaganju stručnost našeg tima u razvoju:
    </ul>
    <li>
      web i desktop aplikacija podržanih na OS platformama Linux, Unix, macOS,
      Windows
    </li>
    <li>
      mobilnih aplikacija podržanih na Android i iOS operativnim sistemima
    </li>
    <li>API integracija</li>

    <p>
      Naš tim za razvoj softvera čine iskusni inžinjeri i profesionalci koji
      koristeći napredne alate, jezike i tehnologije, osiguravaju uspješnu
      realizaciju projekata u dogovorenim rokovima.
    </p>
    <h3>NAŠA EKSPERTIZA</h3>
    <p>
      Naš tim je stručan da različite poslovne potrebe/ideje našeg klijenta
      pretvori u digitalni proizvod namijenjen unapređenju njegovih poslovnih
      procesa, razvoju i digitalnoj transformaciji. Iz naše ekspertize posebno
      izdvajamo:
    </p>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card" data-aos="fade" data-aos-duration="800"  data-aos-anchor-placement="center-bottom">
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
        <div class="col-sm">
          <div class="card" data-aos="fade" data-aos-duration="800"  data-aos-anchor-placement="center-bottom">
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
        <div class="col-sm">
          <div class="card" data-aos="fade" data-aos-duration="800"  data-aos-anchor-placement="center-bottom">
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
        <div class="col-sm">
          <div class="card" data-aos="fade" data-aos-duration="800"  data-aos-anchor-placement="center-bottom">
            <h2>Sistemi plaćanja</h2>
            <img src="@/assets/images/sistemiplacanja.png" alt="" />
            <p>
              Payment Provider aplikacije za platne sisteme u eCommerce sektoru
              i integracija u cjelokupan lanac procesa.
            </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" data-aos="fade" data-aos-duration="800"  data-aos-anchor-placement="center-bottom">
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
export default {};
</script>
<style lang="scss" scoped>
.card {
  margin: 20px;
  margin-bottom: 10px;
  p {
    padding: 15px;
  }
  h2{
    padding: 5px;
  }
}

h3 {
  margin: 2vw;
}
.wrapper {
  background-image: url(@/assets/images/services.jpg);
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;
  padding-top: 200px;
}
.content {
  padding: 20px;
  h1 {
    text-align: center;
    margin: 2vw;
  }
  ul {
    margin: 2vw;
  }
  text-align: left;
  h3 {
    margin-left: 2vw;
  }

  li {
    margin-left: 5vw;
    margin-bottom: 1vw;
  }
}
</style>
