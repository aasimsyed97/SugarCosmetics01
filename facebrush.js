facebrusheItems = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",

    name: "Blend Trend Face Brush - 003 Contour",

    price: 399,
    rating: "4.5(13)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",

    name: "Blend Trend Face Brush - 006 highlighter",

    price: 399,
    rating: "4.7(23)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",

    name: "Blend Trend Foundation Brush - 052 kabuki",

    price: 399,
    rating: "4.8(26)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",

    name: "Blend Trend Foundation Brush - 001 blush",

    price: 399,
    rating: " 4.9(15)",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",

    name: "Blend Trend Foundation Brush - 007 powder",

    price: 399,
    rating: " 4.9(24)",
  },
];
localStorage.setItem("faceBrushes", JSON.stringify(facebrusheItems));
let facebrushDataLS = JSON.parse(localStorage.getItem("faceBrushes"));

displayItemCards(facebrushDataLS);

function displayItemCards(facebrushDataLS) {
  document.querySelector("#left > p+p > span").innerText =
    facebrushDataLS.length + " " + "items";
  facebrushDataLS.forEach(function (ele) {
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
    let addwish = document.createElement("img");
    addwish.src = "https://img.icons8.com/material-outlined/344/like--v1.png";

    btnDiv.append(addwish, addCart);
    ratDiv.append(ratingIcon, itemRating);
    cardDiv.append(itemImg, itemName, itemPrice, ratDiv);
    card.append(cardDiv, btnDiv);
    document.querySelector("#cards_container").append(card);
  });
}
