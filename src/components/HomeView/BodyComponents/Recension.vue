<template>
  <div class="testimonial">
    <div class="testimonial-top">
      <div class="testimonial-top-item-one">
      </div>
    </div>
    <div class="testimonial-bottom">
      <div class="bottom-flex">
        <div>
          <h2 class="text-light">
            {{ $t("recension_question") }} <br> {{ $t("recension_contact") }}
          </h2>
        </div>
        <BaseButton :to="routes_1.route_1" :name="routes_1.name_1" />
      </div>
    </div>
    <div class="testimonial-top-item-two">
      <p>{{ $t("recension_p") }}</p>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/Forms/buttons/BaseButton.vue";
import TestimonialSlider from "@/components/Sliders/TestimonialSlider.vue";
export default {
  name: "Recension",
  components: { TestimonialSlider, BaseButton },
  data() {
    return {
      routes_1: { route_1: "/contact", name_1: "faq" },
    };
  },
};
</script>
<style lang="scss" scoped>
.testimonial-top-item-two {
  width: 100%;
  padding-left: 5%;
  text-align: left;
}

.testimonial-bottom {
  width: 100%;
  height: 60vh;
  margin-bottom: 5%;
  background: linear-gradient(
      to right,
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7),
      rgb(0, 0, 0, 0.7)
    ),
    url("@/assets/images/dms-header.jpg") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 567px) {
    .testimonial {
      .testimonial-top {
        display: flex;
        flex-direction: column-reverse;
        width: 95%;
        height: 100%;
        margin: auto;

        .testimonial-top-item-two {
          position: relative;
          width: 100%;
          padding-left: 5%;
        }
      }
    }
  }
}
</style>
