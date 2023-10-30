import {navbar} from "./main.js"
const firstContaine = document.querySelector(".container1")

function navdetailspage (){
  firstContaine.innerHTML = navbar()
}
navdetailspage()