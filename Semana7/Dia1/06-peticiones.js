const usuarios = document.getElementById("usuarios");

axios.get("https://reqres.in/api/users").then((respuesta)=>{
    let lista = respuesta.data.data;
    lista.forEach((usu)=>{
        let liTemporal = document.createElement("li");
        liTemporal.innerText = `${usu.first_name} ${usu.last_name}`;
        usuarios.append(liTemporal);
    })
})