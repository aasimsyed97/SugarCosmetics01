SkinCareProducts = [
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-refreshing-mist-28037990842451.jpg?v=1619155739",
        name: "CITRUS GOR REAL REFRESHING MIST",
        price: 499,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Aquaholic-Pore-Exfoliating-Scrub-3_1.jpg?v=1626363966",
        name: "COFFEE CULTURE HYDRATING MIST",
        price: 499,
        rating: 5
    },
    
]
disPlay(SkinCareProducts)
function disPlay(a){
    for(let i=0; i<SkinCareProducts.length; i++){
        const card = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute("src",SkinCareProducts[i].image)
        const name = document.createElement('h4');
        name.innerText = SkinCareProducts[i].name;
        const price = document.createElement('p');
        price.innerText = SkinCareProducts[i].price;
        console.log(price);
        const rating = document.createElement('p');
        rating.innerText =" ⭐ "+SkinCareProducts[i].rating;
        const hoverPart = document.createElement('div');
        hoverPart.style.backgroundColor = "black"
        hoverPart.style.width = "100%"
        hoverPart.style.height = "30px"
        const wl = document.createElement('div');
        wl.innerText = "🤍"
        wl.addEventListener("click", () => {
            localStorage.setItem("wishList",JSON.stringify(SkinCareProducts))
        })
        const atc = document.createElement('div');
        atc.innerText = "Add to Cart"
        atc.addEventListener("click", () => {
            localStorage.setItem("CartItems",JSON.stringify(SkinCareProducts))
        })
        hoverPart.style.display = "flex"
        hoverPart.style.justifyContent = "space-between"
        hoverPart.style.alignItems = "center"
        wl.style.border = "1px solid white"
        atc.style.border = "1px solid white"
        atc.style.flexGrow = "1"
        atc.style.height = "100%"
        wl.style.height = "100%"
        atc.style.color = "white"
        atc.style.display = "flex"
        atc.style.justifyContent = "center"
        atc.style.alignItems = "center"
        wl.style.width = "50px"
        wl.style.display = "flex"
        wl.style.justifyContent = "center"
        wl.style.alignItems = "center";
        hoverPart.style.cursor = "pointer"
        hoverPart.append(wl,atc)
        card.addEventListener("mouseenter",() => {
            card.style.boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            card.append(img,name,price,rating,hoverPart)
            hoverPart.style.backgroundColor = "black"
            wl.innerText = "🤍"
        })
        card.addEventListener("mouseleave",() => {
            card.style.boxShadow = "none"
            card.append(img,name,price,rating)
            hoverPart.style.backgroundColor = "white"
            wl.innerText = ""
        })
        card.append(img,name,price,rating)
        card.setAttribute("id","card")
        document.querySelector("#IInd_part").append(card)
    }
}
document.querySelector("#a>span:last-child>p").innerText = "Skin Care Products - "+SkinCareProducts.length+" Items"