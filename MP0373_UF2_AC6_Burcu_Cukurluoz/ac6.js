window.onload = function () {
    descargarDatosPaises();
    // descargarUsuarios();
}

async function descargarDatosPaises() {
    // Hacemos una petición de datos a la API
    let url = "https://countriesnow.space/api/v0.1/countries/capital";
    let tabla = document.querySelector("#tablaPaises");
    
    try {
        let respuesta = await fetch(url);
        // console.log(respuesta);
        // Parseamos la respuesta: string -> objeto js
        let datos = await respuesta.json();
        // Iteramos los datos para listar países y capitales
        for (let pais of datos.data) {
            console.log("País: " + pais.name + ", capital: " + pais.capital);
            let fila = "<tr>" +
                       "<td>" + pais.name + "</td>" +
                       "<td>" + pais.capital + "</td>" +
                       "<td>" + pais.iso2 + "</td>" +
                       "<td>" + pais.iso3 + "</td>" +
                       "</tr>";
            tabla.innerHTML += fila;
        }
    } catch (error) {
        console.log("Error al cargar los datos:", error);
    }
}
