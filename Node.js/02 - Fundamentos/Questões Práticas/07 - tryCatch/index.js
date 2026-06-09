//Crie um script que utilize try/catch para tratar erros ao acessar um arquivo inexistente.

const fs = require('fs/promises');

async function arquivo() {
    try {
        await fs.writeFile(
            'Mensagem.txt',
            'Olá, Mundo!! Estamos estudando Node'
        );

        const conteudo = await fs.readFile(
            'Mensagem.txt',
            'utf8'
        );

        console.log(conteudo);
    } catch (error) {
        console.log('Erro:', error.message);
    }
};

arquivo();