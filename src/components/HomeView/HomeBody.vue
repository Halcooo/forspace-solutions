@author Halid Lihovac
<template>
  <div class="body">
    <h1>Posao iz jednog izvora</h1>
    <p>
      Iskoristite Forspace potpuno integrisano all-in-one rješenje za
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
</template>
<script>
export default {
  name: "HomeBody",
};
</script>
<style lang="scss" scoped>

.items {
  display: flex;
  justify-content: center;
}
.body{
 margin-top:85vh;
margin-left:auto;
margin-right:auto;
width: 90%;
padding:20px;
}
</style>
