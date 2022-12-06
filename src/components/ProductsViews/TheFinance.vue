<template lang="">
  <div class="container purchase">
    <div class="purchase d-flex justify-content-center orange-text-main">
      <div class="">
        <h1 class="text-secondary">{{ $t("products_finance_heading_one") }}</h1>
        <h4>{{ $t("products_finance_heading_two") }}</h4>
        <p>
          {{ $t("products_finance_text_one") }}
        </p>
        <div class="orange-box">
          <div class="white-text-main p-3">
            <h4>{{ $t("products_finance_text_1") }}</h4>
            <h4>
              {{ $t("products_finance_text_2") }}
            </h4>
          </div>
        </div>
        <img class="image-box" v-for="img in planned" :src="img.url" alt="" />
      </div>
    </div>

    <div
      class="workflow-cover d-flex justify-content-center align-items-center gap-5 p-5 mt-5 mb-5"
    >
      <div class="workflow text-light w-100">
        <h1 class="text-light">
          {{ $t("products_finance_workflow_text_1") }}
        </h1>
        <p>{{ $t("products_finance_workflow_text_2") }}</p>
      </div>
      <div class="w-100">
        <img
          class="infografika"
          v-for="img in infograph"
          :src="img.url"
          alt=""
        />
      </div>
    </div>

    <div class="fixed-assets text-center">
      <div class="fixed-assets-header orange-text-main">
        <h1>{{ $t("products_finance_assets_text_1") }}</h1>
        <p>{{ $t("products_finance_assets_text_2") }}</p>
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
  data() {
    return {};
  },
  computed: {
    img_box() {
      if (this.$i18n.locale == "bs") {
        return [
          { url: require("@/assets/images/COMPARISON-WITH-PREVIOUS-YEAR.png") },
        ];
      } else {
        return [{ url: require("@/assets/images/transparence.png") }];
      }
    },
    planned() {
      if (this.$i18n.locale == "bs") {
        return [{ url: require("@/assets/images/planned-BH.png") }];
      } else {
        return [{ url: require("@/assets/images/planned.png") }];
      }
    },
    infograph() {
      if (this.$i18n.locale == "bs") {
        return [{ url: require("@/assets/images/infografika-bh.png") }];
      } else {
        return [{ url: require("@/assets/images/infografika.png") }];
      }
    },
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

h1 {
  color: white;
}
</style>
