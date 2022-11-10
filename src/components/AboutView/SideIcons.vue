<template>
  <div class="icons">
    <p class="line fa">
      <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
    </p>
    <p class="line in">
      <font-awesome-icon icon="fa-brands fa-instagram" size="2x" />
    </p>
    <p class="line li">
      <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.icons {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);

  .line {
    color: white;
    margin: 0;
    padding: 7px;
  }
  .fa {
    background-color: rgb(26, 74, 146);
  }
  .in {
    background-color: rgb(255, 98, 0);
  }
  .li {
    background-color: gray;
  }
}
</style>
