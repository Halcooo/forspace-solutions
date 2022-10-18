@author Halid Lihovac
<template>
  <div class="body">
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
  <div class="cube-background">
    <div class="erp-text">
      <h1 class="erp-main-text">Forspace ERP & Računovodstvo +</h1>
      <p class="erp-secondary-text">
        Odluke zasnovane na činjenicama, a ne na pretpostavkama!
      </p>
    </div>
    <img src="@/assets/images/kocka_.png" alt="cube" />
    <div class="dir-container">
      <img
        class="direktorica"
        src="@/assets/images/Slika-direktorice-1.jpg"
        alt="direktorica"
      />
      <div class="dir-secondary">
        <h1>Radimo sa Vama!</h1>
        <p>
          Svakom biznisu potrebna je jasna strategija. Sa Forspace rješenjem to
          znači obezbjeđenje potpune kontrole nad svim poslovnim procesima u
          Vašoj kompaniji kroz automatizaciju, digitalizaciju i inoviranje svih
          poslovnih procesa. Kao rezultat višegodišnjeg istraživanja, sticanja
          znanja i prihvatanja svjetskih praksi, Forspace tim daje bezrezervnu
          podršku u svim fazama korištenja, a posebno smo ponosni na našu
          post-prodajnu uslugu, jer prihvatanjem ovog softvera možete računati
          na naš stalni angažman i kontakt. Mi smo prvi domaći brend na tržištu
          ERP softvera sa predznakom njemačke tehnologije koji omogućava
          smanjenje korištenja pisane dokumentacije, uštedu vremena i novca, te
          predstavlja potpuno prilagođeno i razumljivo softversko rješenje za
          krajnjeg korisnika. Vođeni našom krilaticom, sigurni smo da
          unapređujemo način na koji radite, jer MI RADIMO SA VAMA!"
        </p>
        <p>Esada Karović, CEO</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeBody",
};
</script>
<style lang="scss" scoped>
@keyframes slideIn {
  0% {
    transform: translateY(-80%);
  }
  100% {
    transform: translateY(0%);
  }
}
.dir-secondary{
  display:flex;
  flex-direction: column;
  vertical-align: middle;
  justify-content: center;
}
.body {
  animation: slideIn 1s ease-in;
}
.dir-container {
  h1 {
    color: white;
  }
  color: white;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width:80%;
  margin:auto;
}
.direktorica {
  width: 480px;
  margin-top: 0px;
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
  margin-top: 85vh;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 20px;
}
</style>
