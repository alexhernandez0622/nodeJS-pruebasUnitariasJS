// Prueba Unitaria que envíe un saludo a un usuario

/*Inicializar una variable que reciba el servidor de espress*/
const express = require('express');
/*Inicializar una variable que me permita activar la aplicación con su servidor*/
const app = express();

/*Configurando la ruta para manejar las solicitudes de la aplicación*/
app.get('/', (req, res) => {
    /*Cuando se recibe la solicitud GET, responderá con un codigo de estado de que si es correcto o no*/
    res.status(200).json({ message: 'Subir wireframes a canvas'});
});

/*Exportamos el achivo para que se pueda utilizar en otros archivos de nuestro proyecto*/
module.exports = app;