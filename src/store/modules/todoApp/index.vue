<template>
  <main id="app">
    <section class="todo-list">
      <h3>To-do List</h3>

      <div class="all-todos">
        <div class="single-todo done">
          <p>Learn HTML, CSS and Javascript</p>
        </div>
        <div class="single-todo done">
          <p>Learn the basics of Vue JS</p>
        </div>
        <div class="single-todo">
          <p>Complete Vue JS Challenge with excellence</p>
        </div>
      </div>

      <button class="clear">Clear All</button>

      <input type="text" placeholder="Add new to-do" />
      <button class="add">Add</button>

      <div class="instructions">
        Instructions:
        <ul>
          <li>Click the to-do text to toggle between done / undone</li>
          <li>Use clear all button to remove all items</li>
          <li>Use the input field to add new to-dos</li>
        </ul>
      </div>
    </section>
  </main>
</template>



<script>
export default {
  name: "todo_app",
};
</script>



<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 60px;
}

main .todo-list input {
  box-sizing: border-box;
  height: 28px;
  border-radius: 0.25rem;
  width: 80%;
  border: 1px solid lightgrey;
  margin-top: 32px;
}

main button {
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;
  height: 28px;
  border-radius: 0.25rem;
  color: #fff;
}

main button:hover {
  opacity: 0.8;
}

main button.add {
  background-color: #007bff;
  border: 1px solid #007bff;
  margin-left: 2px;
}

main button.clear {
  background-color: #dc3545;
  border: 1px solid #dc3545;
  display: block;
  margin: auto;
}

main button:focus {
  outline: 0;
}

main > section.todo-list h3 {
  text-align: center;
  margin-top: 24px;
  width: 100%;
}

main > section.todo-list {
  flex-wrap: wrap;
  border: 1px solid lightgrey;
  background-color: rgb(248, 248, 248);
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  text-align: center;
  border-radius: 0.25rem;
}

main .all-todos .single-todo {
  display: flex;
  align-items: center;
  justify-content: center;
}

main .all-todos .single-todo p {
  margin: 12px 0;
  cursor: pointer;
}

main .all-todos .single-todo.done p {
  text-decoration: line-through;
}

main .all-todos .single-todo button.remove {
  width: 12px;
  height: 12px;
  border: none;
  background: transparent url("img/remove.png") no-repeat center;
  background-size: contain;
  cursor: pointer;
  margin-left: 8px;
}

main > section.todo-list button.clear {
  margin-top: 24px;
}

div.instructions {
  font-size: 11px;
  margin-top: 40px;
  color: grey;
}

div.instructions ul {
  list-style: inside;
  text-align: center;
  padding: 0;
}

div.instructions ul li {
  margin: 4px auto;
}
</style>