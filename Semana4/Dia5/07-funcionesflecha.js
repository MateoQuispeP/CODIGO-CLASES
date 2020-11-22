/**
 * 
 * @param {number} n 
 */

const leerUsuarios = (n) =>{
    let nombres = [];
    for(let i=0;i< n;i++ ){
        nombres.push(prompt(`Ingrese el nombre ${i + 1}`));
    }
    return nombres;
}
console.log(leerUsuarios(2));

