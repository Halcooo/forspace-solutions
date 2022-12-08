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
  border: 2px solid rgba(8, 40, 67, 0.6);
  color: rgba(8, 40, 67, 0.6);
  background: transparent;
  padding: 20px 40px;

  transition: 0.3s ease-out;
  &:hover {
    background: white;
    color: rgb(0, 119, 128);
    border: 2px solid rgb(0, 119, 128);
  }
}

.faq,
.faq-2 {
  color: #333;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: none;
  height: 62px;
  margin-bottom: 1%;
  transition: 0.3s ease-out;
  &:hover {
    background: rgba(8, 40, 67, 0.8);
    border: none;
    color: white;
  }
}
</style>
