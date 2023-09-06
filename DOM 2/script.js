/**
 * Body
 * --document.body
 * Head
 * --document.head
 * Title
 * --document.title
 * HTML
 * --document.documentElement
 * ChildNodes of Body
 * --document.body.childNodes
 */

/**
 * Identifier
 * --id (getElementById) ==> (querySelector("#id"))
 * --class (getElementByClassName) ==> (querySelector(".class"))
 * --tagname (getElementByTagName('li')[0]) ==> (querySelector("tagname"))
 * Methods:
 * --getElement
 * --querySelector
 */

let lists = document.getElementsByTagName("li");
let container = document.getElementsByClassName("container");
let classOne = document.querySelector(".container");

let home = document.getElementById("home");
let homeOne = document.querySelectorAll("#home");

/**
 * What can you do with an element you capture?
 * --Changing the syle (colors, fontSize, etc...)
 * ----font-size = fontSize
 * ----background-color = backgroundColor
 * ----background-image = backgroundImage
 * ----background-size = backgroundSize
 * ----background-style = backgroundStyle
 * ----background-repeat = backgroundRepeat
 * ----background-size = backgroundSize
 * ----background-repeat = backgroundRepeat
 * --Modifying Text
 * ----Change Text
 * ----Get text and submit or use it
 * ----Validate the text
 * ----Show the text on HTML page
 * We can also create elements
 */

// Styles
home.style.padding = "20px";
home.style.border = "1px solid black";
home.style.outline = "none";

// container[1].classList = "nav container";

// Text Modification

function clicked() {
  alert("Clicked");
}

let btn = document.getElementById("btn");

// btn.oncontextmenu(function (ev) {
//   console.log(ev);
// });

btn.addEventListener("contextmenu", (ev) => {
  container[0].firstElementChild.innerHTML = `The event ${ev.type} was applied to the button.`;
});
