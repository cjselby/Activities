// create a new unordered list (ul) element
const newUnorderedList = document.createElement("ul");

// remove the paragraph element in the nav-bar
let paragraphToRemove = document.querySelector(".nav-bar").firstElementChild;
document.querySelector(".nav-bar").remove(paragraphToRemove);

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(newUnorderedList);

// create two new list item (li) elements, and add some text to them
const newList = document.createElement("li");
newList.textContent = "Some text";

const anotherNewList = document.createElement("li");
anotherNewList.textContent = "Some text";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(newList);
document.querySelector(".nav-bar > ul").appendChild(anotherNewList);
