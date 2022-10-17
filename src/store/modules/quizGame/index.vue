<template>
  <main id="app">
    <section class="score">
      Player <span>0</span> x <span>0</span> Computer
    </section>

    <template v-if="question">
      <h1 class="fw-bold" v-html="question"></h1>

      <template v-for="(ans, index) in answers" :key="index">
        <input
          type="radio"
          name="options"
          :value="ans"
          v-model="chosenAnswer"
        />
        <label v-html="ans"></label>

        <br />
      </template>

      <button @click="submitAnswer" class="send" type="button">Send</button>
    </template>
  </main>
</template>


<script>
export default {
  name: "quiz_app",
  data: () => {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
    };
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert("you need to select an option");
      } else {
        if (this.chosenAnswer == this.correctAnswer) {
          alert("you won");
        } else {
          alert("incorrect");
        }
      }
    },
  },
  computed: {
    answers() {
      var shuffuled_answers = JSON.parse(JSON.stringify(this.incorrectAnswers));

      var answers_array_length = shuffuled_answers.length + 1;
      // without +1, last slot is ommited because incorrectAnswers will exclude the correct answer from it's array

      var correct_answer_position = Math.round(
        Math.random() * answers_array_length
      );

      shuffuled_answers.splice(correct_answer_position, 0, this.correctAnswer);

      return shuffuled_answers;
    },
  },
  created() {
    this.axios.get("https://opentdb.com/api.php?amount=1").then((response) => {
      const resp = response.data.results[0];

      this.question = resp.question;
      this.incorrectAnswers = resp.incorrect_answers;
      this.correctAnswer = resp.correct_answer;

      // console.log(response.data.results);
    });
  },
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