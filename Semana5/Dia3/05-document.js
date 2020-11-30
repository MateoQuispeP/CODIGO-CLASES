/**
 * document, proporciona la capacidad de manipular el DON
 * Manipular crear elementos quitar elementos, etc
 */

 /**
  * document.getElementById("id_de_un_elemento")
  */

  let titulo = document.getElementById("titulo");
    console.log(titulo);
    titulo.innerText = "Nuevo titulo XD";
    titulo.style.backgroundColor = "#c35";

/**
 * document.getElementsByClassName("ClassName")
 */

 let lista = document.getElementsByClassName("list__item");

 console.log(lista);
 /**
  * Hack para convertirlo a un arreglo
  */

  let arreglo = Array.from(lista);
  console.log(arreglo);

  arreglo.forEach((liz, i) => {
    liz.innerText = `List item ${i}`;
  }
  )

  let subtitulo = document.querySelector("#subtitulo");
  subtitulo.style.textDecoration = "none";

  let cajitas = document.querySelectorAll(".cajita");
  let cajitasArreglo = Array.from(cajitas);
  cajitasArreglo.forEach((caja)=>{
    caja.style.height = "20px";
    caja.style.backgroundColor = "#444";
    caja.style.width = "20px";
    caja.style.borderRadius = "50%";
  })

  