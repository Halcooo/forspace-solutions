<template>
  <div class="cover row">
    <nav>
      <router-link to="/purchase">Purchase</router-link>
    </nav>

  </div>    <router-view></router-view>
</template>
<style lnag="scss" scoped>
.cover{
  background-image: url('@/assets/images/purchase-cover-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;

}</style>