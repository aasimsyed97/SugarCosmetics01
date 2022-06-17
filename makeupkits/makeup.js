

let trendingdata =[
    {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/399160329-9-to-5-makeup-kit-wbg-01.jpg?v=1654013564",
        name:"MATTE ATTACK TRANSFER PROOF LIPSTICK",
        price:" Rs.699",
        rating:" 4.7(428)",
        category:"sugarmerchstation",
        prodID:"1",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/383779802-summer-makeup-kit-wbg-images.jpg?v=1649087039",
        name: "AIR KISS POWDER LIPSTICK",
        price:" Rs.499",
        rating:" 4.7(53)",
        category:"makeupkits",
        prodID:"2",
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-SETS-WBG-IMAGES-Set2.jpg?v=1632844196",
        name:"Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
        category:"makeupkits",
        price:"Rs.599" ,
        rating:"5(2)",
        prodID:"25",
    },
     
     {
     img:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",

     name: "Blend Trend Face Brush - 006 highlighter",
     category: "bestseller",
     price:"Rs.399",
     rating:"4.7(23)", 
     prodID:"29",
    },
       {
     img:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983",

     name: "Blend Trend Foundation Brush - 052 kabuki",
     category:"makeupkits",
     price:"Rs.399",
     rating:"4.8(26)",
     prodID:"30", 
    },
       {
     img:"https://cdn.shopify.com/s/files/1/0906/2558/products/390893522-eid-special-kit-wbg_1.jpg?v=1651238467",

     name: "Blend Trend Foundation Brush - 001 blush",
     category: "bestseller",
     price:"Rs.399",
     rating:"4.9(15)",
     prodID:"31",  
    },
        {
     img:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",

     name: "Blend Trend Foundation Brush - 007 powder",
     category:"makeupkits",
     price:"RS.399",
     rating:"4.9(24)", 
     prodID:"32", 
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748",
        name: "CITRUS GOT REAL DAILY MOISTURIZER",
        price: "Rs.499",
        rating: 4.9
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
        name: "AQUAHOLIC INSTANT PORE CLEANSING MASK",
        price: "Rs.499",
        rating: 4.8
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
        name: "BLING LEADER ILLUMINATING SUNSCREEN SPF35 P+++",
        price: "Rs.599",
        rating: 4.8
    },
         
     
        
      

    ]

let itemCount = localStorage.getItem("itemsInCart") || 0; //For how may items are in the cart

localStorage.setItem("trending", JSON.stringify(trendingdata)); // store all data to localstorage
let brushDataLS = JSON.parse(localStorage.getItem("trending")); //getting all data from localstorage

displayItemCards(brushDataLS); // calling the displayItemCards function

function displayItemCards(brushDataLS) {
  document.querySelector("#left > p+p > span").innerText =
  trendingdata.length + " " + "items";
  document.querySelector("#container").innerHTML = "";
  brushDataLS.forEach(function (ele) {
    let card = document.createElement("div");
    let cardDiv = document.createElement("div");
    let itemImg = document.createElement("img");
    itemImg.src = ele.img;

    let itemName = document.createElement("h3");
    itemName.innerText = ele.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerText =  ele.price;

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
    document.querySelector("#container").append(card);
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
  alert("item added to wishlist successfuly");
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
