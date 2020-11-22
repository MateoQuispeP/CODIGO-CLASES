function imprimirmayor(arreglo, nombre){
    let mayor = 0;
    for(let i=0; i< arreglo.length;i++){
        if(arreglo[i]>mayor){
            mayor = arreglo[i];
        }
    
    }
    console.log(`El mayor de las ${nombre} es ${mayor}`);
}

let edades =[12,50,20,60,58];
let notas=[10, 15, 0.5, 12, 20, 11.5];

/*hacer un algoritmo para mostrar al mayor de las edades*/
imprimirmayor(edades,"Edades");
imprimirmayor(notas,"Notas");



