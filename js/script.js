// CREATE READ UPDATE DELETE

// STORAGE:
// 1. ARRAY_STORAGE
// 2. LOCAL_STORAGE
// 3. COOKIE_STORAGE

let data = [
  { id: 1, title: "Wake up", status: "undone" },
  { id: 2, title: "Learn JavaScript", status: "done" },
  { id: 3, title: "Work on the project", status: "done" },
];

// Read

console.log(data);

data.forEach((item) => {
  renderTodo(item);
});

function renderTodo(todo) {
  let ul = document.getElementsByClassName("list-items")[0];
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.setAttribute("type", "radio");
  let p = document.createElement("p");

  p.textContent = todo.title;

  li.appendChild(input);
  li.appendChild(p);

  ul.appendChild(li);
}
