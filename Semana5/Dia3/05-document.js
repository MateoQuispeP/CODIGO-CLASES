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

 let className = document.getElementsByClassName("list__item");

 console.log(className);
 /**
  * Hack para convertirlo a un arreglo
  */

  let arreglo = Array.from(className);
  console.log(arreglo);