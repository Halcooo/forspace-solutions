@author Halid Lihovac
<template >
  <div class="social-icons d-flex justify-center">
    <a
      href="https://www.facebook.com/Forspace-Solutions-104570971684748"
      target="blank"
      class="me-2 ms-2 text-reset d-flex justify-content-center align-center"
    >
      <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
    </a>
    <a
      href="https://www.instagram.com/forspace.ba/"
      target="blank"
      class="me-2 ms-2 text-reset d-flex justify-content-center align-center"
    >
      <font-awesome-icon icon="fa-brands fa-instagram" size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/company/forspace-solutions/"
      target="blank"
      class="me-2 ms-2 text-reset d-flex justify-content-center align-center"
    >
      <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
    </a>
  </div>
</template>
<script>
export default {
  name: "TheSocialIcons",
};
</script>
<style lang="scss" scoped>
@import "../styles/variables.scss";
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
  svg {
    width: 20px;

    &:hover {
      color: orange;
      opacity: 0.9;
    }
  }
}
@keyframes tr {
  from {
    transform: translate(0%, -100%);
  }
  to {
    transform: translate(0%, 0%);
  }
}
</style>
