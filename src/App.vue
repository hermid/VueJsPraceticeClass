<template>
  <div id="app">
    <header>
      <h1>Vue Styling</h1>
    </header>
    <pre>
      show_p1 = {{ show_p1 }}
    </pre>
    <section id="assignment">
      <!-- 1) Fetch the user input and use it as a CSS class -->
      <!-- The entered class should be added to the below paragraph -->
      <input type="text" v-model="user_input" />
      <!-- (available classes: "user1", "user2") -->
      <p :class="p1Style">Style me!</p>
      <button @click="toogleBtn()">Toggle Paragraph</button>
      <!-- 2) Use the "visible" and "hidden" classes to show/ hide the above paragraph -->
      <!-- Clicking the button should toggle between the two options -->

      <!-- 3) Add dynamic inline styling to the below paragraph and let the user enter a background-color -->
      <input type="text" v-model="user_input2" />
      <p :style="{ background: p2Style }">Style me inline!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      user_input: "",
      user_input1_filled: false,
      user_input2: "",
      user_input2_filled: false,
      show_p1: true,
    };
  },
  methods: {
    toogleBtn() {
      this.show_p1 = !this.show_p1;
    },
  },
  computed: {
    p1Style() {
      return this.user_input1_filled ? this.user_input : "";
    },
    p2Style() {
      return this.user_input2_filled ? this.user_input2 : "";
    },
  },
  watch: {
    user_input() {
      if (this.user_input !== "") {
        this.user_input1_filled = true;
      }
    },
    user_input2() {
      if (this.user_input2 !== "") {
        this.user_input2_filled = true;
      }
    },
  },
};
</script>





<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#assignment {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#assignment h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}

#assignment input {
  font: inherit;
  border: 1px solid #ccc;
}

#assignment input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#assignment button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#assignment button:hover,
#assignment button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.user1 {
  background-color: blue;
  color: white;
}

.user2 {
  background-color: purple;
  color: white;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}
</style>
