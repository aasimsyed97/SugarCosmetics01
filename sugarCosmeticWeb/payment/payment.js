let totalpayment = JSON.parse(localStorage.getItem("totalPayment")) || []
let totalItem = JSON.parse(localStorage.getItem("itemsInCart")) || []
let cartItem = JSON.parse(localStorage.getItem("cartItems")) || []


let totalpay = document.createElement("button")
totalpay.addEventListener("click", myfunction)
totalpay.innerText = "Proceed To Payment(" + totalpayment + ".00)"
document.querySelector("#payment").append(totalpay)


function myfunction() {
    if (document.querySelector("#pay").value == "CARD") {
        alert("option selected")
        let div = document.createElement("div")



        let cardnumber = document.createElement("input")
        cardnumber.placeholder = " Card Number"
        cardnumber.type = "tel"
        cardnumber.maxLength = "16"
        let cardname = document.createElement("input")
        cardname.placeholder = " Card Holder Name"
        let expiry = document.createElement("input")
        expiry.placeholder = " Expiry (MM/YY)"
        expiry.type = "tel"
        expiry.maxLength ="5"
        let cvv = document.createElement("input")
        cvv.placeholder = "CVV"
        cvv.type = "tel"
        cvv.maxLength = "3"
        let pay = document.createElement("button")
        pay.innerText = "PAY"




        div.append(cardnumber, cardname, expiry, cvv, pay)
        document.querySelector("#getway").append(div)
        pay.addEventListener("click", payfunction)



        function payfunction() {
            let logo = document.createElement("img")
            let para = document.createElement("p")
            let para2 = document.createElement("p")
            let link = document.createElement("a")
            let shop = document.createElement("button")
            link.setAttribute("href", "")
            link.append(shop)
            logo.setAttribute("src", "https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif")
            para.innerText = "Payment Successful"
            para2.innerText = "Your Order Is Live Now"
            shop.innerText = 'SHOP MORE'



            document.querySelector("#container").innerHTML = ""
            document.querySelector("#sucessfull").append(logo, para, para2, link)
        }

    }
    else if (document.querySelector("#pay").value == "COD") {
            alert("option selected")
    
            let logo = document.createElement("img")
            let para = document.createElement("p")
            let para2 = document.createElement("p")
            let link = document.createElement("a")
            let shop = document.createElement("button")
            link.setAttribute("href", "")
            link.append(shop)
            logo.setAttribute("src", "https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif")
            para.innerText = "Payment Successful"
            para2.innerText = "Your Order Is Live Now"
            shop.innerText = 'SHOP MORE'
    
    
    
            document.querySelector("#container").innerHTML = ""
            document.querySelector("#sucessfull").append(logo, para, para2, link)
    
    
        }
    



}















