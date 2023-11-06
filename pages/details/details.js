import { displaysingleproduct } from "../../services/api.js";
import CreateNavbar from "../../components/navbar.js";
import { displayCards, footer } from "../../main.js";
import { displayallproductsdata } from "../../services/api.js";

const gallery = document.querySelector(".gal");
const fashionhub = document.getElementById('fashionhub')
const a = document.createElement('a')
a.href = "../5501"
a.appendChild(fashionhub)
console.log(a);

CreateNavbar("details");
const itemselectedbasket = document.getElementById("items-selected");

let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"
console.log(id); //

let singleproduc = await displaysingleproduct(id);
console.log("single product", singleproduc);

let similarities = await displayallproductsdata().then(({ products }) =>
  products.filter((obj) => obj.category === singleproduc.category)
);
console.log(similarities);
// const cat = similarities[0].products

console.log(similarities);

const detailspage = document.getElementById('details-page')

// console.log(cat);
// console.log(c);

export async function displayCardss(singleItem) {
  const top = document.querySelector(".container4");
  top.innerHTML = "";
  console.log(singleItem);
  const singlimgs = singleItem.images
  console.log(singlimgs);

  // const arrImages = singleItem.thumbnail;
  if(singlimgs)singlimgs.forEach((item)=>{
    console.log(item);
    top.innerHTML += 
    `<div class="top">
  
    
    <div class="subcard" id="subcards">
   
    <img src="${item}" id="details-page"/>
   

  
    </div>

  </div> `
  })

    
  let indexxx = 0
let interval = setInterval(run, 2000)

function run () {
  indexxx++
  changee()
}

function changee () {
  if (indexxx > similarities.length - 1) {
    indexxx = 0
  } else if (indexxx < 0) {
    indexxx = immg.length - 1
    console.log(changee)
  }

  top.style.transform = `translateX(${-indexxx * 500}px)`
}

function resetInterval () {
  clearInterval(interval)
  interval = setInterval(run, 1000)
}
resetInterval ()

}



export async function displayproductt() {
  const displayid = await displayCardss(singleproduc, false);
  gallery.innerHTML = ` <img src="${singleproduc.thumbnail}" id="img">`;
}

displayproductt();




const design = document.querySelector(".design-mak");
export async function productname() {
  const displayer = singleproduc;
  design.innerHTML = ` <h2>${singleproduc.title}</h2>`;
}
productname();

const reviews = document.querySelector(".review");
export async function productprice() {
  const displayerprice = singleproduc;
  reviews.innerHTML = ` <h1>$${singleproduc.price}</h1>`;
}
productprice();

const descriptionn = document.querySelector(".mainlydescription");
export function productdescript() {
  const displayerdescription = singleproduc;
  if (descriptionn) descriptionn.innerHTML = `
  <div class="display-des">
  <h3 id="prod-description">Product Description</h3>
   <p id="pr"><i>${singleproduc.description
    }<i></p>
   </div>`

}

productdescript();

const displaybenefit = document.querySelector(".container3");
export function productbenefit() {
  if (displaybenefit)
    displaybenefit.innerHTML = `
  <h3 id="prod-description">Product Benefit</h3>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Water-repellent finish and internal membrane help keep your feet dry.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Durable leather is easily cleanable so you can keep your look fresh.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Toe piece with star pattern adds durability.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Toe piece with star pattern adds durability.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Toe piece with star pattern adds durability.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Synthetic insulation helps keep you warm.</p>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <p id="space">Originally designed for performance hoops, the Air unit delivers lightweight cushioning.</p>  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Plush tongue wraps over the ankle to help keep out the moisture and cold.</P>  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Rubber outsole with aggressive traction pattern adds durable grip.</P>  </div>


`;
}

productbenefit();

const productdetails = document.querySelector(".container8");
export function productdetaills() {

  productdetails.innerHTML = `  <h3 id="prod-description">Product Details</h3>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Not intended for use as Personal Protective Equipment (PPE)</P>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>

  <P id="space">Water-repellent finish and internal membrane help keep your feet dry.</P>
  </div>`;
  console.log(productdetails);
}

productdetaills();

const productmoredetails = document.querySelector(".container9");
export function productmoredetaills() {

  productmoredetails.innerHTML = `  <h3 id="prod-description">More Details</h3>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Lunarlon midsole delivers ultra-plush responsiveness</P>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Encapsulated Air-Sole heel unit for lightweight cushioning</P>
  </div>
  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>

  <P id="space">Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</P>
  </div>

  <div class="ckecked">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Style: 805899-202</P>
  </div>`;
}

productmoredetaills();

let semi = singleproduc;
 export async function similaprod(arProds) {
  const similarproducts = document.querySelector(".containersecond");
  console.log(similarproducts);
  console.log(similarities);
  // const arrim = arProds
  // console.log(arrim);

  // console.log(arProds);

  arProds.forEach((semii) => {
    console.log(arProds);
const arrimg = semii.images
    console.log(arrimg);
   
      
 

    similarproducts.innerHTML += `<div class="topp">
  
    <div class="subcardd" id="subcardss">
    
   
    <a href="./pages/details/details.html?id=${semii.id}">
    <img src=${semii.thumbnail} id="detailss-page"/>
    </div>
    </a>

    <div class="snikerspricee">
      <span id="snykers">${semii.title}</span>
      <span id="snykers-price">$${semii.price}</span>
    </div>
   

    <div class="shoes-available">
      <p id="shoes"> 5 types of shoes available</p>
    </div>
    <div class="stars">
    <span id="star" class="fa-star">${semii.rating}</span>
    </div>          
    <div class="date">
      <button id="addtocard">Add to Card</button>
      <button id="shortlist">Short List</button>
    </div>
    <div class="subcardd" id="subcardss">
  </div> 
`;

})
 

let indexxx = 0
let interval = setInterval(run, 2000)

function run () {
  indexxx++
  changee()
}

function changee () {
  if (indexxx > similarities.length - 1) {
    indexxx = 0
  } else if (indexxx < 0) {
    indexxx = immg.length - 1
    console.log(changee)
  }

  similarproducts.style.transform = `translateX(${-indexxx * 500}px)`
}

function resetInterval () {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}
resetInterval ()

}

similaprod(similarities);

const addtocard = document.getElementById("buttonn");

addtocard.addEventListener("click", (e) => {
  e.preventDefault();
  let addedProduts = JSON.parse(localStorage.getItem("addedcards")) || []
  addedProduts.push(singleproduc)

  console.log(addedProduts);

  localStorage.setItem("addedcards", JSON.stringify(addedProduts))
  itemselectedbasket.innerHTML = addedProduts.length;

  alert("added");

});


itemselectedbasket.innerHTML = (JSON.parse(localStorage.getItem("addedcards")) || []).length

const divapp = document.getElementById("app");
divapp.innerHTML;
