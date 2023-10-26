
export async function allCategories() {
  const allcategories = "https://dummyjson.com/products/categories"
  const fetchdata = await fetch(allcategories)
  const jasondata = await fetchdata.json()
  return jasondata
  console.log(jasondata);
}

export async function displayallproducts () {
  const products = "https://dummyjson.com/products"
  const productdata = await fetch(products)
  const data = await productdata.json()
  const targetProduct = data.products
  console.log(targetProduct);
}

displayallproducts ()


