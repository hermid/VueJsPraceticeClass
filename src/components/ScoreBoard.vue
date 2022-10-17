<template>
  <div>
    <section class="score">
      Player <span>{{ playerWinPoints }}</span> x
      <span>{{ playerLosePoints }}</span> Computer
    </section>
  </div>
</template>


<script>
export default {
  props: ["playerWinPoints", "playerLosePoints"],
};
</script>


<style lang="scss">
section.score {
  border-bottom: 1px solid black;
  padding: 24px;
  font-size: 18px;

  span {
    padding: 8px;
    font-weight: bold;
    border: 1px solid black;
  }
}
</style>