//Implemente um stream Duplex para modificar dados durante a leitura e escrita

const fs = require('fs'); // Módulo para manipular arquivos
const { Transform } = require('stream'); //

const transformar = new Transform({
    transform(chunk, encoding, callback) {
        callback(
            null,
            chunk.toString().toUpperCase()
        );
    }
});

fs.createReadStream('arquivo.txt', 'utf8')
    .pipe(transformar)
    .pipe(process.stdout);