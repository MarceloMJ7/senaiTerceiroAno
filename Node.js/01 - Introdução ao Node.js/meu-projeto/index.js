const axios = require('axios');
const { default: chalk } = require('chalk');
const fs = require('fs/promises');

/*fs.readFile('texto.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.log('Erro ao ler arquivo');
        return;
    }
    console.log(chalk.blue(dados));
})

axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    console.log(response.data);
}).catch(error => console.log('erro:', error.message))

console.log(chalk.green("Bem vindo ao node"));

setTimeout(() => {
    console.log("mensagem aparece depois de 3 segundos");
}, 3000);

function somar(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado)
}

function mostrarResultado(resultado) {
    console.log(resultado);
}

somar(5, 6, mostrarResultado);
*/

async function lerUsuario() {
    try {
        const dados = await fs.readFile(
            'user.json',
            'utf8'
        );
        const usuario = JSON.parse(dados);
        console.log(usuario);
    } catch (erro) {
        console.log('Erro:', erro.message);
    }
}

lerUsuario();


const dataHoje = new Date;

console.log(
    dataHoje.toLocaleString('pt-BR')
);