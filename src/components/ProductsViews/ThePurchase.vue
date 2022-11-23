<template lang="">
  <div class="container-xl d-flex purchase">
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
    <img src="@/assets/images/nabava_animacija.gif" alt="" />
  </div>
</template>
<script>
export default {
  name: "ThePurchase",
};
</script>
<style lang="scss" scoped>
.purchase {
  // background: url("@/assets/images/gradient-bg.png") no-repeat center
  //   center/cover;
  display: flex;
  flex-direction: column;
  padding: 30px;
  // background-color: azure;
  border-radius: 2px;
  margin-bottom: 2rem;
  h1 {
    color: white;
  }
}
</style>
