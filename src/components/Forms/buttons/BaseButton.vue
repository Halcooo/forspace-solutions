<template>
  <router-link :to="to" :class="name">
    {{ $t(name) }}
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["to", "name"],
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
}
.about_presentation {
  border-radius: 50px;
  padding: 40px 50px;
  background: rgb(255, 102, 0);
  color: white;
}
.about,
.presentation,
.product_btn {
  color: white;
  border: 2px solid rgb(255, 255, 255);

  border-radius: 50px;
  padding: 20px 50px;
  transition: 0.3s ease-out;

  &:hover {
    background: rgb(255, 102, 0);
    border: 2px solid rgb(255, 102, 0);
  }
}

.form,
.erp,
.contact {
  color: black;
  border: 2px solid black;
  padding: 20px 40px;

  transition: 0.3s ease-out;
  &:hover {
    background: rgb(255, 102, 0);
    border: 2px solid rgb(255, 102, 0);
    color: white;
  }
}

.product_middle {
  color: white;
  border: 2px solid white;
  padding: 20px 40px;

  transition: 0.3s ease-out;
  &:hover {
    background: rgb(255, 102, 0);
    border: 2px solid rgb(255, 102, 0);
  }
}
.product {
  border: 2px solid rgb(255, 102, 0);
  color: rgb(255, 102, 0);

  padding: 20px 40px;

  transition: 0.3s ease-out;
  &:hover {
    background: white;
    color: black;
    border: 2px solid black;
  }
}
</style>
