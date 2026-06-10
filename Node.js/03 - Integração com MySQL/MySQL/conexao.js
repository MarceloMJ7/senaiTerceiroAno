require('dotenv').config();

const mysql = require('mysql2/promise');

async function conectar() {

    try {

        const conexao = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

        console.log('Conectado ao MySQL!');

        await conexao.end();

    } catch (erro) {

        console.log('Erro:', erro.message);

    }

}

conectar();