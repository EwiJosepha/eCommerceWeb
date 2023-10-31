import { displayallproducts, allCategories, categorydisplay, displaysingleproduct } from "./services/api.js";
import CreateNavbar from "./components/navbar.js";

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

async function displayCards(fetchData) {
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
  `
  });
}





export function previews() {
  const container5 = document.querySelector(".container5");

  if (container5) container5.innerHTML = `<div class="previews">
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



export function footer() {
  const container6 = document.querySelector(".container6");

  if (container6) container6.innerHTML = `<div class="footer">
  <h2 id="footer">Footer</h2>
</div>`;
}

footer();

// const subcard =document.querySelector('.subcard')
document.querySelector("#app").innerHTML;


// setupCounter(document.querySelector('#counter'))
