
export async function allCategories() {
  const allcategories = "https://dummyjson.com/products/categories"
  const fetchdata = await fetch(allcategories)
  const jasondata = await fetchdata.json()
  return jasondata
  console.log(jasondata);
}


