//Configure um servidor HTTP que responda de forma diferente para cada rota.

const http = require('http');

const servidor = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Página Inicial");
    } else if (req.url === '/contato') {
        res.end("Página de Contato");
    } else if(req.url === '/produtos'){
        res.end("Página de produtos");
    } else {
        res.end("Página não encontrada");
    }
});

servidor.listen(3000, () => {
    console.log('Servidor Rodando');
});