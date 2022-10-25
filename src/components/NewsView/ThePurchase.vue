<template lang="">
  <div class="container-sm" data-aos="fade" data-aos-duration="1000">
    <h1>Nabava</h1>
    <p>
      Forspace modul nabave vam omogućava jednostavnu narudžbu svega što vam
      treba za svakodnevno poslovanje. Sistem se brine o ispravnosti procesa: ko
      treba da odobri narudžbu? Informiše odjel nabave da treba prikupiti
      ponude. Provjerava da li su nabavke u skladu sa budžetom (ovdje je
      omogućen i automatski workflow za odobravanje prekoračenja budžeta od
      strane odgovorne osobe, kako proces ne bi bio u zastoju). Dozvoljava
      višestuko odobravanje predefinisanih osoba.
    </p>
    <img src="@/assets/images/nabava_animacija.gif" alt=""/>
  </div>
</template>
<script>
export default {
  name: "ThePurchase",
};
</script>
<style lang="scss" scoped>
div{
    padding: 20px;
    margin-top:10vh;
    font-size: 1.5em;
    h1{
        font-size: 2em;
    }
}
img{
 margin-top:4vh;
 margin-bottom: 4vh;
}
</style>
