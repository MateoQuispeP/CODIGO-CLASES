/*const miFuncion = (callback) => {
    callback();
}

const saludar = () =>{
    console.log("Saludar123");
}

miFuncion(saludar);
--------------------------------------
*/
/*
const miFuncion = (callback) => {
    callback();
}

miFuncion(() =>{
    console.log("Habla causaaa , gaaaaaaaa");   
}
);

*/
/** 
 * Función que recibe un callback.
 * Al callback, le manda un objeto cuando se termina la 
 * petición a la base de datos
 * @param {function(string)} respuesta 
 */

const traerDatos = (respuesta) => {
    fetch("https://reqres.in/api/users?page=2").then(data => {
      return data.json();
    }).then(rpta => {
      setTimeout(() => {
        respuesta(rpta);
      }, 2000);
    })
  } 

  traerDatos((rpta) => {
    console.log(rpta);
  });

  const traerDatosV2 = () => {
    return "lista de usuarios"
  }
  
  console.log(traerDatosV2());
  

/*
const CAUSA = (otraFuncion) =>{
    otraFuncion();
}

CAUSA( () =>{
    console.log("Habla causaaa F");
}
);

*/