const express = require("express");
const router = require("./routes/index");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

// Body parser
server.use(express.json());

// Tus rutas
server.use("/rickandmorty", router);

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});