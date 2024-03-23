const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear servidor HTTP
const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    //obtencion de la extencion de archivos
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    // Busca el tipo de contenido correspondiente a la extension
    const contentTypeHeader = contentType[extname] || 'application/octet-stream';

    // manejo de errores
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentTypeHeader });
            res.end(content, 'utf-8');
        }
    });
});

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(PORT, () => {
    console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
