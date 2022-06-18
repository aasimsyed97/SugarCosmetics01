let eyeData=[ 
  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_5e8187e3-f7a2-40aa-a759-d4bf69769234.jpg?v=1639496327",  
    name: "Kohl Of Honour Intense Kajal - 01 Black Out (Black)",
    price: 249.00 ,
    rating: "4.8 (97)",
    idtype: "eye",    },

     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",  
    name: "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
    price:  499.00 ,
    rating: "4.8 (81)",
    idtype: "eye",    },

     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_dfe1216c-0850-458c-8838-0abd46fd57e1.jpg?v=1640676576",  
    name: "Arch Arrival Brow Definer",
    price: 499.00 ,
    rating: "4.8 (167)",
    idtype: "eye",    },

     { image: "",  
    name: "Kohl Of Honour Intense Kajals",
    price:  249.00,
    rating: "4.8 (321)",
    idtype: "eye",    },

     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-mixed-palette-01-cosmos-conqueror-27982322630739.jpg?v=1619155515",  
    name: "Wonder Woman Mixed Palette - 01 Cosmos Conqueror",
    price: 999.00  ,
    rating: "4.7 (14)",
    idtype: "eye",    },

     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wingman-waterproof-microliner-01-i-ll-be-black-black-28163915841619.jpg?v=1619117351",  
    name: "Wingman Waterproof Microliner - 01 I'll Be Black (Black)",
    price: 499.00  ,
    rating: "4.7 (169)",
    idtype: "eye",    },


     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-uptown-curl-lengthening-mascara-01-black-beauty-black-28122637828179.jpg?v=1619106532",  
    name: "Uptown Curl Lengthening Mascara - 01 Black Beauty (Black)",
    price:  499.00,
    rating: "4.8 (81)",
    idtype: "eye",    },

     { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594",  
    name: "Gloss Boss 24HR Eyeliner - 01 Back In Black (Black)",
    price:  499.00 ,
    rating: "4.8 (23)",
    idtype: "eye",    },

]


let itemCount = localStorage.getItem("itemsInCart") || 0; //For how may items are in the cart

localStorage.setItem("Makeup", JSON.stringify(eyeData)); // store all data to localstorage
let eyeDataLS = JSON.parse(localStorage.getItem("Makeup")); //getting all data from localstorage

displayItemCards(eyeDataLS); // calling the displayItemCards function

function displayItemCards(eyeDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    eyeData.length + " " + "items";
  document.querySelector("#cards_container").innerHTML = "";
  eyeDataLS.forEach(function (ele) {
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
  let filteredItem = eyeDataLS.filter(function (ele) {
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
  let sortedItems = eyeDataLS.sort(function (a, b) {
    return a.price - b.price;
  });

  displayItemCards(sortedItems);
});

// For sorting price high to low

document.querySelector("#highTolow").addEventListener("click", function () {
  let sortedItems = eyeDataLS.sort(function (a, b) {
    return b.price - a.price;
  });

  displayItemCards(sortedItems);
});

// For clear all sorting items

document.querySelector("#clr").addEventListener("click", function () {
  window.location.reload();
});
