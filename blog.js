let search = document.querySelector("#search").addEventListener("click",searFunction)

function searFunction(){
    let input= document.createElement("input")
    document.querySelector("#header").innerHTML=""
    document.querySelector("#header").append(input)
    input.placeholder="Type     and    hit      enter ...."

}