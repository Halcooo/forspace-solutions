<template>
  <div class="nums">
    <h1 class="mb-4">{{ $t("about_us_nums_heading") }}</h1>
    <Line />
    <div class="heading-flex">
      <h1>Osnovano</h1>
      <h1>Klijenti</h1>
      <h1>Zaposlenih</h1>
    </div>

    <div class="num-flex">
      <div class="label">
        <h1>{{ $t("about_us_nums_established") }}</h1>
      </div>
      <div class="year">
        <div>{{ roundedValyear }} y</div>
      </div>
      <div class="label">
        <h1>{{ $t("about_us_nums_clients") }}</h1>
      </div>
      <div class="client">
        <div>{{ roundedValcli }} +</div>
      </div>
      <div class="label">
        <h1>{{ $t("about_us_nums_employed") }}</h1>
      </div>
      <div class="emp">
        <div>{{ roundedValEmp }} +</div>
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
    const client = ref(70);
    const employee = ref(30);
    const speed = ref(100);
    const roundedValyear = ref(0);
    const roundedValcli = ref(0);
    const roundedValEmp = ref(0);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 3000) {
        setInterval(() => {
          if (years.value < year.value) {
            years.value += year.value / speed.value;
            roundedValyear.value = Math.round(years.value);
          }
          if (clients.value < client.value) {
            clients.value += client.value / speed.value;
            roundedValcli.value = Math.round(clients.value);
          }
          if (employees.value < employee.value) {
            employees.value += employee.value / speed.value;
            roundedValEmp.value = Math.round(employees.value);
          }
        }, 100);
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
  h1 {
    text-align: center;
    color: gray;
  }

  .num-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0% auto 10% auto;
    gap: 20px;
    font-size: 100px;

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
  .heading-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 5% auto;

    > h1 {
      width: 100%;
      display: block;
      color: gray;
    }
  }
  .label {
    display: none;
  }
  @media screen and (max-width: 567px) {
    .num-flex {
      width: 90%;
      margin-top: 10%;
      flex-direction: column;
    }
    .heading-flex {
      display: none;
    }
    .label {
      display: block;
    }
  }
}
</style>
