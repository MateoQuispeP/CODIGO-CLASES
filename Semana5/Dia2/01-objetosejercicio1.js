/**
 * Reto1: Crear un constructor (Clase) de nombre Alumno
 * Atributos de cada alumno serán:
 * > nombres: <string>
 * > apellidos: <string>
 * > notas: Array<number>
 * > dni: <string>
 * > promedioNotas: Function => función que calculará
 *   el promedio de todas las notas que tenga un alumno y
 *   retornará dicho promedio
 * OBS: el constructor, debe recibir todos los parámetros
 */
/*
function Clase(_nombres ="",_apellidos ="",_notas=[],_dni=0) {
    let objClase = {
      nombre: _nombres,
      apellidos: _apellidos,
      notas: _notas,
      dni: _dni,
      notasPromedio: function () {
        let total = 0;
        let promedio= 0;
        for (let i = 0; i < this.notas.lenght; i++){
            total+= this.notas[i];
        }
        promedio = total/this.notas.lenght;
        return promedio;
      }
    }
    return objClase;
  }

  let objPromedio = new Clase("Mateo", "Quispe",[15,18,05,07,20],73276257);

  console.log(objPromedio);
  console.log(objPromedio.notasPromedio());



function Alumno(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
    let objAlumno = {
      nombres: _nombres,
      apellidos: _apellidos,
      notas: _notas,
      dni: _dni,
      promedio: function () {
        let suma = 0;
        this.notas.forEach((elemento) => {
          suma += elemento;
        });
        return suma / this.notas.length;
      },
    };
    return objAlumno;
  }

  let objPromedio = new Clase("Mateo", "Quispe",[15,18,05,07,20],73276257);

  console.log(objPromedio);
  console.log(objPromedio.notasPromedio());


*/

/**
 * Reto 2: Hacer un algoritmo para ingresar los datos de N alumnos
 * con x notas cada uno
 * Los datos deben ser ingresados por el usuario
 * Al final de ingresar los N alumnos se debe mostrar el promedio de notas
 * de cada alumno y luego mostrar a todos los alumnos por consola


function A(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
    let objAlumno = {
      nombres: _nombres,
      apellidos: _apellidos,
      notas: _notas,
      dni: _dni,
      promedio: function () {
        let suma = 0;
        this.notas.forEach((elemento) => {
          suma += elemento;
        });
        return suma / this.notas.length;
      },
    };
    return objAlumno;
  }
 */
  /**
 * 1. Leer la cantidad de alumnos a ingresar
 * 2. Leer la cantidad de notas por alumno a ingresar
 * 3. Iterar la cantidad de alumnos que el usuario va a ingresar
 *  y en cada vuelta, pedir los datos del alumno incluidas las notas
 * 4. Adicionalmente, en cada vuelta agregar el alumno ingresado al
 *   arreglo de alumnos.
 * 5.Luego de ingresar a todos los alumnos, iterar nuevamente le arreglo
 * de alumnos para imprimir el promedio de cada uno de ellos en cada
 * iteración.
 * 6. Finalmente, acabadas las iteraciones, imprimir el arreglo de alumnos
 */
  /*
function A(_nombres = "", _apellidos = "", _notas = [], _dni = "") {
    let objAlumno = {
      nombres: _nombres,
      apellidos: _apellidos,
      notas: _notas,
      dni: _dni,
      promedio: function () {
        let suma = 0;
        this.notas.forEach((elemento) => {
          suma += elemento;
        });
        return suma / this.notas.length;
      },
    };
    return objAlumno;
  }
*/
/*
  let c_alumnos=0;
  let c_notas=0;
  let nota;
  let a_nota = [];
  let a_alumnos = [];
  c_alumnos = +prompt("Ingrese la cantidad de alumnos a registrar");
  for(let i=1;i<=c_alumnos;i++){
      let total= 0;
      let promedio=0;
      let nombres = +prompt(`Ingrese los nombres del alumno ${i+1} :`);
      let apellidos = +prompt(`Ingrese los apellidos del alumno ${i+1} :`);
    c_notas = +prompt("Ingrese la cantidad de notas a registrar");
    for(let j=1;j<=c_notas;j++){
        nota= +prompt("Ingrese la nota a registrar");
        a_nota.push(nota);
        promedio += nota;
    }
    a_alumnos.push(nombres,apellidos.a_nota)
    total = promedio / c_notas;
  }

  console.log(a_alumnos);
*/
