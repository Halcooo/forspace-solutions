<template lang="">
  <div class="container  purchase">
    <div class="row purchase orange-text-main">
      <div class="col-6">
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
      <div class="col">
        <img
          width="460vw"
          style="margin-top:4vw;-"
          src="@/assets/images/COMPARISON-WITH-PREVIOUS-YEAR.png"
          alt=""
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="workflow-cover d-flex justify-center align-center column">
          <div class="workflow white-text-main">
            <h1>Raditi sa protokom ili Raditi u skladu sa tokom procesa</h1>
            <p>Ulazni dokumenti - Koraci u toku servisiranja fakture</p>
          </div>
          <img
            class="infografika"
            src="@/assets/images/infografika-bh.png"
            alt=""
          />
          <div>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style="height: 100%; width: 100%"
            >
              <path
                d="M-23.98,151.47 C257.62,69.56 345.08,84.38 631.20,172.20 L501.97,167.27 L-16.64,168.25 Z"
                style="stroke: none; fill: white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-assets">
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
.workflow-cover {
  background-color: rgb(0, 0, 56);
  color: white;
}
</style>
