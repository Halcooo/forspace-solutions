<template>
  <div class="appointment">
    <div>
      <h1>Dogovorite sastanak</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quasi
        autem quod quo obcaecati iure dolorem amet nihil distinctio vitae soluta
        ipsum rerum ab odit sunt voluptate, sequi aspernatur consequuntur?
      </p>
    </div>
  </div>
  <div class="appointment-content"></div>
</template>
<script>
export default {};
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
  border: 1px solid black;
}
</style>
