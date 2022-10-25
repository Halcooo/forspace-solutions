<template lang="">
  <div class="wrapper" data-aos="fade-in" data-aos-duration="800">
    <div class="container-sm items">
      <div class="card nabava">nabava</div>
      <div class="card prodaja">prodaja</div>
      <div class="card proizvodnja">proizvodnja</div>
      <div class="card skladište">skladište</div>
      <div class="card dms">dms</div>
      <div class="card finansije">finansije</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  background-image: url(@/assets/images/productscover.jpg);
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 200px;
}
.items{
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
