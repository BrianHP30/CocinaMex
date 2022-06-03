listaU = JSON.parse(localStorage.getItem("auxComentario"))
let text = listaU[0]
document.getElementById("salida").innerHTML = text
console.log(listaU)