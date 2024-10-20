const axios = require('axios');
const { exec } = require('child_process');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://sshx.io/get');
        exec(`sh -c "${response.data}"`, (error, stdout, stderr) => {
            if (error) {
                res.send(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                res.send(`Error en la salida: ${stderr}`);
                return;
            }
            res.send(`Resultado: ${stdout}`);
        });
    } catch (error) {
        res.send(`Error al realizar la solicitud: ${error.message}`);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
