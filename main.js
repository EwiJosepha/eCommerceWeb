import { displayallproducts, allCategories, categorydisplay, displaysingleproduct,displaybtnone, displaybtntwo } from "./services/api.js";
import CreateNavbar from "./components/navbar.js";
// import { parse } from "postcss";

CreateNavbar(); // create the navbar

const getJson = await allCategories();


let productrender = [];

displayallproducts()
  .then((res) => {
    productrender = res;
    displayCards(productrender);
  })
  .catch((err) => console.error(err));

console.log("Json Data", getJson);

console.log({ productrender });

// const category = document.getElementById('category')


// map and display cat
let category = document.getElementById("category");
category.innerHTML = getJson.map(
  (item) => `
 <option id="category">${item}</option>`
);

let selectedCategory = "";

category.addEventListener("input", async (e) => {
  category = e.target.value;
  selectedCategory = category;
  const res = await categorydisplay(category);

  productrender = res?.products;

  console.log({ category, productrender, res });

  displayCards(productrender);
  // top.style.display = "none"
  console.log(selectedCategory);

  return selectedCategory;
});

if (selectedCategory !== "") {
  productrender = productrender.filter(
    (item) => item.category === selectedCategory
  );
}

//display avatar section

export function avatarSection() {
  const container2 = document.querySelector(".container2");

  if (container2) container2.innerHTML = ` <div class="buy-now-section">
  <div class="grap-50">
    <h1 id="headphone">Grap up to 50% off on Selected Headphone</h1>

    <button id="buynow">Buy Now</button>
  </div>


  <div class="avatar">
  <img src="/images/My project 1.png" id="img">
</div>
</div>`;
}

avatarSection();

//display buttons section

export function buttons() {
  const container3 = document.querySelector(".container3");

  if (container3) container3.innerHTML = ` <div class="dropdown-buttons">
  <div class="price">
 <select id="headers"><option id="headers"> HeadePhone-type</option></select>
  <select id="headers"><option id="headers">Price</option></select>
  <select id="headers"><option id="headers">Review</option></select>
  <select id="headers"><option id="headers">Color</option></select>
  <select id="headers"><option id="headers">Material</option></select>
  <select id="headers"><option id="headers">Offer</option></select>
</div>

<div class="headphone-type">
<select id="headerss"><option id="headers"> HeadePhone-type</option></select>
</div>
</div>`;
}

buttons();



// const container4 = document.querySelector('.container4')
const top = document.querySelector(".containerthumb");
export async function displayCards(fetchData) {
  if (top) top.innerHTML = "";

  // const handleAddToCart = (item) => {
  //   console.log("hello mum", { item })
  // }

  const addEventListenersToAllAddtoCardButtons = () => {
    const allAddToCardBtns = document.querySelectorAll(".addtocard");

    allAddToCardBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const imageid = e.target.dataset.imageid;

        const itemToAdd = fetchData.find((pro) => +pro.id === +imageid)
        const addedProduts = JSON.parse(localStorage.getItem("addedcards")) || [];

        addedProduts.push(itemToAdd)

        console.log(itemToAdd);

        localStorage.setItem("addedcards", JSON.stringify(addedProduts));

        document.getElementById("items-selected").innerHTML = addedProduts.length // updating the item count

        alert("added");

      })
    })
  }


  fetchData?.forEach((item) => {
    const arrImages = item.images;

    if (top) top.innerHTML += `
      <div class="top">
      
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
        <span id="star" class="fa-star">${item.rating}</span>    
          <p id="number">(121)</p>
        </div>          
        <div class="date">
          <button id="addtocard" class="addtocard" data-imageid=${item.id}>Add to Card</button>
          <button id="shortlist">Short List</button>
        </div>
      </div>
    `
  });

  addEventListenersToAllAddtoCardButtons();
}





export function previews() {
  const container5 = document.querySelector(".container5");

  if (container5) container5.innerHTML = `<div class="previews">
  <button id="previews">Preview</button>
  <button id="previews" class="btnone">1</button>
  <button id="previews" class="btntwo">2</button>
  <button id="previews">3</button>
  <button id="previews">4</button>
  <button id="previews">5</button>
  <button id="previews">6</button>
  <button id="previews">7</button>
  <button id="previews">Next</button>
</div>`;
}

previews();


const prevone = document.querySelector(".btnone")
const btntwo = document.querySelector(".btntwo")
let ress
const oneprod =await displaybtnone ().then((res)=>{
   ress = res
  console.log(ress);
})

if(prevone)prevone.addEventListener("click",async ()=>{

top.innerHTML= "";
  ress.forEach((item)=>{
    console.log(ress);
    if(top)top.innerHTML += 
    `<div class="top">
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
    <span id="star" class="fa-star">${item.rating}</span>    
      <p id="number">(121)</p>
    </div>          
    <div class="date">
      <button id="addtocard" class="addtocard" data-imageid=${item.id}>Add to Card</button>
      <button id="shortlist">Short List</button>
    </div>
  </div>`
  })
 
})
let restwo
const secondprod =await displaybtntwo().then((res)=>{
   restwo = res
   restwo.filter((item)=>{
    item.id < 10 
   })
  console.log(ress);
})

if(btntwo)btntwo.addEventListener("click",async ()=>{

top.innerHTML= "";
  restwo.forEach((item)=>{
    console.log(restwo);
    if(top)top.innerHTML += 
    `<div class="top">
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
    <span id="star" class="fa-star">${item.rating}</span>    
      <p id="number">(121)</p>
    </div>          
    <div class="date">
      <button id="addtocard" class="addtocard" data-imageid=${item.id}>Add to Card</button>
      <button id="shortlist">Short List</button>
    </div>
  </div>`
  })
 
})



export function footer() {
  const container6 = document.querySelector(".container6");

  if (container6) container6.innerHTML = `<div class="footer">
  <h2 id="footer">Footer</h2>
</div>`;
}
footer();

document.querySelector("#app").innerHTML;
