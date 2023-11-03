
export default function CreateNavbar(current_page = "main") {
  const container1 = document.querySelector(".container1");

  let base_url = "./";

  if (current_page == "main") {
    base_url = "./pages/"
  } else {
    base_url = "../"
  }

  return container1.innerHTML = ` <div class="title">
  <h1 id="fashionhub"><i>FashionHub</i></h1>
  <div class="navlinks">
    <span><select id="category">
    <option>shoes</option>
    <option>bags</option>
    <option>hats</option>


    </select></span>
    <span id="brand">Brand</span>
   <a href="${base_url}contact/contact.html" id="contactdisplay"><span class="contactt">Contact</span><a/>
    <span id="faq">FAQ's</span>
  </div>
</div>

<div class="basket">
  <button id="basketimg">
    <span id="items-selected">3</span>
   <a href="http:${base_url}viewcards/cards.html"> <i class="fa-solid fa-bag-shopping" id="navto-nextp"></i></a>
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

}


// const getJson = await allCategories();
// let category = document.getElementById("category");
// category.innerHTML = getJson.map(
//   (item) => `
//  <option id="category">${item}</option>`
// );

// let selectedCategory = "";

// category.addEventListener("input", async (e) => {
//   category = e.target.value;
//   selectedCategory = category;
//   const res = await categorydisplay(category);

//   productrender = res?.products;

//   console.log({ category, productrender, res });

//   displayCards(productrender);
//   // top.style.display = "none"
//   console.log(selectedCategory);

//   return selectedCategory;
// });

// if (selectedCategory !== "") {
//   productrender = productrender.filter(
//     (item) => item.category === selectedCategory
//   );
// }
