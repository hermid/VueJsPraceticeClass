<template>
  <main>
    <h1>
      {{ products }}
    </h1>
  </main>
</template>


<script>
export default {
  name: "cart_app",
  data: () => {
    return {
      products: [],
    };
  },
};
</script>


<style>
</style>
