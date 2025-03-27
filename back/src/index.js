const http = require('http');
const PORT = 3001;
const data = require('./utils/data');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url.startsWith("/rickandmorty/character/")) { // startsWith verifica que comience con lo que le digo
        // Obtener el ID de la URL
        let arrayUrl = request.url.split('/'); // Divide la URL en partes
        let id = arrayUrl[arrayUrl.length - 1]; // Obtiene el último elemento
        let numId = Number(id); // Convierte a número

        // Buscar el personaje en los datos
        let personaje = data.find((char) => char.id === numId); // me devuelve el valor de la propiedad, Ejemplo: [{id:1}, {id:2}] si el id que busco es 2, me devuelve 2.

        if (personaje) {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(personaje));
        } else {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ error: "Personaje no encontrado" }));
        }
        return;
    }
}).listen(PORT, "localhost")