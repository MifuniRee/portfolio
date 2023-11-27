var navLinks = document.getElementById("navLinks");
var News = document.getElementById("News");
var Alls = document.getElementById("Alls");
var Journeys = document.getElementById("Journeys");
var Tops = document.getElementById("Tops");


function showMenu(){
    navLinks.style.left = "0";
    Alls.innerHTML= "All Products"
    Journeys.innerHTML= "CHocs Journey"
    Tops.innerHTML= "Top 10 Products"
}
function hideMenu(){
    navLinks.style.left = "-100%";
    Alls.innerHTML= "All-Products"
    Journeys.innerHTML= "Journey"
    Tops.innerHTML= "Top-10"
}


