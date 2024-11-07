const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'inicio.html'));
});

app.get('/Datos', (req, res) => {
    res.sendFile(path.join(__dirname, 'Datos.html'));
});

app.get('/Bienvenido', (req, res) => {
    res.sendFile(path.join(__dirname, 'Bienvenido.html'));
});

app.listen(3030, () => {
    console.log("Servidor en funcionamiento en la url");
});