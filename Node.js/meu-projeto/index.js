const axios = require('axios');
const { default: chalk } = require('chalk');
const fs = require('fs');

fs.readFile('texto.txt', 'utf8', (erro,dados) => {
    if(erro){
        console.log('Erro ao ler arquivo');
        return;
    }
    console.log(chalk.blue(dados));
})

axios.get('https://jsonplaceholder.typicode.com/users').then(response => {console.log(response.data);
}).catch(error => console.log('erro:', error.message))

console.log(chalk.green("Bem vindo ao node"));

setTimeout( () => {
    console.log("mensagem aparece depois de 3 segundos");
}, 3000);


