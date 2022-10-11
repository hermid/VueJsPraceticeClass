<template>
  <div id="app">
    <center class="bg-success p-2 mb-5">
      <h2 class="text-bold text-white">Vue Project</h2>
    </center>

    <cart_app> </cart_app>
  </div>
</template>




<script>
import cart_app from "./store/modules/cartApp/index";

export default {
  name: "App",
  components: {
    cart_app,
  },
};
</script>



<style>
</style>