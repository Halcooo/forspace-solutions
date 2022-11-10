<template>
  <div class="tech-stack">
    <h1 style="text-align: center">Technology stack</h1>
    <div class="stack">
      <div><font-awesome-icon icon="fa-brands fa-java" /></div>
      <div><font-awesome-icon icon="fa-brands fa-vuejs" /></div>
      <div><font-awesome-icon icon="fa-brands fa-react" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutStack",
};
</script>

<style lang="scss" scoped>
.tech-stack {
  background-color: rgb(234, 234, 234);
  width: 60%;

  margin: auto;
  margin-bottom: 4%;
  padding: 50px;
}
.stack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 30px;
  border-radius: 5px;
  margin-top: 4%;

  gap: 10px;
  > div {
    width: 100%;
    height: 100%;
    // background-color: blue;
    display: flex;
    font-size: 60px;
    justify-content: center;
    align-items: center;
  }
}
</style>
