@author Halid Lihovac
<template lang="">
  <div class="social-icons">
    <a
      href="https://www.facebook.com/Forspace-Solutions-104570971684748"
      target="blank"
      class="me-4 text-reset"
    >
      <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
    </a>
    <a
      href="https://www.instagram.com/forspace.ba/"
      target="blank"
      class="me-4 text-reset"
    >
      <font-awesome-icon icon="fa-brands fa-instagram" size="2x" />
    </a>
    <a
      href="https://www.linkedin.com/company/forspace-solutions/"
      target="blank"
      class="me-4 text-reset"
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
a {
  text-decoration: none;
  svg {
    width: 40px;
    &:hover {
      color: #f16822;
    }
  }
}
</style>
