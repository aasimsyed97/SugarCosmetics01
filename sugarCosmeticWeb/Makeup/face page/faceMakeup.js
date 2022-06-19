let faceData=[ 
       
  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",  
  name: "Mettle Priming Balm",
  price: 1099.00 ,
  rating: "(0)",
  idtype: "face",    },

  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_547e9188-e44c-4cf7-a32e-fc0f410e8062.jpg?v=1651852720",  
  name: "Bling Leader Illuminating Sunscreen SPF35 PA+++",
  price: 599.00 ,
  rating: "4.8 (4)",
  idtype: "face",    },

  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_38c752dc-1e96-4081-ab65-74840818bfa1.jpg?v=1648654876",  
  name: "Citrus Got Real Cooling Stick (GM599)",
  price: 399.00  ,
  rating: "4.5 (8)",
  idtype: "face",    },


  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_2170e342-a8fc-4fb4-a5ea-5f0c8bedbfdf.jpg?v=1652942866",  
  name: "The Most Eligiblur Correcting Primer",
  price: 799.00 ,
  rating: "5.0 (10)",
  idtype: "face",    },


  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/3_7.jpg?v=1626795160",  
  name: "All Set To Go Translucent Powder",
  price: 599.00 ,
  rating: "4.8 (207)",
  idtype: "face",    },


  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",  
  name: "Base Of Glory Pore Minimizing Primer",
  price:799.00 ,
  rating: "4.8 (269)",
  idtype: "face",    },

  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-12785043177555.jpg?v=1619102639",  
  name: "Contour De Force Mini Blush",
  price: 349.00 ,
  rating: "4.8 (148)",
  idtype: "face",    },

  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-dream-cover-spf15-mattifying-compact-10-latte-light-12775602454611.jpg?v=1619106458",  
  name: "Dream Cover SPF15 Mattifying Compact",
  price: 499.00 ,
  rating: "4.7 (223)",
  idtype: "face",    },

  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-bling-leader-illuminating-moisturizer-01-gold-diggin-warm-gold-with-a-pearl-finish-13644788006995.jpg?v=1619115785",  
  name: "Bling Leader Illuminating Moisturizer",
  price:  499.00,
  rating: "4.7 (143)",
  idtype: "face",    },

  ] 


let itemCount = localStorage.getItem("itemsInCart") || 0; //For how may items are in the cart

localStorage.setItem("Makeup", JSON.stringify(faceData)); // store all data to localstorage
let faceDataLS = JSON.parse(localStorage.getItem("Makeup")); //getting all data from localstorage

displayItemCards(faceDataLS); // calling the displayItemCards function

function displayItemCards(faceDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    faceData.length + " " + "items";
  document.querySelector("#cards_container").innerHTML = "";
  faceDataLS.forEach(function (ele) {
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
// ################################################

// ###For check box apply###

document.querySelector(".btn_sec").addEventListener("click", function () {
  let checkedValue = document.querySelector("input[type ='checkbox']:checked");
  let filteredItem = faceDataLS.filter(function (ele) {
    return ele.idtype === checkedValue.value;
  });
  displayItemCards(filteredItem);
});

// ###For reset all check box###
document.querySelector("#rset").addEventListener("click", function () {
  window.location.reload();
});

// For sorting price low to high

document.querySelector("#lowTohigh").addEventListener("click", function () {
  let sortedItems = faceDataLS.sort(function (a, b) {
    return a.price - b.price;
  });

  displayItemCards(sortedItems);
});

// For sorting price high to low

document.querySelector("#highTolow").addEventListener("click", function () {
  let sortedItems = faceDataLS.sort(function (a, b) {
    return b.price - a.price;
  });

  displayItemCards(sortedItems);
});

// For clear all sorting items

document.querySelector("#clr").addEventListener("click", function () {
  window.location.reload();
});
