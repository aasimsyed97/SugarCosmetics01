document.querySelector("#cancel").addEventListener("click", myfunction);
function myfunction(event){
    console.log(event.target.parentNode.remove())
}

// displayImage
let img1=document.querySelector("#displayImage>img");
let buttons=document.querySelectorAll("#displayImage>button")
let forward=0;
let backward=0;
let arr1=["https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/309d5880-c650-4773-9cb9-5b8efc593ac0.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif","https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/7d151892-4d17-466e-8a06-743392796264.jpg", "https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg", "https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg" ];
buttons[0].addEventListener("click", function(){
    
    if(forward==7){
        forward=0;
    }
    else{
        forward++;
    }
    img1.src=arr1[forward];
})
buttons[1].addEventListener("click", function(){
    
    if(backward==0){
        backward=7;
    }
    else{
        backward--;
    }
    img1.src=arr1[backward];
})

// id="slidingImage"
let btn2_1=document.createElement("button");
let btn2_2=document.createElement("button");
let arr2=[
    {photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861",
des:"METTLE PRIMING BALM",
price: "₹ 1099",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116",
des:"AIR KISS POWDER LIPSTICK",
price: "₹ 499",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141",
des:"LIP ZIP MATTE TOPPER",
price: "₹ 499",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771",
des:"BLING LEADER ILLUMINATING SUNSCREEN SPF35 PA***",
price: "₹ 599",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/10_399a571c-c091-4d1c-bc17-111b7da9cd4e.jpg?v=1648741253",
des:"SET THE TONE TINTED POWDER",
price: "₹ 699",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1644394232",
des:"MATTE AS HELL CRAYON LIPSTICK",
price: "₹ 799",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796432941139.jpg?v=1619114695",
des:"GODDESS OF FLAWLESS SPF30+ BB CREAM",
price: "₹ 699",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1644399711",
des:"KOHL OF HONOUR INTENSE KAJALS",
price: "₹ 249",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_59809bd6-49ef-4c6b-b262-47002bedc963.jpg?v=1639755559",
des:"BLEND THE RULES EYESHADOW PALETTE",
price: "₹ 1199",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e9355d54-6ddb-4aa4-bdfc-176a676db886.jpg?v=1639983555",
des:"BASE OF GLORY PORE MINIMIZING PRIMER",
price: "₹ 799",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607",
des:"CONTOUR DE FORCE FACE PALETTE",
price: "₹ 799",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
des:"ACE OF FACE FOUNDATION STICK",
price: "₹ 999",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
des:"ACE OF FACE FOUNDATION STICK",
price: "₹ 999",
btn: "SELECT SHADE"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-arrested-for-overstay-waterproof-eyeliner-01-i-ll-be-black-black-12784884973651.jpg?v=1619101912",
des:"ARRESTED FOR OVERSTAY WATERPROOF EYELINER-O1 I`LL...",
price: "₹ 899",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-all-set-to-go-banana-powder-13289662218323.jpg?v=1619115199",
des:"ALL SET TO GO BANANA POWER",
price: "₹ 599",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412",
des:"TIPSY LIPS MOISTURIZING BALM",
price: "₹ 199",
btn: "SELECT SHADE"},
];
let go=0;
let back=0;
let box1=document.querySelector("#slidingImage");
box1.addEventListener("mouseover", function(){
    btn2_1.innerText="<";
    btn2_2.innerText=">";
    btn2_1.style.height="70px";
    btn2_1.style.width="30px";
    btn2_2.style.height="70px";
    btn2_2.style.width="30px";
    btn2_1.style.position="absolute";
    
    btn2_2.style.marginTop="120px";
    btn2_1.style.top="120px";
    
    btn2_1.style.left="20px";
    btn2_1.style.backgroundColor="white";
    btn2_2.style.backgroundColor="white";
    btn2_1.style.border="1px solid black";
    btn2_2.style.border="1px solid black";
    box1.append(btn2_1,btn2_2);
    btn2_1.addEventListener("click", function(){
    
        if(back<=0){
            back=15;
        }
        else{
            back=back-3;
        }
        
        document.querySelector("#A1>img").src=arr2[back].photo;
        document.querySelector("#A1>h4").innerText=arr2[back].des;
        document.querySelector("#des").innerText=arr2[back].price;
        document.querySelector("#btn2").innerText=arr2[back].btn;
        document.querySelector("#A2>img").src=arr2[back-1].photo;
        document.querySelector("#A2>h4").innerText=arr2[back-1].des;
        document.querySelector("#des2").innerText=arr2[back-1].price;
        document.querySelector("#btn2-2").innerText=arr2[back-1].btn;
        document.querySelector("#A3>img").src=arr2[back-2].photo;
        document.querySelector("#A3>h4").innerText=arr2[back-2].des;
        document.querySelector("#des3").innerText=arr2[back-2].price;
        document.querySelector("#btn2-3").innerText=arr2[back-2].btn;
        document.querySelector("#A4>img").src=arr2[back-3].photo;
        document.querySelector("#A4>h4").innerText=arr2[back-3].des;
        document.querySelector("#des4").innerText=arr2[back-3].price;
        document.querySelector("#btn2-4").innerText=arr2[back-3].btn;
    })
    btn2_2.addEventListener("click", function(){
    
        if(go>=15){
            go=0;
        }
        else{
            go=go+3;
        }
        document.querySelector("#A1>img").src=arr2[go].photo;
        document.querySelector("#A1>h4").innerText=arr2[go].des;
        document.querySelector("#des").innerText=arr2[go].price;
        document.querySelector("#btn2").innerText=arr2[go].btn;
        document.querySelector("#A2>img").src=arr2[go+1].photo;
        document.querySelector("#A2>h4").innerText=arr2[go+1].des;
        document.querySelector("#des2").innerText=arr2[go+1].price;
        document.querySelector("#btn2-2").innerText=arr2[go+1].btn;
        document.querySelector("#A3>img").src=arr2[go+2].photo;
        document.querySelector("#A3>h4").innerText=arr2[go+2].des;
        document.querySelector("#des3").innerText=arr2[go+2].price;
        document.querySelector("#btn2-3").innerText=arr2[go+2].btn;
        document.querySelector("#A4>img").src=arr2[go+3].photo;
        document.querySelector("#A4>h4").innerText=arr2[go+3].des;
        document.querySelector("#des4").innerText=arr2[go+3].price;
        document.querySelector("#btn2-4").innerText=arr2[go+3].btn;
    })
})
box1.addEventListener("mouseout", function(){
    btn2_1.style.backgroundColor="transparent";
    btn2_2.style.backgroundColor="transparent";
    btn2_1.style.border="none";
    btn2_2.style.border="none";
    btn2_1.innerText="";
    btn2_2.innerText="";
})

// displayImage2
let img2=document.querySelector("#displayImage2>img");
let buttons2=document.querySelectorAll("#displayImage2>button")
let forward1=0;
let backward1=0;
let arr3=["https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg" ];
buttons2[0].addEventListener("click", function(){
    
    if(forward1==2){
        forward1=0;
    }
    else{
        forward1++;
    }
    img2.src=arr3[forward1];
})
buttons2[1].addEventListener("click", function(){
    
    if(backward1==0){
        backward1=2;
    }
    else{
        backward1--;
    }
    img2.src=arr3[backward1];
})