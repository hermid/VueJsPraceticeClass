<template>
  <div id="app">
    <center class="bg-success p-2 mb-5">
      <h2 class="text-bold text-white">Vue Project</h2>
    </center>

    <todo_app> </todo_app>
  </div>
</template>




<script>
import todo_app from "./store/modules/todoApp/index";

export default {
  name: "App",
  components: {
    todo_app,
  },
};
</script>



<style>
</style>