let brushesItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
    name: "blend trend eyeshadow brush -043 - round xl",
    price: 399,
    rating: "4.8(6)",
    idtype: "eye",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
    name: "blend trend eyeshadow brush -042 - round",
    price: 399,
    rating: "4.4(5)",
    idtype: "eye",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
    name: "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
    price: 599,
    rating: "5(2)",
    idtype: "combo",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
    name: "Blend Trend Eyeshadow Brush - 041 Flat",
    price: 399,
    rating: "5(3)",
    idtype: "eye",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
    name: "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
    price: 599,
    rating: "5(2)",
    idtype: "combo",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",

    name: "Blend Trend Face Brush - 003 Contour",

    price: 399,
    rating: "4.5(13)",
    idtype: "face",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",

    name: "Blend Trend Face Brush - 006 highlighter",

    price: 399,
    rating: " 4.7(23)",
    idtype: "face",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",

    name: "Blend Trend Foundation Brush - 052 kabuki",
    price: 399,
    rating: " 4.8(26)",
    idtype: "foundation",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",

    name: "Blend Trend Foundation Brush - 001 blush",
    price: 399,
    rating: "4.9(15)",
    idtype: "foundation",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
    name: "Blend Trend Foundation Brush - 007 powder",
    price: 399,
    rating: "4.9(24)",
    idtype: "foundation",
  },
];

let itemCount = localStorage.getItem("itemsInCart") || 0; //For how may items are in the cart

localStorage.setItem("Brushes", JSON.stringify(brushesItems)); // store all data to localstorage
let brushDataLS = JSON.parse(localStorage.getItem("Brushes")); //getting all data from localstorage

displayItemCards(brushDataLS); // calling the displayItemCards function

function displayItemCards(brushDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    brushesItems.length + " " + "items";
  document.querySelector("#cards_container").innerHTML = "";
  brushDataLS.forEach(function (ele) {
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
    addCart.class = "cart";

    // adding functionality to add to cart btn

    addCart.addEventListener("click", function () {
      addToCartFunc(ele);
      itemCount++;
      localStorage.setItem("itemsInCart", itemCount);
    });

    let addwish = document.createElement("img");
    addwish.src = "https://img.icons8.com/material-outlined/344/like--v1.png";

    // adding functionality to wish cart btn
    addwish.addEventListener("click", function () {
      addTowishList(ele);
    });

    btnDiv.append(addwish, addCart);
    ratDiv.append(ratingIcon, itemRating);
    cardDiv.append(itemImg, itemName, itemPrice, ratDiv);
    card.append(cardDiv, btnDiv);
    document.querySelector("#cards_container").append(card);
  });
}

// creating add to cart function

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
  let filteredItem = brushDataLS.filter(function (ele) {
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
  let sortedItems = brushDataLS.sort(function (a, b) {
    return a.price - b.price;
  });

  displayItemCards(sortedItems);
});

// For sorting price high to low

document.querySelector("#highTolow").addEventListener("click", function () {
  let sortedItems = brushDataLS.sort(function (a, b) {
    return b.price - a.price;
  });

  displayItemCards(sortedItems);
});

// For clear all sorting items

document.querySelector("#clr").addEventListener("click", function () {
  window.location.reload();
});
