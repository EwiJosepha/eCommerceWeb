
import { displaysingleproduct } from "../../services/api.js"
import CreateNavbar from "../../components/navbar.js";
import { displayCards } from "../../main.js";
import { displayallproducts } from "../../services/api.js";

let similarities =  []

await displayallproducts().then((res)=>{
  similarities = res
  displayCards(similarities)
  console.log(similarities);
})

const gallery = document.querySelector('.gal')

CreateNavbar("details");
// let category = document.getElementById("category");
// category.innerHTML = getJson.map(
//   (item) => `
//  <option id="category">${item}</option>`
// );

let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"
console.log(id) // 

let singleproduc = await displaysingleproduct(id)
console.log(singleproduc);


export async function displayCardss(singleItem) {

  const top = document.querySelector(".container4");
  top.innerHTML = "";

    // const arrImages = singleItem.thumbnail;
    top.innerHTML += `<div class="top">
    
      <div class="subcard" id="subcards">
     
      <a href="./details.html?=${singleItem.id}">
      <img src=${singleItem.thumbnail} id="details-page"/>
      </a>
      <a href="./details.html?=${singleItem.id}">
     
      <img src="${singleItem.images[0]}" id="details-page"/>
      </a>
      <a href="./details.html?=${singleItem.id}">
     
      <img src="${singleItem.images[1]}" id="details-page"/>
      </a>
      <a href="./details.html?=${singleItem.id}">
    
      <img src="${singleItem.images[2]}" id="details-page"/>
      </a>
      <a href="./details.html?=${singleItem.id}">

      <img src="${singleItem.images[3]}" id="details-page"/>
      </a>
    
      </div>
  
    </div> 

  `
  
}

export async function displayproductt() {

  const displayid = await displayCardss(singleproduc, false)
    gallery.innerHTML =
      ` <img src="${singleproduc.thumbnail}" id="img">`
 
}

displayproductt()

const design = document.querySelector(".design-mak")
export async function productname () {
  const displayer = singleproduc
  design.innerHTML= ` <h1>${singleproduc.title}</h1>`
}
productname ()

const reviews = document.querySelector(".review")
export async function productprice () {
  const displayerprice = singleproduc
  reviews.innerHTML= ` <h1>$${singleproduc.price}</h1>`
}
productprice ()

const descriptionn = document.querySelector(".container3")
export async function productdescript () {
  const displayerdescription = singleproduc
  descriptionn.innerHTML= `
  <h3 id="prod-description">Product Description</h3>
   <p>$${singleproduc.description}</p>`
}

productdescript ()

const displaybenefit = document.querySelector(".container3")
export  function productbenefit () {
 
 if( displaybenefit) displaybenefit.innerHTML= `
  <h3 id="prod-description">Product Benefit</h3>
  <div class="ckeckedd">
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


`
}

productbenefit()

const productdetails = document.querySelector(".container8")
export function productdetaills () {
  if( productdetails) productdetails.innerHTML = `  <h3 id="prod-description">Product Details</h3>
  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Not intended for use as Personal Protective Equipment (PPE)</P>
  </div>
  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>

  <P id="space">Water-repellent finish and internal membrane help keep your feet dry.</P>
  </div>`
}

productdetaills ()

const productmoredetails = document.querySelector(".container9")
export function productmoredetaills () {
  if(productmoredetails) productmoredetails.innerHTML = `  <h3 id="prod-description">More Details</h3>
  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Lunarlon midsole delivers ultra-plush responsiveness</P>
  </div>
  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Encapsulated Air-Sole heel unit for lightweight cushioning</P>
  </div>
  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>

  <P id="space">Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</P>
  </div>

  <div class="ckeckedd">
  <i class="fa-regular fa-circle-check"></i>
  <P id="space">Style: 805899-202</P>
  </div>`
}

productmoredetaills ()

  async function similaprod () {
  const similarproducts = document.querySelector(".containersimilar")

  if(similarproducts) similarproducts.innerHTML =   `<p id="hello">hello</p>
  `
  console.log(similarproducts);
  console.log(similarities);


}

similaprod ()

const divapp = document.getElementById('app')
divapp.innerHTML

