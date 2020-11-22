/*

function cuboDeUnNumero(numero){
    let rpta = numero * numero * numero;
    return rpta;
}

let resultado = cuboDeUnNumero(12);
console.log(resultado);
*/
/**
 * 
 * @param {Arrays<string>} nombres  
 * @param {String} nombreBuscar 
 */


function buscarNombre(nombres,nombreBuscar){
    for(let i=0; i<nombres.length; i++){
        if(nombres[i]=== nombreBuscar){
            return true;
        }
    }
    return false;
}

const nombres = ["Jorge","Juana","Maria","Luisa","Mateo" ];
buscarNombre(nombres,"Maria");

if(buscarNombre(nombres,"Maria")){
    console.log("Maria si existe");
}else{
    console.log("Maria no existe");

}

console.log("Maria" + (buscarNombre(nombres,"Maria") ? " Si existe":" No existe"));