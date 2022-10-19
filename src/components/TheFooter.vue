<template>
  <div class="footer">
    <div class="icons">
      <p>PRATITE NAS</p>
      <a href="https://www.linkedin.com/company/forspace-solutions/"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="https://www.facebook.com/Forspace-Solutions-104570971684748">
        <i class="fab fa-facebook"> </i
      ></a>
      <a href="https://www.instagram.com/forspace.ba/">
        <i class="fab fa-instagram"> </i
      ></a>
    </div>
    <div class="info">
      <h4><a href="">FORSPACE Proizvodi</a></h4>

      <p>Računovodstvo</p>
      <p>Kontroling</p>
      <p>Ljudski resursi</p>
      <p>All-in-one ERP rješenje</p>
      <p>Upravljanje prodajom</p>
      <p>Mobilne aplikacije</p>
      <p>Zakon o zaštiti ličnih podataka</p>
      <br /><br />
      <h4>FORSPACE Usluge</h4>
      <br />
      <h4><a href="">Kontaktirajte nas</a></h4>
      <p>
        Adresa: Bulevar Meše Selimovića 16, <br />71000 Sarajevo, Bosna i
        Hercegovina <br />
        Tel: +387 33 774 873 <br />info@forspace.ba
      </p>

      <p><b>© 2021 Forspace - All Rights Reserved</b></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheFooter",
};
</script>
<style lang="scss" scoped>
.content {
  text-align: left;
  margin-left: 17vw;
}
p {
  color: white;
  text-align: left;
}
.info {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
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
  margin-left: 17vw;
  color: #fff;
  margin-top: 5vw;
  margin-bottom: 1vw;
  display: inline-block;
  font-size: 2vw;
}
</style>
