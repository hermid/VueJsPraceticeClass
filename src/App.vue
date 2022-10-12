<template>
  <div id="app">
    <center class="bg-success p-2 mb-5">
      <h2 class="text-bold text-white">Vue Project</h2>
    </center>

    <form_app> </form_app>
  </div>
</template>




<script>
import form_app from "./store/modules/formInput/index";

export default {
  name: "App",
  components: {
    form_app,
  },
};
</script>



<style>
</style>