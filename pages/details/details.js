
import { displaysingleproduct } from "../../services/api.js"
import CreateNavbar from "../../components/navbar.js";

const gallery = document.querySelector('.gallery')

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


export async function displayCards(singleItem) {

  const top = document.querySelector(".container4");
  top.innerHTML = "";

    const arrImages = singleItem.thumbnail;
    top.innerHTML += `<div class="top">
    
      <div class="subcard" id="subcards">
     
      <a href="./details.html?=${singleItem.id}">
      <img src=${singleItem.thumbnail} id="details-page"/>
      <img src="${singleItem.images[0]}" id="details-page"/>
      <img src="${singleItem.images[1]}" id="details-page"/>
      <img src="${singleItem.images[2]}" id="details-page"/>
      <img src="${singleItem.images[3]}" id="details-page"/>

      </div>
      </a>
    </div> 

  `
  
}

export async function displayproductt() {

  const displayid = await displayCards(singleproduc, false)
  [singleproduc].forEach((item) => {
    gallery.innerHTML =
      ` <img src="${item.thumbnail}" id="img">
    <div class="controls">
      <span class="btn-active"></span>
      <span class="btn"></span>
      <span class="btn"></span>
    </div>
  
    <div class="top">
    
      <div class="subcard" id="subcards">
        <img src="${item.thumbnail}" id="details-page"/>
          <i class="fa-regular fa-heart"></i>
          </div>
          <div class="prev-next">
            <i class="fa-solid fa-chevron-left" id="prev"></i>
            <i class="fa-solid fa-chevron-right" id="next"></i>
          </div>
    </div>`
  })


}

displayproductt()

