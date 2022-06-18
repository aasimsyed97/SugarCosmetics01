document.querySelector("#cancel").addEventListener("click", myfunction);
function myfunction(event){
    console.log(event.target.parentNode.remove())
}
//LoginPage
document.querySelector("#login").addEventListener("click", function(){
    let loginPage=document.createElement("div")
    let loginSlide=document.createElement("div");
    loginPage.style.width="50%";
    loginPage.style.position="fixed";
    loginPage.style.right="0px";
    loginPage.style.top="0px";
    loginSlide.setAttribute("id","loginPhoto");
    loginPage.style.height="100%";
    loginPage.style.zIndex="100";
    loginPage.style.backgroundColor="red";
    loginSlide.style.width="100%"
    loginSlide.style.height="100%"
    let cross1=document.createElement("i")
    cross1.setAttribute("class", "fa-solid fa-xmark");
    cross1.setAttribute("id", "cancel")
    cross1.style.left="15px"
    cross1.addEventListener("click", function(){
        loginPage.remove();
    })
    let h2Txt=document.createElement("h2");
    h2Txt.style.color="white";
    h2Txt.innerText="Login/Sign Up";
    h2Txt.style.position="absolute";
    h2Txt.style.zIndex="1000";
    h2Txt.style.top="40px";
    h2Txt.style.left="15px";
    container2=document.createElement("div");
    container2.setAttribute("id", "loginbox")
    let photo1=document.createElement("img");
    photo1.setAttribute("src", "https://in.sugarcosmetics.com/smartphone.svg")
    let pTAg=document.createElement("label");
    pTAg.innerText="Login/Sign Up Using Phone";
    let label=document.createElement("label");
    label.innerHTML=`+91<input type="tel" required max="11"><button>Request OTP</button>`
    let break1=document.createElement("br")
    let small=document.createElement("p")
    let otpEnter=document.createElement("p")
    otpEnter.innerText="Enter the 4 digit OTP received on your phone.";
    small.innerText="Enter your phone number to request an OTP";
    let otp1=document.createElement("input");
    otp1.setAttribute("class", "otp");
    otp1.setAttribute("type", "number");
    let otp2=document.createElement("input");
    otp2.setAttribute("class", "otp");
    otp2.setAttribute("type", "number");
    let otp3=document.createElement("input");
    otp3.setAttribute("class", "otp");
    otp3.setAttribute("type", "number");
    let otp4=document.createElement("input");
    otp4.setAttribute("class", "otp");
    otp4.setAttribute("type", "number");
    let button5=document.createElement("button");
    button5.innerText="Verify OTP";
    let break2=document.createElement("br")
    let break3=document.createElement("br");
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    let matter=document.createElement("p");
    matter.innerHTML=`Get Important Updates on Whatsapp.<a href="T-C.html"> <b>Terms and Conditions</b></a>`
    let div=document.createElement("div");
    div.append(checkbox,matter);
    div.setAttribute("id", "T-C")
    let h41=document.createElement("h4");
    h41.innerText="Registering for this site allows you to access your order status and history. Just fill in the"
    h41.setAttribute("id", "id1")
    let h42=document.createElement("h4");
    h42.setAttribute("id", "id2")
    h42.innerText="fields below, and we'll get a new account set up for you in no time. We will only ask you";
    let h43=document.createElement("h4");
    h43.innerText="for information necessary to make the purchase process faster and easier."
    h43.setAttribute("id", "id3")
    let p=document.createElement("p");
    p.setAttribute("id", "last1")
    p.innerHTML=`By Signing up or logging in, you agree to our <a href="T-C.html"> <b>Terms and Conditions</b></a>`;
    container2.append(photo1, pTAg,break1, label, small, otpEnter, otp1, otp2, otp3, otp4, break2, button5, break3, div)
    loginPage.append(h2Txt,container2, h41, h42, h43, p, loginSlide,cross1,)
    document.querySelector("body").append(loginPage);
    
});

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
        backward=forward;
    }
    img1.src=arr1[forward];
})
buttons[1].addEventListener("click", function(){
    
    if(backward==0){
        backward=7;
    }
    else{
        backward--;
        forward=backward;
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
    
        if(back<4){
            back=12;
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
    
        if(go>=8){
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
        backward1=forward1;
    }
    img2.src=arr3[forward1];
})
buttons2[1].addEventListener("click", function(){
    
    if(backward1==0){
        backward1=2;
    }
    else{
        backward1--;
        forward1=backward1
    }
    img2.src=arr3[backward1];
})
// id="slidingImage2"
let img3=document.querySelectorAll("#slidingImage2>div>img");
let buttons3=document.querySelectorAll("#slidingImage2>button");
let forward2=0;
let backward2=0;
let arr4=["https://d32baadbbpueqt.cloudfront.net/Homepage/66b53f34-09bf-4f37-a62a-e9d5f2a4b0cf.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f8229b54-2d9c-4215-8901-4ddf2d94d084.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/e4f6c286-358b-43f1-8f53-c26aa0718c57.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/66b53f34-09bf-4f37-a62a-e9d5f2a4b0cf.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f8229b54-2d9c-4215-8901-4ddf2d94d084.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/9d535c56-b2f8-4f20-a076-79727a1548e4.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/0e757ba9-9124-4ce5-9a5b-eab5feb63ef0.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/927dc062-b21a-460e-a916-68fa21850841.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/444f4603-cc52-4560-9933-d58d1d9cb394.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/e4f6c286-358b-43f1-8f53-c26aa0718c57.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/66b53f34-09bf-4f37-a62a-e9d5f2a4b0cf.jpg" ];
buttons3[0].addEventListener("click", function(){
    
    if(forward2>=11){
        forward2=0;
    }
    else{
        forward2=forward2+3;
        backward2=forward2;
    }
    img3[0].src=arr4[forward2];
    img3[1].src=arr4[forward2+1];
    img3[2].src=arr4[forward2+2];
})
buttons3[1].addEventListener("click", function(){
    
    if(backward2<=3){
        backward2=11;
    }
    else{
        backward2=backward2-3;
        forward2=backward2;
    }
    img3[0].src=arr4[backward2];
    img3[1].src=arr4[backward2-1];
    img3[2].src=arr4[backward2-2];
})

//id="displayImage3"
let img4=document.querySelector("#displayImage3>img");
let buttons4=document.querySelectorAll("#displayImage3>button");
let forward3=0;
let backward3=0;
let arr5=["https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg"];
buttons4[0].addEventListener("click", function(){
    console.log("i")
    if(forward3>=3){
        forward3=0;
    }
    else{
        forward3++;
        
    }
    backward3=forward3;
    img4.src=arr5[forward3];
    
})
buttons4[1].addEventListener("click", function(){
    
    if(backward3<=0){
        backward3=3;
    }
    else{
        backward3--;
    }
    forward3=backward3;
    img4.src=arr5[backward3];
})


// slidingImage3
let btn3_1=document.createElement("button");
let btn3_2=document.createElement("button");
let arr6=[
    {photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_cbc3a2d6-9266-467e-a973-017e3c65d5cf.jpg?v=1649433283",
des:"SHINE & POUT MAKEUP VALUE SET",
price: "₹ 999 (16% 0ff)",
btn: "SHOP NOW"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_116c638f-21f6-4640-aab0-6022540b24e1.jpg?v=1649692784",
des:"MESMERIZE EYES MAKEUP SET",
price: "₹ 1299 (18% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb525208-246a-4f40-b57f-d88372708398.jpg?v=1655308814",
des:"GLAM EYE MAKEUP VALUE SET",
price: "₹ 1249 (19% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
des:"SET OF 4 KAJAL SET",
price: "₹ 799 (19% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg?v=1649865681",
des:"SET OF 4 KAJAL SET",
price: "₹ 799 (19% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-Set-WBG-2.jpg?v=1642089012",
des:"RED CARPET MAKEUP TRIO",
price: "₹ 799 (23% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/Value-set-wbg.jpg?v=1627055238",
des:"SUNSCREEM+KOHL VALUE SET",
price: "₹ 549 (38% Off)",
btn: "ADD TO CART"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg?v=1619152222",
des:"LIP BALM + SHEET MASK",
price: "₹ 299 (14% Off)",
btn: "CHOOSE PRODUCTS"}
];
let go2=0;
let back2=0;
let box2=document.querySelector("#slidingImage3");
box2.addEventListener("mouseover", function(){
    btn3_1.innerText="<";
    btn3_2.innerText=">";
    btn3_1.style.height="70px";
    btn3_1.style.width="30px";
    btn3_2.style.height="70px";
    btn3_2.style.width="30px";
    btn3_1.style.position="absolute";
    
    btn3_2.style.marginTop="120px";
    btn3_1.style.top="120px";
    
    btn3_1.style.left="20px";
    btn3_1.style.backgroundColor="white";
    btn3_2.style.backgroundColor="white";
    btn3_1.style.border="1px solid black";
    btn3_2.style.border="1px solid black";
    box2.append(btn3_1,btn3_2);
    btn3_1.addEventListener("click", function(){
    
        if(back2<=0){
            back2=5;
        }
        else{
            back2=back2-3;
        }
        go2=back2;
        document.querySelector("#B1>img").src=arr6[back2].photo;
        document.querySelector("#B1>h4").innerText=arr6[back2].des;
        document.querySelector("#des3-1").innerText=arr6[back2].price;
        document.querySelector("#btn3-1").innerText=arr6[back2].btn;
        document.querySelector("#B2>img").src=arr6[back2-1].photo;
        document.querySelector("#B2>h4").innerText=arr6[back2-1].des;
        document.querySelector("#des3-2").innerText=arr6[back2-1].price;
        document.querySelector("#btn3-2").innerText=arr6[back2-1].btn;
        document.querySelector("#B3>img").src=arr6[back2-2].photo;
        document.querySelector("#B3>h4").innerText=arr6[back2-2].des;
        document.querySelector("#des3-3").innerText=arr6[back2-2].price;
        document.querySelector("#btn3-3").innerText=arr6[back2-2].btn;
        document.querySelector("#B4>img").src=arr6[back2-3].photo;
        document.querySelector("#B4>h4").innerText=arr6[back2-3].des;
        document.querySelector("#des3-4").innerText=arr6[back2-3].price;
        document.querySelector("#btn3-4").innerText=arr6[back2-3].btn;
    })
    btn3_2.addEventListener("click", function(){
    
        if(go2>=5){
            go2=0;
        }
        else{
            go2=go2+3;
        }
        back2=go2;
        document.querySelector("#B1>img").src=arr6[go2].photo;
        document.querySelector("#B1>h4").innerText=arr6[go2].des;
        document.querySelector("#des3-1").innerText=arr6[go2].price;
        document.querySelector("#btn3-1").innerText=arr6[go2].btn;
        document.querySelector("#B2>img").src=arr6[go2+1].photo;
        document.querySelector("#B2>h4").innerText=arr6[go2+1].des;
        document.querySelector("#des3-2").innerText=arr6[go2+1].price;
        document.querySelector("#btn3-2").innerText=arr6[go2+1].btn;
        document.querySelector("#B3>img").src=arr6[go2+2].photo;
        document.querySelector("#B3>h4").innerText=arr6[go2+2].des;
        document.querySelector("#des3-3").innerText=arr6[go2+2].price;
        document.querySelector("#btn3-3").innerText=arr6[go2+2].btn;
        document.querySelector("#B4>img").src=arr6[go2+3].photo;
        document.querySelector("#B4>h4").innerText=arr6[go2+3].des;
        document.querySelector("#des3-4").innerText=arr6[go2+3].price;
        document.querySelector("#btn3-4").innerText=arr6[go2+3].btn;
    })
})
box2.addEventListener("mouseout", function(){
    btn3_1.style.backgroundColor="transparent";
    btn3_2.style.backgroundColor="transparent";
    btn3_1.style.border="none";
    btn3_2.style.border="none";
    btn3_1.innerText="";
    btn3_2.innerText="";
})
// id="slidingImage4"
let img5=document.querySelectorAll("#slidingImage4>div>img");
let buttons5=document.querySelectorAll("#slidingImage4>button");
let forward5=0;
let backward5=0;
let arr7=[ "https://d32baadbbpueqt.cloudfront.net/Homepage/58490d17-977a-46d4-ae71-c9baf559a736.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/a246bd5c-0383-4f03-905c-d6ab7f3bdb23.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/ea727dfe-f673-4cb5-b9b3-354bcf5c41a2.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f40172c6-147a-4895-ac1f-d430c3cc0a55.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/9a090aa5-6bd8-4d10-a77f-409c3619fc89.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/2ef5fc68-77d8-4083-9a4d-f37f42e98feb.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/58490d17-977a-46d4-ae71-c9baf559a736.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/a246bd5c-0383-4f03-905c-d6ab7f3bdb23.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/ea727dfe-f673-4cb5-b9b3-354bcf5c41a2.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/f40172c6-147a-4895-ac1f-d430c3cc0a55.jpg","https://d32baadbbpueqt.cloudfront.net/Homepage/9a090aa5-6bd8-4d10-a77f-409c3619fc89.jpg", "https://d32baadbbpueqt.cloudfront.net/Homepage/2ef5fc68-77d8-4083-9a4d-f37f42e98feb.jpg"];
buttons5[0].addEventListener("click", function(){
    
    if(forward5>3){
        forward5=0;
    }
    else{
        forward5=forward5+3;
    }
    backward5=forward5;
    img5[0].src=arr7[forward5];
    img5[1].src=arr7[forward5+1];
    img5[2].src=arr7[forward5+2];
})
buttons5[1].addEventListener("click", function(){
    
    if(backward5<=2){
        backward5=5;
    }
    else{
        backward5=backward5-3;
        
    }
    console.log(backward5)
    forward5=backward5;
    img5[0].src=arr7[backward5];
    img5[1].src=arr7[backward5-1];
    img5[2].src=arr7[backward5-2];
})

// slidingImage5
let btn5_1=document.createElement("button");
let btn5_2=document.createElement("button");
let arr8=[
    {photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051",
des:"MATTE AS HELL CRAYON LIPSTICK MINIS SET",
price: "₹ 1099 (38% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966",
des:"SMUDGE ME NOT LIQUID LIPSTICK MINIS SET",
price: "₹ 799 (20% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645",
des:"DATE NIGHT MAKEUP KIT",
price: "₹ 1599 (27% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/Wedding-Makeup-Kit---WBG-Images-op-3.jpg?v=1653494398",
des:"WEDDING MAKEUP KIT",
price: "₹ 1699 (27% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg?v=1649423983",
des:"FESTIVE READY KIT",
price: "₹ 2499 (30% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/RakshaBandhanKit-WBGImages.jpg?v=1654694624",
des:"EVERYDAY MAKEUP KIT",
price: "₹ 1499 (24% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg?v=1650022932",
des:"ANNIVERSARY KIT",
price: "₹ 1999 (28% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/PartyReadyKit-WBG1.png?v=1642487420",
des:"PARTY READY KIT",
price: "₹ 1299 (25% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_969f5548-2c56-4506-ada8-159b53a8f630.jpg?v=1649423977",
des:"GLAM UP KIT",
price: "₹ 1999 (28%)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/SUGAR-SETS-WBG-IMAGES-Set2.jpg?v=1632844196",
des:"GO GETTER SET",
price: "₹ 99 (22% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/Hi-5-KIT-WBG-Images1_43e43755-262f-4b35-973a-6e5fad7222a4.jpg?v=1643125074",
des:"HI-5 KIT",
price: "₹ 99 (22% Off)",
btn: "CHOOSE PRODUCTS"},
{photo:"https://cdn.shopify.com/s/files/1/0906/2558/products/combo-image.jpg?v=1646298736",
des:"4-IN-1 MAKEUP SET",
price: "₹ 899 (21% Off)",
btn: "CHOOSE PRODUCTS"},
];
let go3=0;
let back3=0;
let box3=document.querySelector("#slidingImage5");
box3.addEventListener("mouseover", function(){
    btn5_1.innerText="<";
    btn5_2.innerText=">";
    btn5_1.style.height="70px";
    btn5_1.style.width="30px";
    btn5_2.style.height="70px";
    btn5_2.style.width="30px";
    btn5_1.style.position="absolute";
    
    btn5_2.style.marginTop="120px";
    btn5_1.style.top="120px";
    
    btn5_1.style.left="20px";
    btn5_1.style.backgroundColor="white";
    btn5_2.style.backgroundColor="white";
    btn5_1.style.border="1px solid black";
    btn5_2.style.border="1px solid black";
    box3.append(btn5_1,btn5_2);
    btn5_1.addEventListener("click", function(){
    
        if(back3<=0){
            back3=5;
        }
        else{
            back3=back3-3;
        }
        go3=back3;
        document.querySelector("#C1>img").src=arr8[back3].photo;
        document.querySelector("#C1>h4").innerText=arr8[back3].des;
        document.querySelector("#des5-1").innerText=arr8[back3].price;
        document.querySelector("#btn5-1").innerText=arr8[back3].btn;
        document.querySelector("#C2>img").src=arr8[back3-1].photo;
        document.querySelector("#C2>h4").innerText=arr8[back3-1].des;
        document.querySelector("#des5-2").innerText=arr8[back3-1].price;
        document.querySelector("#btn5-2").innerText=arr8[back3-1].btn;
        document.querySelector("#C3>img").src=arr8[back3-2].photo;
        document.querySelector("#C3>h4").innerText=arr8[back3-2].des;
        document.querySelector("#des5-3").innerText=arr8[back3-2].price;
        document.querySelector("#btn5-3").innerText=arr8[back3-2].btn;
        document.querySelector("#C4>img").src=arr8[back3-3].photo;
        document.querySelector("#C4>h4").innerText=arr8[back3-3].des;
        document.querySelector("#des5-4").innerText=arr8[back3-3].price;
        document.querySelector("#btn5-4").innerText=arr8[back3-3].btn;
    })
    btn5_2.addEventListener("click", function(){
    
        if(go3>=5){
            go3=0;
        }
        else{
            go3=go3+3;
        }
        back3=go3;
        document.querySelector("#C1>img").src=arr8[go3].photo;
        document.querySelector("#C1>h4").innerText=arr8[go3].des;
        document.querySelector("#des5-1").innerText=arr8[go3].price;
        document.querySelector("#btn5-1").innerText=arr8[go3].btn;
        document.querySelector("#C2>img").src=arr8[go3+1].photo;
        document.querySelector("#C2>h4").innerText=arr8[go3+1].des;
        document.querySelector("#des5-2").innerText=arr8[go3+1].price;
        document.querySelector("#btn5-2").innerText=arr8[go3+1].btn;
        document.querySelector("#C3>img").src=arr8[go3+2].photo;
        document.querySelector("#C3>h4").innerText=arr8[go3+2].des;
        document.querySelector("#des5-3").innerText=arr8[go3+2].price;
        document.querySelector("#btn5-3").innerText=arr8[go3+2].btn;
        document.querySelector("#C4>img").src=arr8[go3+3].photo;
        document.querySelector("#C4>h4").innerText=arr8[go3+3].des;
        document.querySelector("#des5-4").innerText=arr8[go3+3].price;
        document.querySelector("#btn5-4").innerText=arr8[go3+3].btn;
    })
})
box3.addEventListener("mouseout", function(){
    btn5_1.style.backgroundColor="transparent";
    btn5_2.style.backgroundColor="transparent";
    btn5_1.style.border="none";
    btn5_2.style.border="none";
    btn5_1.innerText="";
    btn5_2.innerText="";
})