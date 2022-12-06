<template lang="">
  <div
    class="d-flex col-12 black-text-main display-none-640px mb-5"
    style="padding-top: 12vw"
  >
    <div class="col-7">
      <img
        src="https://forspace.ba/wp-content/uploads/2020/09/Mobile.png"
        alt=""
      />
    </div>
    <div class="col-6">
      <h1 class="segeo-bold text-secondary"><b>PDV</b></h1>
      <h4><b>Automatska</b> obrada i knjiženje</h4>
      <div class="col-12">
        <div class="d-flex" v-for="p in pdv">
          <img class="img" :src="p.url" alt="" />
          <div>
            <h3>{{ $t(p.heading) }}</h3>
            <p>{{ $t(p.text) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFinanceTax",
  data() {
    return {
      pdv: [
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/icons8-profile.png",
          heading: "products_tax_heading_1",
          text: "products_tax_text_1",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/icons8-manual_page_rotation.png",
          heading: "products_tax_heading_2",
          text: "products_tax_text_2",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/icons8-tab_mac.png",
          heading: "products_tax_heading_3",
          text: "products_tax_text_3",
        },
        {
          url: "https://forspace.ba/wp-content/uploads/2020/09/icons8-math_book.png",
          heading: "products_tax_heading_4",
          text: "products_tax_text_4",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.d-flex {
  @media screen and (max-width: 567px) {
    flex-direction: column;
    .col-7,
    
    .col-6 {
      width: 90%;
      margin: auto;
      text-align: center;
    }
    .img {
      display: flex;
      justify-content: center;
      margin: 20px auto;

      width: 100px;
      height: 100px;
    }
  }
}
</style>
