<template>
  <div class="wrapper">
    <div class="header-text">
      <HeaderText></HeaderText>
    </div>
  </div>
</template>
<script>
import HeaderText from "@/components/HomeView/HeaderText.vue"
export default {
  name: "HeaderHome",
  components:{
    HeaderText
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: url(@/assets/images/cover.png) center right no-repeat;
  height: 90vh;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: -1;
  background-size: cover;
  
}
.header-text{
  display: flex;
  position: absolute;
  color:white;
  align-items: center;
  justify-content: center;
  top:50%;
  left:25%;

}
</style>
