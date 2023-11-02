import CreateNavbar from "../../components/navbar.js"

const navbar = CreateNavbar("cards")
const container = document.querySelector(".container1")
container .innerHTML = navbar

const container2 = document.querySelector(".container2")

const addedcards = JSON.parse(localStorage.getItem('addedcards'))

function displaycardsadded (value) {

  value.forEach((item)=>{
    container2.innerHTML += `<div class="top">
  
    <div class="subcard" id="subcards">
   
    <a href="./pages/details/details.html?id=${item.id}">
    <img src=${item.thumbnail} id="details-page"/>
    <i class="fa-regular fa-heart"></i>
    </div>
    </a>

    <div class="snikersprice">
      <span id="snykers">${item.title}</span>
      <span id="snykers-price">$${item.price}</span>
    </div>
   

    <div class="shoes-available">
      <p id="shoes"> 5 types of shoes available</p>
    </div>
    <div class="stars">
    <i class="fa-regular fa-star" id="star"></i>
    <i class="fa-regular fa-star" id="star""></i>
    <i class="fa-regular fa-star" id="star"></i>
    <i class="fa-regular fa-star" id="star"></i>
  
      <p id="number">(121)</p>
    </div>          
    <div class="date">
      <button id="addtocard">Add to Card</button>
      <button id="shortlist">Short List</button>
    </div>
  </div> `
  })

}

displaycardsadded (addedcards )
