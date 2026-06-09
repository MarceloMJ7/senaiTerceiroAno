// Configure e leia um arquivo JSON usando o módulo fs.

const fs = require('fs/promises');

async function lerDadosUser() {
    try {
        const dadosUsuario = await fs.readFile( //Ler o arquivo Json
            'user.json',
            'utf8'
        )
        const leituraDados = JSON.parse(dadosUsuario); //Converter o arquivo JSON 
        console.log(leituraDados.nacionalidade);
    } catch (error) {
        console.log('Erro:', error.message);
    }
}

lerDadosUser();