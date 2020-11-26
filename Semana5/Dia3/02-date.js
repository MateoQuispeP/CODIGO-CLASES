    let hoy = new Date();
    console.log(hoy);

    console.log(`Año: ${hoy.getFullYear()}`);

    console.log(`Mes: ${hoy.getMonth()}`);
    
    console.log(`Dia: ${hoy.getDate()}`);

    let navidad = new Date(2020, 11, 25);
    let navidadMenosHoy = navidad - hoy;
    console.log(navidadMenosHoy);
    console.log(`${(((navidadMenosHoy / 1000) / 60 )/ 60) / 24} dias para la navidad`);

    diasParaNavidad = (((navidadMenosHoy / 1000) / 60 )/ 60) / 24;
    console.log(`${diasParaNavidad.toFixed(2)} dias para navidad`);

    setTimeout(()=>{
        let fechaActual = new Date();
        let navidad = new Date(2020,11,25,0,0,0);
        let segundos = (navidad - fechaActual) / 1000;
        let minutos = ((navidad-fechaActual) / 1000) / 60;
        let horas = (((navidad-fechaActual) / 1000) / 60) / 60;
        let dias = ((((navidad-fechaActual) / 1000) / 60) / 60) / 24;
        

        console.log(`Quedan ${minutos} minutos para que venga San Ricolas`);
        console.log(`Quedan ${segundos} segundos para que venga San Ricolas`);
        console.log(`Quedan ${horas} horas para que venga San Ricolas`);
        console.log(`Quedan ${dias} horas para que venga San Ricolas`);
        console.log(`${dias.toFixed(0)} Dias ${horas.toFixed(0)} Horas ${minutos.toFixed(0)} Minutos ${segundos.toFixed(0)} Segundos para que venga San Ricolas`);
    }, 1000);

    /*
    setInterval(() => {
     let fechaActual = new Date(); 
     let navidad = new Date(2020, 11, 25, 0, 0,0);
    let navidadMenosHoy = navidad - hoy ;  
    let segundos = (navidad - fechaActual) / 1000; 
    let dias = segundos /86400; 
    segundos = segundos % 86400;
    let horas = segundos / 3600; 
    segundos = segundos % 3600;
    let minutos = segundos / 60; 
    segundos = segundos % 60;
    
    console.log(`Quedan ${segundos.toFixed(2)} segundos , ${minutos.toFixed(2)} minutos , ${horas.toFixed(2)} horas , ${dias.toFixed(2)} dias para que venga San Ricolas`);
 }, 1000);
 */
