<template>
  <div class="nums">
    <h2 class="mb-4">{{ $t("about_us_nums_heading") }}</h2>
    <div class="heading-flex">
      <h2>{{ $t("about_us_nums_established") }}</h2>
      <h2>{{ $t("about_us_nums_clients") }}</h2>
      <h2>{{ $t("about_us_nums_employed") }}</h2>
    </div>

    <div class="num-flex">
      <div class="label">
        <h3>{{ $t("about_us_nums_established") }}</h3>
      </div>
      <div class="year">
        <div>{{ roundedValyear }}y</div>
      </div>
      <div class="label">
        <h3>{{ $t("about_us_nums_clients") }}</h3>
      </div>
      <div class="client">
        <div>{{ roundedValcli }}+</div>
      </div>
      <div class="label">
        <h3>{{ $t("about_us_nums_employed") }}</h3>
      </div>
      <div class="emp">
        <div>{{ roundedValEmp }}+</div>
      </div>
    </div>
  </div>
</template>

<script>
import Line from "@/particles/Line.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "AboutNums",
  setup() {
    const years = ref(0);
    const clients = ref(0);
    const employees = ref(0);
    const year = ref(2020);
    const client = ref(80.1);
    const employee = ref(30);
    const speed = ref(100);
    const roundedValyear = ref(0);
    const roundedValcli = ref(0);
    const roundedValEmp = ref(0);
    window.addEventListener("scroll", () => {
      if (document.body.scrollHeight - 1700 < window.scrollY) {
        setInterval(() => {
          if (years.value < year.value) {
            years.value += year.value / speed.value;
            if (years.value > year.value) {
              roundedValyear.value = year.value;
            } else {
              roundedValyear.value = Math.round(years.value);
            }
          }
          if (clients.value < client.value) {
            clients.value += client.value / speed.value;
            roundedValcli.value = Math.round(clients.value);
          }
          if (employees.value < employee.value) {
            employees.value += employee.value / speed.value;
            roundedValEmp.value = Math.round(employees.value);
          }
        }, 111);
      }
    });
    return { roundedValyear, roundedValcli, roundedValEmp };
  },
  components: { Line },
};
</script>

<style lang="scss" scoped>
.nums {
  padding-top: 5%;
  h2 {
    text-align: center;
  }
  .num-flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: 0% auto 10% auto;
    gap: 20px;
    font-size: 70px;
    .year,
    .client,
    .emp {
      background-color: gainsboro;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
  h3{
    color:gray;
  }
  .heading-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 5% auto;
    > h3 {
      width: 100%;
      display: block;
    }
    h2{
      color:gray;
    }
  }
  .label {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .num-flex {
      width: 90%;
      margin-top: 10%;
      flex-direction: column;
      font-size: 35px;
    }
    .heading-flex {
      display: none;
    }
    .label {
      display: block;
    }
  }
}
@media screen and (max-width: 1000px) {
  .num-flex {
    font-size: 75px;
  }
}
</style>