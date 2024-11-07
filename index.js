const express = require('express'); 
const colors = require('colors'); 
const app = express(); 
const path = require('path'); 

app.use(express.urlencoded({ extended: false })); 


app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

// Middleware para servir archivos estáticos (imágenes, hojas de estilo CSS, scripts JS)
app.use(express.static(path.join(__dirname, 'public'))); // Sirve los archivos estáticos desde la carpeta 'public'



// Ruta raíz (/) que redirige automáticamente a la página '/Inicio'
app.get('/', (req, res) => res.redirect('/Inicio'));


app.get('/Inicio', (req, res) => {
    console.log("Accediendo a la página de login".bgBlue); 
    res.render('index'); 
});


app.get('/Datos', (req, res) => {
    console.log("Accediendo a la página de registro".bgMagenta);
    res.render('Datos'); 
});


app.get('/Bienvenido', (req, res) => {
    const userName = "Usuario"; 
    console.log("Accediendo a la página de bienvenida".bgRed); 
    res.render('Biendenido', { userName });
});

// Configura el puerto en el que el servidor escuchará las solicitudes HTTP
const puerto = 3030; 
console.log(`Servidor en el puerto ${puerto}`.bgGreen); 
app.listen(puerto); 