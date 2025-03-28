const http = require('http');
const PORT = 3001;
const getCharById = require('./controllers/getCharById')

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes("/rickandmorty/character")) {
        // Obtener el ID de la URL
        let arrayUrl = request.url.split('/'); // Divide la URL en partes
        let id = arrayUrl[arrayUrl.length - 1]; // Obtiene el último elemento
        let numId = Number(id); // Convierte a número

        getCharById(response, numId)
    }
    
}).listen(PORT, "localhost")