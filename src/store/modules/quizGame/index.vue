<template>
  <main id="app">
    <h1>Quiz Game</h1>

    <section class="score">
      Player <span>0</span> x <span>0</span> Computer
    </section>

    <input type="radio" name="options" value="answer" />
    <label>True</label><br />

    <input type="radio" name="options" value="answer" />
    <label>False</label><br />

    <button class="send" type="button">Send</button>
  </main>
</template>


<script>
const url = "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium";

export default {
  name: "quiz_app",
};
</script>



<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;
}

h1 {
  margin-top: 40px;
}

input[type="radio"] {
  margin: 12px 4px;
}

button.send {
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background-color: #1867c0;
  border: 1px solid #1867c0;
  cursor: pointer;
}

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