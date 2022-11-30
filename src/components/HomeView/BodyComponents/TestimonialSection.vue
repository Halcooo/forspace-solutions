<template>
  <div class="testimonial">
    <div class="testimonial-top">
      <div class="testimonial-top-item-one">
        <div class="testimonial-box">
          <div class="quote-div">
            <!-- <font-awesome-icon icon="fa-solid fa-quote-left" /> -->
          </div>
          <div class="testimonial-square"></div>
          <!-- <TestimonialSlider :images="test" /> -->
        </div>
      </div>
      <div class="testimonial-top-item-two">
        <h1 class="text-secondary">Sta nasi klijenti kazu o nama</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          quaerat labore non recusandae, veritatis et tempora ex neque mollitia
          laboriosam magnam explicabo voluptatum nobis sequi sed asperiores
          assumenda maxime accusamus!
        </p>
      </div>
    </div>
    <div class="testimonial-bottom">
      <div class="bottom-flex">
        <div>
          <h1 class="text-light">
            Da li imate nekih pitanja ? Kontaktirajte nas.
          </h1>
        </div>
        <div class="button-group">
          <div>
            <BaseButton :to="routes_1.route_1" :name="routes_1.name_1" />
            <BaseButton :to="routes_2.route_2" :name="routes_2.name_2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
impor;
export default {
  name: "TestimonialSection",
  components: {},
  data() {
    return {
      test: [
        {
          id: 1,
          url: require("@/assets/images/asa-group-logo.png"),
          name: "about_us_client_one",
        },
        {
          id: 2,
          url: require("@/assets/images/prevent-logo.png"),
          name: "about_us_client_two",
        },
        {
          id: 3,
          url: require("@/assets/images/interior-logo-2.png"),
          name: "about_us_client_three",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
