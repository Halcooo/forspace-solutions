<template>
  <div class="nums">
    <h1>Forspace u brojkama</h1>
    <div class="heading-flex">
      <h1>Osnovano</h1>
      <h1>Klijenti</h1>
      <h1>Zaposlenih</h1>
    </div>

    <div class="num-flex">
      <div class="label"><h1>Osnovano</h1></div>
      <div class="year">
        <div>{{ roundedValyear }} y</div>
      </div>
      <div class="label"><h1>Klijenti</h1></div>
      <div class="client">
        <div>{{ roundedValcli }} +</div>
      </div>
      <div class="label"><h1>Zaposlenih</h1></div>
      <div class="emp">
        <div>{{ roundedValEmp }} +</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "AboutNums",

  setup() {
    const years = ref(0);
    const clients = ref(0);
    const employees = ref(0);

    const year = ref(2020);
    const client = ref(10);
    const employee = ref(30);

    const speed = ref(100);

    const roundedValyear = ref(0);
    const roundedValcli = ref(0);
    const roundedValEmp = ref(0);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 2800) {
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
};
</script>

<style lang="scss" scoped>
.nums {
  h1 {
    text-align: center;
  }

  .num-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
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
