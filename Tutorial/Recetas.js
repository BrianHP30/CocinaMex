window.addEventListener("scroll", function(){
    //alert("sdds")
    var header = this.document.querySelector(".contenedor");
    
    header.classList.toggle("down", this.window.scrollY>100)
    console.log(header);
});
