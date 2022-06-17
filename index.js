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
    matter.innerHTML=`Get Important Updates on Whatsapp.<a href="T&C.html"> <b>Terms and Conditions</b></a>`
    let div=document.createElement("div");
    div.append(checkbox,matter);
    div.setAttribute("id", "T-C")
    container2.append(photo1, pTAg,break1, label, small, otpEnter, otp1, otp2, otp3, otp4, break2, button5, break3, div)
    loginPage.append(h2Txt,container2, loginSlide,cross1,)
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