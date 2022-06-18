eybrushItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
    name: "blend trend eyeshadow brush -043 - round xl",
    price: 399,
    rating: "4.8(6)",
    idtype: "eyeshadow",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
    name: "blend trend eyeshadow brush -042 - round",
    price: 399,
    rating: "4.4(5)",
    idtype: "eyeshadow",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
    name: "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
    price: 599,
    rating: "5(2)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
    name: "Blend Trend Eyeshadow Brush - 041 Flat",
    price: 399,
    rating: "5(3)",
    idtype: "eyeshadow",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
    name: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
    price: 599,
    rating: "5(2)",
  },
];

let itemCount = localStorage.getItem("itemsInCart") || 0;

localStorage.setItem("eyeBrushes", JSON.stringify(eybrushItems));
let eyebrushDataLS = JSON.parse(localStorage.getItem("eyeBrushes"));

displayItemCards(eyebrushDataLS);

function displayItemCards(eyebrushDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    eyebrushDataLS.length + " " + "items";
  document.querySelector("#cards_container").innerHTML = "";
  eyebrushDataLS.forEach(function (ele) {
    let card = document.createElement("div");
    let cardDiv = document.createElement("div");
    let itemImg = document.createElement("img");
    itemImg.src = ele.image;

    let itemName = document.createElement("h3");
    itemName.innerText = ele.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerText = "Rs" + ele.price;

    let ratDiv = document.createElement("div");

    let itemRating = document.createElement("p");
    itemRating.innerText = ele.rating;
    let ratingIcon = document.createElement("img");
    ratingIcon.src = "	https://in.sugarcosmetics.com/star_filled.png";

    let btnDiv = document.createElement("div");
    let addCart = document.createElement("p");
    addCart.innerText = "Add to Cart";

    // adding functionality to add to cart btn

    addCart.addEventListener("click", function () {
      addToCartFunc(ele);
    });

    let addwish = document.createElement("img");
    addwish.src = "https://img.icons8.com/material-outlined/344/like--v1.png";

    // adding functionality to wish cart btn
    addwish.addEventListener("click", function () {
      addTowishList(ele);
      itemCount++;
      localStorage.setItem("itemsInCart", itemCount);
    });

    btnDiv.append(addwish, addCart);
    ratDiv.append(ratingIcon, itemRating);
    cardDiv.append(itemImg, itemName, itemPrice, ratDiv);
    card.append(cardDiv, btnDiv);
    document.querySelector("#cards_container").append(card);
  });
}

let cartItemsData = JSON.parse(localStorage.getItem("cartItems")) || [];
function addToCartFunc(ele) {
  cartItemsData.push(ele);
  localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
  alert("item added to cart successfuly");
}

let wishItemsData = JSON.parse(localStorage.getItem("wishList")) || [];

function addTowishList(ele) {
  wishItemsData.push(ele);
  localStorage.setItem("wishList", JSON.stringify(wishItemsData));
  alert("item added successfuly");
}

// filtering of the separate products using js DOM
// *****************************************************

// For check box apply

document.querySelector(".btn_sec").addEventListener("click", function () {
  let checkedValue = document.querySelector("input[type ='checkbox']:checked");
  let filteredItem = eyebrushDataLS.filter(function (ele) {
    return ele.idtype === checkedValue.value;
  });
  displayItemCards(filteredItem);
});

// For reset all check box
document.querySelector("#rset").addEventListener("click", function () {
  window.location.reload();
});

// For sorting price low to high

document.querySelector("#lowTohigh").addEventListener("click", function () {
  let sortedItems = eyebrushDataLS.sort(function (a, b) {
    return a.price - b.price;
  });

  displayItemCards(sortedItems);
});

// For sorting price high to low

document.querySelector("#highTolow").addEventListener("click", function () {
  let sortedItems = eyebrushDataLS.sort(function (a, b) {
    return b.price - a.price;
  });

  displayItemCards(sortedItems);
});

// For clear all sorting items

document.querySelector("#clr").addEventListener("click", function () {
  window.location.reload();
});
