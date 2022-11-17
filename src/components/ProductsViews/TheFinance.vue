<template lang="">
  <div class="container purchase">
    <div class="purchase d-flex justify-content-center orange-text-main">
      <div class="">
        <h1>Transparentno i tačno</h1>
        <h4>Zahtjev za budžet</h4>
        <p>
          Naš modul Finansija i računovodstva je napravljen na osnovu najboljih
          svjetskih praksi, gdje planirate i trošite shodno planu. Također,
          poredite planirano sa realizovanim. Forspace se brine da sve to bude
          tačno i transparentno.
        </p>
        <div class="orange-box">
          <div class="white-text-main p-3">
            <h4>1. Upravljanje budžetom kompanije prema vrstama troška</h4>
            <h4>
              2. Upravljanje budžetom kompanije prema <br />mjestima troška i
              vrstama troška
            </h4>
          </div>
        </div>
        <img class="image-box" src="@/assets/images/planned-BH.png" alt="" />
      </div>
      <div class="w-100 d-flex justify-content-center">
        <img
          style="width: 50%"
          src="@/assets/images/COMPARISON-WITH-PREVIOUS-YEAR.png"
          alt=""
        />
      </div>
    </div>

    <div
      class="workflow-cover d-flex justify-content-center align-items-center gap-5 p-5 mt-5 mb-5"
    >
      <div class="workflow text-light w-100">
        <h1 class="text-light">
          Raditi sa protokom ili Raditi u skladu sa tokom procesa
        </h1>
        <p>Ulazni dokumenti - Koraci u toku servisiranja fakture</p>
      </div>
      <div class="w-100">
        <img
          class="infografika"
          src="@/assets/images/infografika-bh.png"
          alt=""
        />
      </div>
    </div>

    <div class="fixed-assets text-center">
      <div class="fixed-assets-header orange-text-main">
        <h1>Stalna sredstva</h1>
        <p>Nabava, upotreba i amortizacija stalnih sredstava</p>
      </div>
    </div>
    <TheFinanceCards />
    <TheFinancePaydesk />
    <TheFinanceBankStatement />
    <TheFinanceTax />
  </div>
</template>
<script>
import TheFinanceCards from "@/components/ProductsViews/TheFinance/TheFinanceCards.vue";
import TheFinancePaydesk from "@/components/ProductsViews/TheFinance/TheFinancePaydesk.vue";
import TheFinanceBankStatement from "@/components/ProductsViews/TheFinance/TheFinanceBankStatement.vue";
import TheFinanceTax from "@/components/ProductsViews/TheFinance/TheFinanceTax.vue";
export default {
  name: "TheFinance",
  components: {
    TheFinanceCards,
    TheFinancePaydesk,
    TheFinanceBankStatement,
    TheFinanceTax,
  },
};
</script>
<style lang="scss" scooped>
@import "@/styles/variables.scss";
.workflow-cover {
  width: 100%;
  background-color: $navy;
  border-radius: 20px;
}

.infografika {
  width: 100%;
  height: 100%;
}
</style>
