// Implemente um stream para processar dados de um arquivo grande.
const fs = require('fs/promises');
const fsNormal = require('fs');

async function criarArquivo() {
    await fs.writeFile(
        'arquivo.txt',
        'Criando Conteúdo'
    )
    const stream = fsNormal.createReadStream( //Stream de leitura
        'arquivo.txt',
        'utf8'
    );
    
    stream.on('data', (chunk) => { //Escutar o evento
        console.log(chunk);
    });
    
    stream.on('end', () => { //Avisar que terminou
        console.log('Leitura Concluída');
    });
    
    stream.on('error', (erro) => { //Tratamento de erro
        console.log('Erro', erro.message);
    });

}

criarArquivo();





