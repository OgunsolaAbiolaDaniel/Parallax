let moon = document.getElementById("moon");
let stars = document.getElementById("stars");
let LightHouse = document.getElementById("lighthouse");
let btn = document.getElementById("btn");
let text= document.getElementById("text");
let head = document.querySelector("header")
window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    stars.style.top = value * 0.50 +"px" ;
    moon.style.top = value* 1.15+"px";
    LightHouse.style.top = value * 0 + "px";
    text.style.marginRight= value* 4 + "px";
    btn.style.marginTop = value* 0.8+ "px";
    head.style.top= value*0.5+"px";
})
