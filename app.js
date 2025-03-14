fetch("https://dummyjson.com/products")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    updateUI(data.products);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const list = document.querySelector("#list");
const template = document.querySelector("template");
const btn = document.querySelector("#btn");

function updateUI(products) {
  products.forEach((p) => {
    const clone = template.content.cloneNode(true);

    const productImg = clone.querySelector(".products-img");
    const description = clone.querySelector(".description");
    const rating = clone.querySelector(".rating");
    const pricing = clone.querySelector(".pricing");

    if (productImg) {
      productImg.src = p.thumbnail;
      productImg.alt = p.title;
    }

    if (description) description.textContent = p.description;
    if (rating) rating.textContent = `⭐${p.rating} reviews`;
    if (pricing) pricing.textContent = `$${p.price}`;

    list.appendChild(clone);
  });
}
