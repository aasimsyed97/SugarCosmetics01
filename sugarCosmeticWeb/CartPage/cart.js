let cartItemsData = JSON.parse(localStorage.getItem("cartItems")) || [];

let itemCount = localStorage.getItem("itemsInCart") || 0;

if (cartItemsData.length === 0) {
  document.querySelector("#item_container").style.height = "60vh";
  document.querySelector("#empty_container").style.display = "flex";
} else {
  document.querySelector("#checkOut_container").style.display = "block";
}
let totalPaybleAmount = 0;
let discount = 0;
let shipingCharge = 0;
let cartSubtotal = 0;
displayCartItems(cartItemsData);

function displayCartItems(cartItemsData) {
  document.querySelector("#left_mid").innerHTML = "";
  cartItemsData.forEach(function (ele, index) {
    let mainCard = document.createElement("div");

    // creating the imgbox
    let imgCard = document.createElement("div");
    let itemImg = document.createElement("img");
    itemImg.src = ele.image;

    //creating name box
    let nameCard = document.createElement("div");
    nameCard.innerText = ele.name;

    //creating delete item box
    let deleteCard = document.createElement("div");
    deleteCard.innerText = "Remove";
    deleteCard.addEventListener("click", function () {
      removeItem(index);
    });

    //creating price box
    let priceCard = document.createElement("div");
    priceCard.innerText = "Rs." + " " + ele.price;

    cartSubtotal += ele.price;

    //   apppending all element to respective parent
    imgCard.append(itemImg);
    mainCard.append(imgCard, nameCard, deleteCard, priceCard);
    document.querySelector("#left_mid").append(mainCard);
  });
}

// ?creating remove item function
function removeItem(index) {
  cartItemsData.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItemsData));
  displayCartItems(cartItemsData);

  // remainingItem count
  itemCount--;
  localStorage.setItem("itemsInCart", itemCount);
  window.location.reload();
}

// All amount and maths here
if (cartSubtotal > 499) {
  shipingCharge = 0;
} else {
  shipingCharge = 49;
}
totalPaybleAmount = shipingCharge + cartSubtotal - discount;
document.getElementById("da").innerText = "Rs." + " " + discount;
document.getElementById("sc").innerText = "Rs." + " " + shipingCharge;
document.getElementById("cst").innerText = "Rs." + " " + cartSubtotal;
let priceDisplayed = document.querySelector("#priceDisplay");
priceDisplayed.innerText = totalPaybleAmount;
document.getElementById("ap").innerText = "Rs." + " " + totalPaybleAmount;

// calculating the discount through promo

document.querySelector("#apply").addEventListener("click", function () {
  let promo = document.querySelector("input").value;
  if (promo === "team50" && cartSubtotal > 1500) {
    discount = cartSubtotal * 0.5;
    console.log(promo, cartSubtotal, discount);
  } else if (promo === "team30" && cartSubtotal > 600) {
    discount = (cartSubtotal * 0.3).toFixed(2);
  } else {
    alert("not applicable");
  }
  document.getElementById("da").innerText = "Rs." + " " + discount;
  totalPaybleAmount = shipingCharge + cartSubtotal - discount;
  document.getElementById("ap").innerText = "Rs." + " " + totalPaybleAmount;
  document.querySelector("#priceDisplay").innerText = totalPaybleAmount;
});

document.querySelector("#gotoHome").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// creating the gateway of payments
document.getElementById("paylast").addEventListener("click", function () {
  let total = priceDisplayed.innerText;
  localStorage.setItem("totalPayment", total);
});
