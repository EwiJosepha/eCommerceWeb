// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import { allCategories, displayallproducts} from "./api.js"


//<div>
{/* <a href="https://vitejs.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
</a>
<h1>Hello Vite!</h1>
<div class="card">
  <button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
  Click on the Vite logo to learn more
</p>
</div> */}

//landing page ui

const  getJson = await allCategories()
const productrender = await displayallproducts()

console.log("Json Data",getJson)



const container1 = document.querySelector(".container1")
// const category = document.getElementById('category')

export function navbar () {

   container1.innerHTML = ` <div class="title">
  <h1 id="fashionhub"><i>FashionHub</i></h1>
  <div class="navlinks">
    <span><select id="category">
    <option>shoes</option>
    <option>bags</option>
    <option>hats</option>


    </select></span>
    <span id="brand">Brand</span>
    <span id="contact">Contact</span>
    <span id="faq">FAQ's</span>
  </div>
</div>

<div class="basket">
  <button id="basketimg">
    <span id="items-selected">3</span>
    <i class="fa-solid fa-bag-shopping"></i>
  </button>
  <button id="bell">
    <span id="bells"></span>
    <i class="fa-regular fa-bell"></i>
  </button>
  <div class="title-image">
    <img src="https://media.istockphoto.com/id/1253920275/fr/photo/femme-avec-le-b%C3%A9b%C3%A9-nouveau-n%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=zIRObcgZ_XtXXZqWlRk_VptXdvd00YiX_vHEH7lwkqg=">
    <div class="name">
      <span id="gmorning">Good morning</span>
      <span id="johnson">Scarlet Johnson</span>
    </div>
  </div>
</div>

`
// allCategories (category)

}

navbar ()

// map and display cat

document.getElementById('category').innerHTML = getJson.map((item)=> `
 <option id="category">${item}</option>`)

 //display avatar section

const container2 = document.querySelector(".container2")
 export function avatarSection () {
  return container2.innerHTML = `       <div class="buy-now-section">
  <div class="grap-50">
    <h1 id="headphone">Grap up to 50% off on Selected Headphone</h1>

    <button id="buynow">Buy Now</button>
  </div>


  <div class="avatar">
  <img src="/images/My project 1.png" id="img">
</div>`
}

avatarSection ()

//display buttons section
const container3 = document.querySelector('.container3')

export function buttons () {
  return container3.innerHTML = `        <div class="dropdown-buttons">
  <div class="price">
  <button class="dropdownn"><select id="headers"><option id="headers"> HeadePhone-type</option></select></button>
  <button class="dropdown"><select id="headers"><option id="headers">Price</option></select></button>
  <button class="dropdown"><select id="headers"><option id="headers">Review</option></select></button>
  <button class="dropdown"><select id="headers"><option id="headers">Color</option></select></button>
  <button class="dropdown"><select id="headers"><option id="headers">Material</option></select></button>
  <button class="dropdown"><select id="headers"><option id="headers">Offer</option></select></button>
</div>

<div class="headphone-type">
  <button class="dropdownn"><select id="headers"><option id="header"> HeadePhone-type</option></select></button>
</div>
</div>`
}

buttons ()

const container4 = document.querySelector('.container4')

export function displayCards () {
 container4.innerHTML = `<div class="top">
  <div class="subcard">
 
   </div>

   <div class="snikersprice">
    <span id="snykers">XY-Snikers</span>
    <span id="snykers-price">$ -XY-Snikers</span>
   </div>

   <div class="shoes-available">
    <p id="shoes"> 5 types of shoes available</p>
   </div>
  <div class="stars">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <p id="number">(121)</p>
  </div>          
  <div class="date">
    <button id="addtocard">Add to Card</button>
    <button id="shortlist">Short List</button>
  </div>
</div>`
}

const subcard = document.querySelector(".subcard").innerHTML = productrender.map((item)=>{
  `<img
  ${item.thumbnail}>
  <i class="fa-regular fa-heart"></i>`
})

displayCards ()


document.querySelector('#app').innerHTML 




// setupCounter(document.querySelector('#counter'))
