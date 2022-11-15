<template lang="">
   <div class="container d-flex justify-content-center map">
    <iframe
      width="1080"
      height="490"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=ForspaceSolutions&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="yes"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </div>
</template>
<script>
export default {
    name:'TheLocationMap'
}
</script>
<style lang="scss">
    .map{
        padding: 15px;
        background-color: azure;
    }
</style>