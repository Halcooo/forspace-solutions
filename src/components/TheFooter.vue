<template>
  <div
    class="footer"
    data-aos="fade"
    data-aos-duration="1000"
    data-aos-anchor-placement="center-bottom"
  >
    <div class="info">
      <ul>
        <li>
          <h4><router-link to="/products">FORSPACE Proizvodi</router-link></h4>
        </li>
        <li>Računovodstvo</li>
        <li>Kontroling</li>
        <li>Ljudski resursi</li>
        <li>All-in-one ERP rješenje</li>
        <li>Upravljanje prodajom</li>
        <li>Mobilne aplikacije</li>
        <li>Zakon o zaštiti ličnih podataka</li>
      </ul>
      <p>
        Adresa: Bulevar Meše Selimovića 16, <br />71000 Sarajevo, Bosna i
        Hercegovina <br />
        Tel: +387 33 774 873 <br />info@forspace.ba
      </p>
    

      <div class="icons">
        <a href="https://www.linkedin.com/company/forspace-solutions/"
          ><font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="https://www.facebook.com/Forspace-Solutions-104570971684748">
          <font-awesome-icon icon="fa-brands fa-facebook"
        /></a>
        <a href="https://www.instagram.com/forspace.ba/">
          <font-awesome-icon icon="fa-brands fa-instagram"
        /></a>
       
      </div>
    </div> <p class="rights">© 2022 Forspace - All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
  components: {},
};
</script>
<style lang="scss" scoped>
.rights {
  justify-self: flex-end;
  vertical-align: bottom;
}
ul {
  list-style-type: none;
}
svg {
  color: white;
  padding: 5px;
  margin: 3px;
  &:hover {
    color: #f16822;
  }
}
.content {
  text-align: left;
  margin-left: 17vw;
}
p {
  color: white;
  text-align: left;
}
.info {
  margin-left: 15%;
  margin-right: 15%;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  color: white;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #f16822;
    }
  }
}
.footer {
  background-image: url("../assets/svg/login-background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  box-sizing: border-box;
}
.icons {
  display:flex;
  color: #fff;
  margin-top: 5vw;
  margin-bottom: 2vw;
  font-size: 2vw;

}
.rights{
  text-align: right;
  padding: 7px;
  margin:5px;
  margin-bottom: 0px;
}
</style>
