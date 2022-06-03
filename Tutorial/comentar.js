let listaC;
const comentar = () => {
    listaC = JSON.parse(localStorage.getItem("auxComentario"))
    console.log(listaC)
    let comentarioC = document.getElementById("comment").value 
    let text = "TODOS LOS COMENTARIOS:  \n"
    comentarioC = (comentarioC == "") ? "" : comentarioC
    listaC.push({comentario: comentarioC})
    let long = listaC.length;

    let a = 0;

    for(let i = 0; i<long; i++){
        if(listaC[i].comentario!=""){
            a++;
            text += "comentario #"+a+": "+listaC[i].comentario+"\n";
            console.log(text)
        }
    }

   document.getElementById("salida").innerHTML = text
   localStorage.setItem("auxComentario",JSON.stringify(listaC))
}