

let trendingdata =[
    
    
        {
            name: " TIPS LIPS MOISTURIZING BALM",
            price: " Rs.499",
            rating: "4.8",
            category: "sugarset",
            prodID:"5",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412 "
        },

        {
            name: " GOOD MOODIES LIP CRAYON",
            price: " Rs.599",
            rating: "4.8",
            category:"sugarmerchstation",
            prodID:"6",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/01_9e0bf9bb-92a6-45ca-8ce4-ce7d58c617ac.jpg?v=1639496863 "
        },

        {
            name: "METTLE SATIN LIPSTICK ",
            price: " Rs.699",
            rating: "4.8",
            category:"makeupkits",
            prodID:"7",
            img: " https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg?v=1619116113"
        },

        {
            name: "SMUDGE NOT MINIS-MINT GREEN ",
            price: " Rs.699",
            rating: "4.9",
            category:"sugarmerchstation",
            prodID:"8",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-mint-green-minis-set-14792910340179.jpg?v=1620652722 "
        },

        {
            name: "SMUDGE ME NOT LIP DUOS ",
            price: " Rs.599",
            rating: "4.5",
            category: "bestseller",
            prodID:"9",
            img: " https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-lip-duo-01-brazen-raisin-burgundy-13200661643347.jpg?v=1619108721"
        },
        //
        {
            name: "ACE OF FACE FOUNDATION STICK",
            price: " Rs.999",
            rating: "4.8",
            category:"makeupkits",
            prodID:"10",
            img: " https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644"
        },

        {
            name: "Gloss Boss 24HR Eyeliner - 01 Back In Black (Black)",
            price: " Rs.499",
            rating: " :star:4.8",
            category:"sugarmerchstation",
            prodID:"11",
            img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-gloss-boss-24hr-eyeliner-01-back-in-black-black-12771395436627_a805d7b4-0863-4ae0-9f15-a2292ae9aa93.jpg?v=1632210594 "
        },
      
     {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        name:"Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl",
        category: "sugarset",
        price:"Rs599" ,
        rating:"5(2)",
        prodID:"16",
    },
     {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        name:"Blend Trend Eyeshadow Brush - 041 Flat",
        price: "RS.399",
        catagory: "valueset",
        rating:"5(3)",
        prodID:"17",
    },
     {
        img:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        name:"Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        catagory: "sugarset",
        price:"Rs.599" ,
        rating:"5(2)",
        prodID:"18",
    },
    //
    
     
      

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
    itemPrice.innerText = ele.price;

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
