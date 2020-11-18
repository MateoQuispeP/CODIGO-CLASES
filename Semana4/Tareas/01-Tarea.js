/*Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. 
¿Cuál es su salario al cabo de 6
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
algoritmo y represente la solución mediante el diagrama de flujo, el
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado. */

// let salario=1500;
// let total_anual=0;
// let total=0;
// for(let i=1;i<=6;i++){
//     total_anual = salario+(salario*0.10);
//     console.log(`El salario del ${i}° año es: ${total_anual}`);
//     total+=total_anual;
// }
// console.log(`El salario de los 6° año es: ${total}`);

/*“El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles
(D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente.
 La empresa acepta tarjetas de crédito con un cargo
de 5 % sobre la compra. Suponiendo que los clientes adquieren N
hamburguesas, las cuales pueden ser de diferente tipo, realice un
algoritmo para determinar cuánto deben pagar. Represéntelo en
diagrama de flujo, pseudocódigo y diagrama N/S.  */

/*
let costo_hamburguesa;
let total_t= 0;
let total_pago = 0;
let i;
let n_hamburguesas = +prompt("Ingrese el numero de hamburguesas adquiridas");
for(i=0;i<=n_hamburguesas;i++){
    let t_hamburguesas = prompt("Tipo de Hamburguesa (S) sencilla, (D) doble, (T) triple")
    switch (t_hamburguesas) {
        case "S" :
            costo_hamburguesa = 20;
            total_t = costo_hamburguesa + (costo_hamburguesa * 0.05);
            break;
        case "D" :
            costo_hamburguesa = 25;
            total_t = costo_hamburguesa + (costo_hamburguesa * 0.05);
            break;
        case "T" :
            costo_hamburguesa = 28;
            total_t = costo_hamburguesa + (costo_hamburguesa * 0.05);
            break;
        default :
            console.log("No existe ese tipo de Hamborguesa");
            break;
    }
    total_pago += total_t;
}
console.log(`El total a pagar por la cantidad de ${i} es: ${total_pago}`);
*/

/*Se requiere un algoritmo para determinar, de N cantidades, cuántas
son cero, cuántas son menores a cero, y cuántas son mayores a cero.
Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para
representarlo, utilizando el ciclo apropiado.*/
let ccero;
let numero;
let c_may=0;
let c_men=0;
let c_cero=0;
let n_num = +prompt("Ingrese la cantidad de numeros a comprobar");
for(i=1;i<=n_num;i++){
    numero = +prompt("Ingrese un numero");
    if(numero < 0){
        let men = numero;
        console.log(`El ${men} es menor a 0`);
        c_men++;
    }else{
        if(numero > 0){
            let may = numero;
            console.log(`El ${may} es mayor a 0`);
            c_may++;
        }else{
            ccero = numero;
            console.log(`El ${ccero} es igual a 0`);
            c_cero++;
        }
    }
}
console.log(`Hay ${c_men} numeros menores a 0`);
console.log(`Hay ${c_may} numeros mayores a 0`);
console.log(`Hay ${c_cero} numeros iguales a 0`);
