//Crie um servidor HTTP que responda com "Bem-vindo ao Node.js!

const http = require('http');

const servidor = http.createServer((req, res) => {
    res.write("Bem Vindo ao Node.js");
    res.end();
});

servidor.listen(3000);