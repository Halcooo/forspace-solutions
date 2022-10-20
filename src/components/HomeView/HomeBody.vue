@author Halid Lihovac
<template>
  <div
    class="body"
    data-aos="slide-up"
    data-aos-duration="1500"
    data-aos-ease="ease"
  >
    <h1>Posao iz jednog izvora</h1>
    <p>
      Iskoristite Forspace potpuno integrisano all-in-one rješenje za <br />
      standardizaciju i digitalizaciju poslovnih procesa u Vašoj kompaniji.
    </p>
    <div class="items">
      <div class="item">
        <img src="@/assets/images/companies.png" alt="companies" />
        <h4>Vaša kompanija pod jednim krovom</h4>
        <p>Centralno upravljanje procesima.</p>
      </div>
      <div class="item">
        <img src="@/assets/images/cloud.png" alt="cloud" />
        <h4>Vaša kompanija pod jednim krovom</h4>
        <p>Centralno upravljanje procesima.</p>
      </div>
      <div class="item">
        <img src="@/assets/images/config.png" alt="config" />
        <h4>Vaša kompanija pod jednim krovom</h4>
        <p>Centralno upravljanje procesima.</p>
      </div>
      <div class="item">
        <img src="@/assets/images/circle.png" alt="circle" />
        <h4>Vaša kompanija pod jednim krovom</h4>
        <p>Centralno upravljanje procesima.</p>
      </div>
    </div>
  </div>
  <div
    class="cube-background"
    data-aos="slide-up"
    data-aos-ease="ease"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <div class="erp-text">
      <h1 class="erp-main-text">Forspace ERP & Računovodstvo +</h1>
      <p class="erp-secondary-text">
        Odluke zasnovane na činjenicama, a ne na pretpostavkama!
      </p>
    </div>
    <img src="@/assets/images/kocka_.png" alt="cube" />
  </div>
  <div
    class="dir-container"
    data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <div class="container">
      <img
        class="direktorica"
        src="@/assets/images/Slika-direktorice-1.jpg"
        alt="direktorica"
      />
    </div>

    <div class="dir-secondary d-flex">
      <h1>Radimo sa Vama!</h1>
      <p class="container">
        Svakom biznisu potrebna je jasna strategija. Sa Forspace rješenjem to
        znači obezbjeđenje potpune kontrole nad svim poslovnim procesima u Vašoj
        kompaniji kroz automatizaciju, digitalizaciju i inoviranje svih
        poslovnih procesa. Kao rezultat višegodišnjeg istraživanja, sticanja
        znanja i prihvatanja svjetskih praksi, Forspace tim daje bezrezervnu
        podršku u svim fazama korištenja, a posebno smo ponosni na našu
        post-prodajnu uslugu, jer prihvatanjem ovog softvera možete računati na
        naš stalni angažman i kontakt. Mi smo prvi domaći brend na tržištu ERP
        softvera sa predznakom njemačke tehnologije koji omogućava smanjenje
        korištenja pisane dokumentacije, uštedu vremena i novca, te predstavlja
        potpuno prilagođeno i razumljivo softversko rješenje za krajnjeg
        korisnika. Vođeni našom krilaticom, sigurni smo da unapređujemo način na
        koji radite, jer MI RADIMO SA VAMA!"
      </p>
      <p>Esada Karović, CEO</p>
    </div>
  </div>
  <div
    class="container-sm"
    data-aos="slide-up"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <h1>Kompanije koje su već optimizirale svoje procese sa Forspace</h1>
    <div class="companies">
      <img src="@/assets/images/asa-group-logo.png" alt="" />
      <img src="@/assets/images/prevent-logo.png" alt="" />
      <img src="@/assets/images/interior-logo-2.png" alt="" />
      <img src="@/assets/images/salona-logo.png" alt="" />
      <img src="@/assets/images/dresscode-logo.png" alt="" />
      <img src="@/assets/images/tkt-logo.png" alt="" />
      <img src="@/assets/images/Savent.png" alt="" />
      <img src="@/assets/images/Maxuz.png" alt="" />
      <img src="@/assets/images/Itrade.png" alt="" />
      <img src="@/assets/images/Gradiz.jpg" alt="" />
      <img src="@/assets/images/Putovaobih.png" alt="" />
      <img src="@/assets/images/ApDigital.jpg" alt="" />
    </div>
    <p>
      Sve naše klijente ponosno ističemo i gradimo partnerske odnose na
      obostrano zadovoljstvo. Ukoliko neki od naših klijenata nisu još uvijek
      dodani na listu, ne znači da ih manje cijenimo ili da su nam manje važni.
    </p>
  </div>
  <div
    class="last-item"
    data-aos="slide-up"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <img class="ap-image" src="@/assets/images/ApDigital-1.jpg" alt="" />
    <p>
      "Kada je u pitanju automatizacija računovodstva i potpuno prilagođavanje
      našim potrebama, ne tražimo dalje od tima Forspace Solutions. Njihov
      konkurentski krajolik je strm, ali Forspace to čini ostvarivim. Omogućili
      su nam, trenirali nas i dali nam samopouzdanje da svoje resurse koristimo
      mudro, oslobađajući ih svakodnevnih rutina i optimizirajući njihove
      svakodnevne performanse. Njihov pristup je privlačan i relevantan za
      industriju. Sada imamo više mogućnosti i vremena za rad na postizanju
      novih poslovnih rezultata.“
    </p>
  </div>
</template>
<script>
export default {
  name: "HomeBody",
};
</script>
<style lang="scss" scoped>
.last-item{
  margin:auto;
  width:60%
}
.ap-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.companies {
  box-sizing: border-box;
  padding-top: 4vw;
  margin: auto;
  max-width: 70vw;
  img {
    padding: 0;
    max-width: 15vw;
    height: auto;
    max-height: 100px;
    margin: 15px;
  }
}
.dir-secondary {
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
  color: #162250;
  margin-top: 50px;
  h1 {
    color: #162250 !important;
  }
}
.dir-container {
  font-size: larger;
  h1 {
    color: white;
  }
  color: white;
  display: flex;
  margin-top: 100px;
  width: 80%;
  margin: auto;
  padding: 20px;
}
.direktorica {
  margin-top: 40px;
  box-sizing: border-box;
  max-width: 500px;
}
img {
  margin: auto;
}
.erp-secondary-text {
  color: #f16822;
  font-size: 1.2em;
}
.erp-text {
  padding: 10px;
  margin-top: 30px;
}
.erp-main-text {
  color: white;
  margin-top: 70px;
}

.cube-background {
  background-image: url("@/assets/images/kocka-blank_sjena.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
}
.items {
  display: flex;
  justify-content: center;
  .item {
    padding: 10px;
    margin-right: 10px;
    &:hover {
    }
  }
}

.body {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 20px;
}
</style>
