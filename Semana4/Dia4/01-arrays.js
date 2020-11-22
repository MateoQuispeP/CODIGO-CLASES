/*Indica o imprime la posicion en el que dennis se encuentra 
Asumir que no se repitan los nombres*/
/*
let i=20;
let nombre=["jorge","samanta","dayana","dennis","brunela","paty"]
for(let i=1;i<nombre.length;i++){
    if(nombre[i]==="dennis"){
        console.log(`La posicion de Dennis es: ${i}`);
        break;
    }
}
console.log(nombre);
console.log(i);

*/

let numerosBiniarios=[0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0]
/* Del arreglo numeros Binarios, imprimir solmanete los numeros binarios */
for(let i=1;i<numerosBinarios.length;i++){
    if(numerosBiniarios[i]===1){
        continue;
    }
    console.log(numerosBinarios[i]);
}