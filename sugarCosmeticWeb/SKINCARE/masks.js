SkinCareProducts = [
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-12775753744467.jpg?v=1619113715",
        name: "CHEAT SHEET ANTI-AGING MASK",
        price:99,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-clarifying-mask-12775754203219.jpg?v=1619113702",
        name: "CHEAT SHEET CLARIFYING MASK",
        price:99,
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Instant-Pore-Cleansing-Mask-1_1.jpg?v=1626423690",
        name: "AQUAHOLIC INSTANT PORE CLEANSING MASK",
        price: 499,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-bubble-mask-12775750500435.jpg?v=1644399394",
        name: "CHARCOAL PATROL BUBBLE MASK",
        price: 149,
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/1_3cb613fc-43c8-4763-b3e6-5ccf4761c0d5.jpg?v=1641570994",
        name: "POWDER CLAY MASK STICK",
        price: 699,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/CCPorePurifyingMaskWBG-3.jpg?v=1628610298",
        name: "COFFEE CULTURE ROPE PURIFYNG MASK",
        price: "499",
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-swipe-right-cleansing-water-12771592732755.jpg?v=1619106450",
        name: "CHEAT SHEET CLARIFYING MASK (PACK OF 6)",
        price: 449,
        rating: 4.7
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/Coffee-culture-hydrating-mist-01.jpg?v=1644312897",
        name: "CHEAT SHEET ANTI-AGING MASK (PACK OF 6)",
        price: 449,
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-anti-aging-mask-pack-of-6-12784629776467.jpg?v=1619114575",
        name: "CHARCOAL PATROL BUBBLE MASK (PACK OF 6)",
        price: 699,
        rating: 5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-12775752564819.jpg?v=1619113688",
        name: "CHARCOAL PATROL FACE MASK",
        price:99,
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-cheat-sheet-brightening-mask-12775754039379.jpg?v=1619113729",
        name: "SUGAR CHEAT SHEET BRIGHTENING MASK",
        price: 149,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-sugar-cheat-sheet-pore-care-mask-12775754563667.jpg?v=1619113743",
        name: "SUGAR CHEAT SHEET PORE CARE MASK",
        price: 149,
        rating: 4.9
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-cheat-sheet-pore-care-mask-pack-of-6-12784627187795.jpg?v=1619114552",
        name: "CHEAT SHEET PORE CARE MASK (PACK OF 6)",
        price: 699,
        rating: 5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-charcoal-patrol-face-mask-pack-of-6-12784634986579.jpg?v=1619114602",
        name: "CHARCOAL PATROL MASK (PACK OF 6)",
        price: 449,
        rating: 5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-power-clay-peel-off-mask-13470537646163.jpg?v=1619115274",
        name: "POWDER CLAY PEEL OF MASK",
        price: 249,
        rating: 4.7
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-power-clay-3-min-pore-cleansing-mask-13470539645011.jpg?v=1619115283",
        name: "POWDER CLAY 3-MIN PORE CLEANING MASK",
        price: 249,
        rating: 4.6
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
        price.innerText ="Rs." +SkinCareProducts[i].price;
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
            localStorage.setItem("cartItems",JSON.stringify(SkinCareProducts))
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