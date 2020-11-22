let dcto=0;
let productos=[13.5,14.6,0.80,1,2.50,80,200,500,900];
let total=0;
/* si el total es mayor a S/500 Hacer el descuento del 5%;*/

for(let i=0; i < productos.length;i++){
    total += productos
}
if(total >= 500 ){
    dcto = total * 0.05;
}else{
    dcto = total * 0.01;
}

dcto = total > 500 ? total *0.05 : total * 0.01;


let num1= 3847;
let num2= 3845;
max = num1 > num2 ? num1 : num2;

max = num1 > num2 ? console.log(num1) : console.log(num2);

console.log( num1 > num2 ? num1 : num2);

/*
    hacer un algoritmo
*/
