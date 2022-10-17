<template>
  <main id="app">
    <ScoreBoard :playerWinPoints="winCount" :playerLosePoints="loseCount" />

    <template v-if="question">
      <h1 class="fw-bold" v-html="question"></h1>

      <template v-for="(ans, index) in answers" :key="index">
        <input
          :disabled="answerSubmitted"
          type="radio"
          name="options"
          :value="ans"
          v-model="chosenAnswer"
        />
        <label v-html="ans"></label>

        <br />
      </template>

      <button
        v-show="!answerSubmitted"
        @click="submitAnswer"
        class="send"
        type="button"
      >
        Send
      </button>

      <section class="result my-4" v-if="answerSubmitted">
        <template v-if="chosenAnswer === correctAnswer">
          <h4
            v-html="
              '&#9989; Congratulations, the answer ' +
              correctAnswer +
              ' is correct.'
            "
          ></h4>
        </template>
        <template v-else>
          <h4>
            &#10060; I'm sorry, you picked the wrong answer. The correct is
            "<span v-html="correctAnswer"></span>".
          </h4>
        </template>

        <button
          v-if="answerSubmitted"
          @click="getNewQuestion"
          class="send"
          type="button"
        >
          Next question
        </button>
      </section>
    </template>

    <template v-else>
      <img
        height="400"
        src="https://cdn.dribbble.com/users/935167/screenshots/2896660/project-loader-colors.gif"
      />
    </template>
  </main>
</template>


<script>
import ScoreBoard from "../../../components/ScoreBoard";

export default {
  name: "quiz_app",
  components: {
    ScoreBoard,
  },
  data: () => {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      answerSubmitted: false,
      winCount: 0,
      loseCount: 0,
    };
  },
  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert("you need to select an option");
      } else {
        this.answerSubmitted = true;

        if (this.chosenAnswer === this.correctAnswer) {
          this.winCount++;
        } else {
          this.loseCount++;
        }
      }
    },
    getNewQuestion() {
      this.answerSubmitted = false;
      this.chosenAnswer = undefined;
      this.question = undefined;

      this.axios
        .get("https://opentdb.com/api.php?amount=1&category=18")
        .then((response) => {
          const resp = response.data.results[0];

          this.question = resp.question;
          this.incorrectAnswers = resp.incorrect_answers;
          this.correctAnswer = resp.correct_answer;

          // console.log(response.data.results);
        });
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
    this.getNewQuestion();
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