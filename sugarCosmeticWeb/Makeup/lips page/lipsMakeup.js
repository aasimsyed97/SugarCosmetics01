let lipsData=[ 
  { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Artboard1_90984581-f570-4ecb-be91-fd832dd206e5.jpg?v=1644813262",  
    name: "Air Kiss Powder Lipstick",
    price:  499.00 ,
    rating: "4.7 (53)",
    idtype: "lips",    },

    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-everlasting-matte-lipstick-07-fervour-peachy-nude-brown-27982211088467.jpg?v=1619155349",  
    name: "Wonder Woman Everlasting Matte Lipstick",
    price:    799.00 ,
    rating: "4.8 (35)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-24-hr-lip-lacquer-01-dreamella-deep-berry-27982300381267.jpg?v=1619155028",  
    name: "Wonder Woman 24 HR Lip Lacquer",
    price:  699.00   ,
    rating: "4.6 (28)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_bf17a76c-096c-47c4-ab6a-113c04b43213.jpg?v=1644593898",  
    name: "Matte Attack Transferproof Lipstick",
    price:  699.00   ,
    rating: "4.7 (428)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562",  
    name: "Matte as Hell Crayon Mini Lipstick - 01 Scarlett O'Hara",
    price:  199.00   ,
    rating: "4.8 (263) ",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/PlumYum-SMNLLMini.jpg?v=1646117565",  
    name: "Smudge Me Not Liquid Mini Lipstick - 04 Plum Yum (Muted Plum)",
    price: 249.00 ,
    rating: "4.9 (13)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-01-brazen-raisin-burgundy-28190640013395.jpg?v=1619100870",  
    name: "Smudge Me Not Liquid Lipstick",
    price:   499.00  ,
    rating: "4.8 (352)",
    idtype: "lips",   },



    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_bf17a76c-096c-47c4-ab6a-113c04b43213.jpg?v=1644593898",  
    name: "Matte Attack Transferproof Lipstick",
    price:   699.00  ,
    rating: "4.7 (428)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_ed958629-9a7a-4b4a-816e-311bff049996.jpg?v=1644594010",  
    name: "Matte Attack Transferproof Lipstick - 06 Spring Crimson (Crimson Red)",
    price:   699.00  ,
    rating: "5.0 (3)",
    idtype: "lips",    },


    { image: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",  
    name: "Matte As Hell Crayon Lipstick",
    price:    799.00 ,
    rating: "4.8 (945)",
    idtype: "lips",    },




]


let itemCount = localStorage.getItem("itemsInCart") || 0; //For how may items are in the cart

localStorage.setItem("Makeup", JSON.stringify(lipsData)); // store all data to localstorage
let lipsDataLS = JSON.parse(localStorage.getItem("Makeup")); //getting all data from localstorage

displayItemCards(lipsDataLS); // calling the displayItemCards function

function displayItemCards(lipsDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    lipsData.length + " " + "items";
  document.querySelector("#cards_container").innerHTML = "";
  lipsDataLS.forEach(function (ele) {
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
  let filteredItem = lipsDataLS.filter(function (ele) {
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
  let sortedItems = lipsDataLS.sort(function (a, b) {
    return a.price - b.price;
  });

  displayItemCards(sortedItems);
});

// For sorting price high to low

document.querySelector("#highTolow").addEventListener("click", function () {
  let sortedItems = lipsDataLS.sort(function (a, b) {
    return b.price - a.price;
  });

  displayItemCards(sortedItems);
});

// For clear all sorting items

document.querySelector("#clr").addEventListener("click", function () {
  window.location.reload();
});
