require('dotenv').config();

const mysql = require('mysql2/promise');

async function atualizarUsuario() {

    try {

        const conexao = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });

        const sql = `
        UPDATE usuarios
        SET nome = ?
        WHERE id = ?
    `;

        const valores = [
            'Marcelo de Moura',
            1
        ];

        const [resultado] =
            await conexao.query(sql, valores);

        console.log(resultado);

        await conexao.end();

    } catch (erro) {

        console.log('Erro:', erro.message);

    }

}

atualizarUsuario();