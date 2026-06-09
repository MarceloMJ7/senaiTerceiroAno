//Escreva um código para criar e ler um arquivo usando o módulo fs

const fs = require('fs/promises');

async function arquivo(){
try {
   await fs.writeFile(
        'Mensagem.txt',
        'Olá, Mundo!!'
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


