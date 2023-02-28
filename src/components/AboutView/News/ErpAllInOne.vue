<template>
  <div class="header">
    <div>
      <h2>{{ $t("about_us_news_link_one") }}</h2>
    </div>
  </div>
  <div class="container mt-5">
    <h2 class="mt-2 mb-4 title">
      Selekcija naših proizvoda ili "custom made" rješenje, šta je najbolje?
      Odlučujemo zajedno sa vama!
    </h2>
    <p>
      ERP (Enterprise Resource Planning) je računarski program koji omogućava
      kompanijama da planiraju i upravljaju svojim resursima. Sastoji se od
      modula koji digitalno prate aktualne procese i uglavnom pokrivaju sve
      procesne tokove u kompaniji (npr. od narudžbe kupca do isporuke). ERP ima
      koncept "svo poslovanje pod jednim krovom" i to omogućava tok informacija
      u jednoj platformi i konzistentnost informacija i izvještaja od dna ka
      vrhu. Takođe omogućava kompanijama da se digitalno transformišu i vode
      svoje procese kroz ERP bez značajnog korištenja drugih alata i softvera.
      Uzimajući sve ovo u obzir, ERP je glavni alat kojim upravljate današnjim
      poslovanjem, bilo da se bavite proizvodnjom, prodajom, uslugama ili bilo
      čim drugim. Obzirom da nije pitanje samog softvera, postoje mnogi izazovi
      u samoj implementaciji. To je ekstenzivan i kompleksan proces, i postoje
      brojni slučajevi neuspješnih implementacija. Na osnovu našeg iskustva u
      različitim industrijama i brojnih implementacija, Forspace tim može
      izvršiti uspješnu implementaciju ERP-a zajedno sa vama!
    </p>
    <div class="mt-5 mb-5 ps-2">
      <router-link to="/about">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <span> {{ $t("back") }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErpAllInOne",
};
</script>
<style lang="scss" scoped>
.title{
  color:black;
}</style>
