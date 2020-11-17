/*let x = +prompt("Ingrese el primer numero");
let y = +prompt("Ingrese el segundo numero");

console.log(x+y);
*/
/*let sueldo =8500.0;
if(sueldo> 5000){
    console.log(`${sueldo} soles = Categoria Administrativo`);
}else{
    console.log(`${sueldo} soles = Categoria Operativa`);
}*/
/*
let precio   = 1200.0;
let descuento = 0;

if(precio > 900){
    descuento = precio * 0.1;
}

console.log(`Precio Final= ${precio - descuento} soles`);
*/
/*
let anio=2020;

if(anio % 4 === 0){
    if(anio % 100 === 0){
        console.log(`No es bisiesto ${anio}`);
    }else{
        console.log(`Si es bisiesto`);
    }
}
if(anio % 400 === 0){
    console.log(`Si es bisiesto`);
}

let amos=2004;
if (amos % 400 === 0){
    console.log("Si es bisiesto");
}else{ 
    if(amos % 100 === 0){
        console.log(`No es bisiesto ${amos}`);
    }else{
        console.log(`Si es bisiesto`);
    }
}*/

let h=28;
let total = 0;
if(h<=2){
    total = h*5;
}else{
    if(h<=5){
        total = 10 + (h-2) * 4;
        console.log(`${total}`);
    }else{
        if(h<=10){
            total = 22 + (h-5) * 3;
        }else{
            total = 37 + (h-10) *2;
        }
    }
}

console.log(total);