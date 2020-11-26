let frase="Codigo BootCamp de Desarrollo Web";

console.log(frase);
console.log("Caracteres " + frase.length);

console.log(frase[5]);


for(let i = 0;i<frase.length;i++){
    console.log(frase[5]);
}

/**
 * string.indexOf("subcadena o caracter", ?desde_qué_posición)
 * Busca la posición en la que aparezca un caracter ó una
 * cadena de texto pasada como parámetro a la función indexOf.
 * Opcionalmente pueden mandar un segundo parámetro indicando 
 * desde qué posición desean buscar el caracter o la subcadena.
 * Posibles repuestas:
 * -1 cuando no encuentra el texto buscado
 * >0 cuando encuentra el texto buscado
 */

 console.log(frase.toLowerCase());
 console.log(frase.toUpperCase());


 const titulo = "Welcome to Sudden Death";
 let posicionSnow = (titulo.toLowerCase().indexOf("Death"));
 console.log(posicionSnow);

 let palabras = frase.split(" ");
 console.log(palabras);
 console.log(`cantidad de palabras es ${palabras.length}`);

 let sinopsis = "Jesse Freeman es un ex oficial de las fuerzas especiales y experto en explosivos que ahora tiene un trabajo regular como guardia de seguridad en un estadio de baloncesto de última generación. Los problemas surgen cuando un grupo de terroristas expertos en tecnología secuestra al propietario del equipo y a la hija de Jesse durante la noche de apertura. Enfrentando un reloj en marcha y probabilidades imposibles, depende de Jesse no solo salvarlos, sino también a una casa llena de fanáticos en este thriller de acción altamente cargado.";
 arreglo = sinopsis.split(" ");
 arreglo = arreglo.filter((word)=>{
     if(word.length > 3){
         return word;
     }
 });
 console.log();