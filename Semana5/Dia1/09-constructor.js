/**
 * Los constructores son creadores de objetos
 * previamente definidos
 */

function Curso(_nombre ="", _nivel ="", _duracion="",_precio=0,_temas=[]) {
    let objCurso = {
      nombre: _nombre,
      nivel: _nivel,
      nombreCompleto: function () {
        return "Curso de " + objCurso.nombre + " - " + objCurso.nivel
      },
      duracion: "",
      precio: 0,
      temas: []
    }
    return objCurso;
  }
  
  let objReact = new Curso();
  let objNextJS = new Curso();
  objReact.nombre = "ReactJS";
  objReact.duracion = "2 semanas";
  objReact.nivel = "Avanzado";
  console.log(objReact.nombreCompleto());
  
  
  objNextJS.temas = ["SSR", "Default Props"];
  console.log(objReact);
  console.log(objNextJS);
  
  let objCurso = new Curso("Mateo","PRO");

  console.log(objCurso);
