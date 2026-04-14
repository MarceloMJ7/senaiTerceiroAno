-- Explique e configure exemplos práticos para os tipos de cardinalidades 1:1, 1:N e N:M, criando tabelas e inserindo registros.

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY
);

CREATE TABLE perfil (
    id_usuario INT UNIQUE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);