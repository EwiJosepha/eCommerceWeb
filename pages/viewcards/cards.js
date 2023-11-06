import CreateNavbar from "../../components/navbar.js"
import { similaprod } from "../details/details.js"
// import displaysingleproduct from "../../services/api.js"

// let params = new URLSearchParams(document.location.search);
// let id = params.get("id"); // is the string "Jonathan"
// console.log(id); //
// let singleproduc = await displaysingleproduct(id)
// console.log(singleproduc);

const navbar = CreateNavbar("cards")
const cat = document.getElementById("category")
cat.style.display ="none"
const container = document.querySelector(".container1")
container .innerHTML = navbar

const container2 = document.querySelector(".container2")

const addedcards = JSON.parse(localStorage.getItem('addedcards'))

function displaycardsadded (value) {
  if(container2) container2.innerHTML = ""
  value?.forEach((item)=>{
    // const arrimages = item.images
    // console.log(arrimages);
 
    container2.innerHTML += `<div class="top">
  
    <div class="subcard" id="subcards">
   
    <a href="./pages/details/details.html?id=${item.id}">
    <img src=${item.thumbnail} id="details-page"/>
    </div>
    </a>

    <div class="snikersprice">
      <span id="snykers">${item.title}</span>
      <span id="snykers-price">$${item.price}</span>
    </div>
   

    <div class="shoes-available">
      <button id="remove">Remove from card</button>
    </div>         
  
  </div> `
  })

}

displaycardsadded (addedcards )
