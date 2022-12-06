<template>
  <div class="appointment">
    <div>
      <h1>{{ $t("appointment_schedule") }}</h1>
    </div>
  </div>
  <div class="appointment-content">
    <h1>{{ $t("appointment_heading") }}</h1>
    <p class="mt-5 mb-5">{{ $t("appointment_text") }}</p>
    <BaseButton :to="routes.route" :name="routes.name" />
  </div>
</template>
<script>
import BaseButton from "@/components/Forms/buttons/BaseButton.vue";
export default {
  name: "Appointment",
  components: { BaseButton },
  data() {
    return {
      routes: { route: "/contact", name: "termin" },
    };
  },
};
</script>
<style lang="scss" scoped>
.appointment {
  height: 50vh;
  background: linear-gradient(
      to right,
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6),
      rgba(8, 40, 67, 0.6)
    ),
    url("@/assets/images/purchase-2.jpg") no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 70%;
    margin: auto;
    padding-left: 2%;
  }
  h1 {
    font-size: 70px;
  }
  p {
    color: white;
  }
}
.appointment-content {
  min-height: 50vh;

  width: 70%;
  margin: 1% auto;
  padding: 2%;

  h1 {
    color: rgba(8, 40, 67, 0.6);
  }
}

@media screen and (max-width: 567px) {
  .appointment {
    div {
      width: 95%;
      padding-left: 0;
    }
  }
  .appointment-content {
    width: 95%;
    padding: 5% 0%;
  }
}
</style>
