/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://realtime-database-60d98-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

console.log(app);

const addBtn = document.getElementById("add-button");
const inputFieldEl = document.getElementById("input-field");
const shoppingListEl = document.getElementById("shopping-list");
const booksInDB = ref(database, "books");

onValue(shoppingListInDB, function (snapshot) {
  let shoppingListArray = Object.values(snapshot.val());
  console.log(shoppingListArray);
  clearShoppingListEl();

  for (let i = 0; i < shoppingListArray.length; i++) {
    console.log(shoppingListArray[i]);
    appendItemToShoppingListEl(shoppingListArray[i]);
  }
});

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToShoppingListEl(inputValue) {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
}

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

addBtn.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  console.log(`${inputValue} added to database`);
  // appendItemToShoppingListEl(inputValue)
  clearInputFieldEl();
});
