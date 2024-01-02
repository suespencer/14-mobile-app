/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-2c32f-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

console.log(app)

const addBtn = document.getElementById("add-button");

const inputFieldEl = document.getElementById("input-field");

addBtn.addEventListener("click", function () {
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)

    console.log(`${inputValue} added to database`)
});
