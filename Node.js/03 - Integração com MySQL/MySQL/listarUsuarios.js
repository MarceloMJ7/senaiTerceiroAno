require('dotenv').config();

const mysql = require('mysql2/promise');

async function listarUsuarios() {

    try {

        const conexao = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

      const [usuarios] = 
        await conexao.query('SELECT * FROM usuarios');
    
        console.log(usuarios);

        await conexao.end();

    } catch (erro) {

        console.log('Erro:', erro.message);

    }

}

listarUsuarios();