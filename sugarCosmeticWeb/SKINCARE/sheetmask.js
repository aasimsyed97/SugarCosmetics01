SkinCareProducts = [
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-acne-combo-pack-of-6-14056089157715.jpg?v=1619113757",
        name: "ACNE COMBO (PACK OF 6)",
        price: 559,
        rating: 5
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
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-total-mask-erade-pack-of-3-14056092074067.jpg?v=1644930751",
        name: "TOTAL MASK-ERADE (PACK OF 3)",
        price: 299,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-what-a-treat-pack-of-3-14056089714771.jpg?v=1619113879",
        name: "WHAT A TREAT! (PACK OF 3)",
        price: 299,
        rating: 5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-get-unmasked-pack-of-3-14056092467283.jpg?v=1619113899",
        name: "GET UNMASKED (PACK OF 3)",
        price: 299,
        rating: 4.8
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-the-clear-glow-pack-of-12-14056095613011.jpg?v=1644585135",
        name: "THE CLEAR GLOW (PACK OF 12)",
        price: 149,
        rating: 4.5
    },
    {
        image: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-my-face-shields-pack-of-6-28122594541651.jpg?v=1619113968",
        name: "MY FACE SHIELDS (PACK OF 6)",
        price: 599,
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
let name = "Sheet Masks";
document.querySelector("#a>span:last-child>p").innerText = "Skin Care Products - "+SkinCareProducts.length+" Items"