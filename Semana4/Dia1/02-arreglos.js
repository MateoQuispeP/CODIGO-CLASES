/*let edades =[45,12,38,16,19,20];

console.log(edades[1]); 
console.log(edades.length);

edades[2] = -5;
console.log(edades);

for(let i=0;i<edades.length;i++){
    console.log(edades[i]);
}

edades.push(7);
console.log(edades);

console.log("Ejercicioness gaaaa");
//// Algoritmo: Para ingresar n nombres de usuarios e insertarlos en un arreglo, finalmente mostrar.
*/
/*
let nombres='';
while(nombres!=='F'){
nombres = prompt("Ingrese el nombre que desea agregar, sino desea ingrese F para finalizar");
let A_nombres=[];
if(nombres!=='F'){
A_nombres.push(nombres);
}
}
console.log(A_nombres);
*/
/*
const n=6;
let nombres=[];
for(let i=0;i<=6;i++){
    let ingreso=prompt(`Ingrese el usuario ${i}`)
    nombres[i]=ingreso;
}
console.log(nombers);
*/
let databinarios=[1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1];
let unos =0;
let ceros= 0;
let i=0;
for(i=0;i <= databinarios.length;i++){
    if(databinarios[i]===1){
        unos++;
    }
    if(databinarios[i]===0)
        ceros++;
}
console.log(`Hay ${unos} unos`);
console.log(`Hay ${ceros} ceros`);

