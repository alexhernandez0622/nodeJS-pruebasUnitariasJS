//Importar el módulo de supertest para realizar las pruebas
const request = require('supertest');
// Importar el archivo que contiene el msj a probar
const app = require('./app');
// Iniciar una descripción de las pruebas unitarias para "app.js"
describe('Pruebas Unitarias para app.js', () => {
    // Definir una prueba que verifique si la solicitud GET devuelve un saludo
    it('Debería devolver un mensaje de saludo al hacer una solicitud GET', async() => {
        // Realizar una solicitud GET para la aplicación
        const response = await request(app).get('/');
        // Verificar que el estado de la respuesta sea 200 (OK)
        expect(response.status).toBe(200);
        // Verifica que el cuerpo del mensage contenga el mismo msj esperado
        expect(response.body.message).toBe('Hola July, Bienvenida');
    });
});