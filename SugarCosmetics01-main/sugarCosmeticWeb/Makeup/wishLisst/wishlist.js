let wishItemsData=JSON.parse(localStorage.getItem("wishList")) || [];
 if(wishItemsData.length===0){ 
    let img1=document.createElement("img");
    img1.src="https://in.sugarcosmetics.com/desc-images/WishlistEmpty.png"
    img1.style.justifyContent="center";
    let p1=document.createElement("p");
    p1.innerText="Wish List is empty, Add your favourite products."
     document.getElementById("cards_container").append(img1,p1)
    
 };  
  displaywishlistitem(wishItemsData); 
 function displaywishlistitem (wishItemsData) {
    document.querySelector("#left > p+p > span").innerText ="Items";
    document.querySelector("#cards_container").innerHTML = "";
    wishItemsData.forEach(function (ele) {
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
      ratingIcon.src = "https://in.sugarcosmetics.com/star_filled.png";
  
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
        removeItem(ele);
      });
  
      btnDiv.append(addwish, addCart);
      ratDiv.append(ratingIcon, itemRating);
      cardDiv.append(itemImg, itemName, itemPrice, ratDiv);
      card.append(cardDiv, btnDiv);
      document.querySelector("#cards_container").append(card);
    });
  }
//   creating remove item function
  function removeItem(index) {
    wishItemsData.splice(index, 1);
    localStorage.setItem("wishList", JSON.stringify(wishItemsData));
    displaywishlistitem(wishItemsData);
    window.location.reload();
  }
  
let cartItemsData = JSON.parse(localStorage.getItem("cartItems")) || [];
function addToCartFunc(ele) {
  cartItemsData.push(ele);
  localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
  alert("item added to cart successfuly");
}
  

 