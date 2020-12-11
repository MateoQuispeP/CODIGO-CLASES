/**
 * Destructuracion de Objetos
 */

 let  objMascota = {
     nombre : "Ruffo",
     raza : "Doggo Argentino",
     edad : 4,
     colores : ["blanco","cafe"]

 }

let { nombre,raza } = objMascota;

console.log(raza);
console.log(nombre);

let { edad:anios } = objMascota;

console.log(anios);
/*
colores.forEach((e) => {
    console.log(e);
})
*/
let { colores:[primerColor,segundoColor]  } = objMascota;

console.log(segundoColor);


