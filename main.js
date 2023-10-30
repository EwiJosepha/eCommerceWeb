import { displayallproducts, allCategories, categorydisplay } from "./api.js";

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

const container1 = document.querySelector(".container1");
// const category = document.getElementById('category')

export function navbar() {
  container1.innerHTML = ` <div class="title">
  <h1 id="fashionhub"><i>FashionHub</i></h1>
  <div class="navlinks">
    <span><select id="category">
    <option>shoes</option>
    <option>bags</option>
    <option>hats</option>


    </select></span>
    <span id="brand">Brand</span>
   <a href="./contact.html" id="contactdisplay"><span id="contact">Contact</span><a/>
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

`;
  // allCategories (category)
}

navbar();

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

const container2 = document.querySelector(".container2");
export function avatarSection() {
  return (container2.innerHTML = ` <div class="buy-now-section">
  <div class="grap-50">
    <h1 id="headphone">Grap up to 50% off on Selected Headphone</h1>

    <button id="buynow">Buy Now</button>
  </div>


  <div class="avatar">
  <img src="/images/My project 1.png" id="img">
</div>
</div>`);
}

avatarSection();

//display buttons section
const container3 = document.querySelector(".container3");

export function buttons() {
  return (container3.innerHTML = ` <div class="dropdown-buttons">
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
</div>`);
}

buttons();



// const container4 = document.querySelector('.container4')

export function displayCards(fetchData) {
  const top = document.querySelector(".container4");
  top.innerHTML = "";

  fetchData?.forEach((item) => {
    const arrImages = item.images;

    // const subcard = document.getElementById('subcards')
    // const img = document.createElement('img')
    // img.src = `${item.thumbnail}`
    // subcard.appendChild(img)
  

    top.innerHTML += `<div class="top">
    
      <div class="subcard" id="subcards">
     
      <a href="./details.html">
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
      <img src="images/Star.png">
      <img src="images/Star.png">
      <img src="images/Star.png">
      <img src="images/Star.png">
      <img src="images/Star (1).png">
        <p id="number">(121)</p>
      </div>          
      <div class="date">
        <button id="addtocard">Add to Card</button>
        <button id="shortlist">Short List</button>
      </div>


    </div>
   
 
  `;

 });

  
}





const container5 = document.querySelector(".container5");
export function previews() {
  container5.innerHTML = `<div class="previews">
  <button id="previews">Preview</button>
  <button id="previews">1</button>
  <button id="previews">2</button>
  <button id="previews">3</button>
  <button id="previews">4</button>
  <button id="previews">5</button>
  <button id="previews">6</button>
  <button id="previews">7</button>
  <button id="previews">Next</button>
</div>`;
}

previews();

const container6 = document.querySelector(".container6");

export function footer() {
  container6.innerHTML = `<div class="footer">
  <h2 id="footer">Footer</h2>
</div>`;
}

footer();

// const subcard =document.querySelector('.subcard')
document.querySelector("#app").innerHTML;


// setupCounter(document.querySelector('#counter'))
