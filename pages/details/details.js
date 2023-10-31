
import { displaysingleproduct } from "../../services/api.js"
import CreateNavbar from "../../components/navbar.js";

const gallery = document.querySelector('.gallery')

CreateNavbar("details");
// let category = document.getElementById("category");
// category.innerHTML = getJson.map(
//   (item) => `
//  <option id="category">${item}</option>`
// );

// const locationn= window.location.search
// const locationstring = new URLSearchParams(locationn)
// console.log(locationstring);
// let value = urlParams.get()
// console.log(value);

let singleproduc = await displaysingleproduct('9')
console.log(singleproduc);


export async function displayCards(singleItem) {

  const top = document.querySelector(".container4");
  top.innerHTML = "";

    const arrImages = singleItem.thumbnail;
    top.innerHTML += `<div class="top">
    
      <div class="subcard" id="subcards">
     
      <a href="./details.html?=${singleItem.id}">
      <img src=${singleItem.thumbnail} id="details-page"/>
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
        <img src="/images/jane.jpg" id="details-page"/>
        <img src="/images/jane.jpg" id="details-page"/>
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

