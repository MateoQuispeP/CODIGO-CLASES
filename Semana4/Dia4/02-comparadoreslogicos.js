let edad=20;
let cazado=false;

/*La persona ingresa al establecimiento
si es mayor de edad y no tiene novia*/

if(edad>=18){
    if(edad !== true){
        console.log("pase joven");
    }
}

if(edad >= 18 && cazado!== true){
        console.log("pase joven");  
    }else{
        console.log("no admitido");
    }

/*Teoria
Los años bisiestos son divisibles entre 4 y no entre 100
Por otro lado, si son dibisibles entre 400 tambien son bisiestos */

let año=2020;

if(año % 4 == 0 && año % 100 !== 0 || año % 400 == 0){
    console.log("Año Visiesto");  
}else{
    console.log("No Año Visiesto");
}