require('dotenv').config();

const mysql = require('mysql2/promise');

async function inserirUsuario() {

    try {

        const conexao = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

        const sql = `
            INSERT INTO usuarios (nome, email)
            VALUES (?, ?)
        `;

        const valores = [
            'Marcelo',
            'marcelo@email.com'
        ];

        const [resultado] =
            await conexao.query(sql, valores);

        console.log(resultado);

        await conexao.end();

    } catch (erro) {

        console.log('Erro:', erro.message);

    }

}

inserirUsuario();