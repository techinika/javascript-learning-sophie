// CREATE READ UPDATE DELETE

// STORAGE:
// 1. ARRAY_STORAGE
// 2. LOCAL_STORAGE
// 3. COOKIE_STORAGE

let data = [
  { id: 1, title: "Wake up", status: "undone" }, // 0
  { id: 2, title: "Learn JavaScript", status: "done" }, // 1
  { id: 3, title: "Work on the project", status: "done" }, // 2
];

// Read

for (let i = 0; i < data.length; i++) {
  todo(data[i]);
}

function todo(item) {
  let text = `This task: ${item.title}, number ${item["id"]}, is ${item["status"]}!`;

  document.body.innerHTML = text;
}

console.log(document.getElementsByTagName("section")[0]);

/** 
 * Tagname
 * Classname
 * Id
 **/

// console.log(data);

// data.push("Sophie", "String", 4, 6, 7);

// console.log(data);

// data.pop();

// console.log(data);

// data.shift();

// console.log(data);

// data.unshift("First");

// delete data[0];

// console.log(data);

// data.forEach((item) => {
//   renderTodo(item);
// });

// function renderTodo(todo) {
//   let ul = document.getElementsByClassName("list-items")[0];
//   let li = document.createElement("li");
//   let input = document.createElement("input");
//   input.setAttribute("type", "radio");
//   let p = document.createElement("p");

//   p.textContent = todo.title;

//   li.appendChild(input);
//   li.appendChild(p);

//   ul.appendChild(li);
// }
