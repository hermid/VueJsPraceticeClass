<template>
  <div id="app">
    <center class="bg-success p-2 mb-5">
      <h2 class="text-bold text-white">Vue Project</h2>
    </center>

    <quiz_app> </quiz_app>
  </div>
</template>




<script>
import quiz_app from "./store/modules/quizGame/index";

export default {
  name: "App",
  components: {
    quiz_app,
  },
};
</script>



<style>
</style>