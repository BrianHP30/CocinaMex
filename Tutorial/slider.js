const slider = document.querySelector("#slider");
let secciones = document.querySelectorAll(".sources");
let Useccion= secciones[secciones.length-1];

const btmR=document.querySelector("#btm-R");
const btmL=document.querySelector("#btm-L");

slider.insertAdjacentElement("afterbegin", Useccion);

function Sig(){
    let primero = document.querySelectorAll(".sources")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition  = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", primero);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function Prev(){
    let secciones = document.querySelectorAll(".sources");
    let Useccion= secciones[secciones.length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", Useccion);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btmR.addEventListener("click", function(){
    Sig();
    clearInterval(inf);
    inf = setInterval(function(){
        Sig();
    }, 3000);
});

btmL.addEventListener("click", function(){
    Prev();
    clearInterval(inf);
    inf = setInterval(function(){
        Sig();
    }, 3000);
});

let inf=setInterval(function(){
    Sig();
}, 3000);

function crecer(){
    let banner = document.querySelector("header");
    banner.style.width = "100%";
    banner.style. transition = "all 0.5s"
}

window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("down",this.window.scrollY>100)
})