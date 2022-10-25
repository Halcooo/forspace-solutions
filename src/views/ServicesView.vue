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
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
h3{
  margin:2vw;

  
}
.wrapper {
  background-image: url(@/assets/images/services.jpg);
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;
  padding-top: 200px;
}
.content {
  h1{
    text-align: center;
    margin: 2vw;
  }
  ul{
    margin: 2vw;
  }
  text-align: left;
  h3 {
    margin-left: 2vw;
  }
  
    li {
      margin-left: 5vw;
      margin-bottom:1vw;
    }
  
}
</style>
