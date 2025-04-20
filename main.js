var addToCart = document.querySelector(".add-to-cart");
var cartQuantity = document.getElementById("quantity");
var total = document.getElementById("total");
var badge = document.getElementById("badge");
var quantity = document.querySelector(".quantity span");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var emptyCart = document.querySelector(".empty-cart");
var cartProduct = document.querySelector(".content");
var deleteProd = document.getElementById("delete");
var checkout = document.querySelector(".content button");

var mainImage = document.querySelector(".product-image img");
var thumbnails = document.querySelectorAll(".page-thumbs img");

var price = 125;
var count = 0;
var totalCount = 0;

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    quantity.innerHTML = count;
  }
});

plus.addEventListener("click", () => {
  count++;
  quantity.innerHTML = count;
});

addToCart.addEventListener("click", function () {
  if (count > 0) {
    badge.classList.remove("not-active");
    emptyCart.classList.add("disapear");
    cartProduct.classList.remove("disapear");
  }
  totalCount += count;
  badge.innerText = totalCount;
  cartQuantity.innerText = totalCount;
  total.innerText = `$${totalCount * price}`;
  count = 0;
  quantity.innerHTML = 0;
});

function checkoutOrDelete() {
  badge.classList.add("not-active");
  emptyCart.classList.remove("disapear");
  cartProduct.classList.add("disapear");
  totalCount = 0;
}

deleteProd.addEventListener("click", checkoutOrDelete);
checkout.addEventListener("click", checkoutOrDelete);

thumbnails.forEach(function (e) {
  e.addEventListener("click", function () {
    for (let i of thumbnails) {
      i.classList.remove("active");
    }
    e.classList.add("active");
    mainImage.src = e.src;
  });
});
