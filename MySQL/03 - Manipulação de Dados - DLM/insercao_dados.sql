CREATE TABLE
    funcionarios (
        id_funcionario int auto_increment PRIMARY KEY,
        nome varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        cargo varchar(100) NOT NULL
    );

INSERT INTO
    funcionarios (nome, email, cargo)
VALUES
    (
        "Cristiano Ronaldo",
        "Cristiano_Ronaldo@hotmail.com",
        "Jogador"
    ),
    (
        "Cristiano",
        "Cristiano_Ronaldo@hotmail.com",
        "player"
    ),
    (
        "Ronaldo",
        "CristianoRonaldo@hotmail.com",
        "Jogador3"
    ),
    (
        "Ronaldinho",
        "Cristiano_o@hotmail.com",
        "Jogador2"
    ),
    ("Messi", "Crino_Ronaldo@hotmail.com", "Jogador4"),
    ("Neymar", "Criso_Ronaldo@hotmail.com", "Jogador1"),
    ("Bale", "Cristio_Ronaldo@hotmail.com", "Jogador5");

ALTER TABLE funcionarios
ADD COLUMN cidade varchar(100) DEFAULT "não informado";

INSERT INTO
    funcionarios (nome, email, cargo)
VALUES
    ("Ronaldinho", "cristianinho@outlook.com", "tec");

SELECT
    *
FROM
    funcionarios
WHERE
    cargo = "tec";

SELECT
    *
FROM
    funcionarios
ORDER BY
    nome ASC;

SELECT
    *
FROM
    funcionarios
LIMIT
    3;

SELECT DISTINCT
    cidade
FROM
    funcionarios;

SELECT
    cargo,
    COUNT(*) AS total_funcionarios
FROM
    funcionarios
GROUP BY
    cargo;

SET
    SQL_SAFE_UPDATES = 0;

UPDATE funcionarios
SET
    cargo = "Desempregado"
WHERE
    nome = "Ronaldo";

    