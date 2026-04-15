-- Crie um usuário chamado usuario_servidor com permissão de acessar o banco de dados apenas do servidor local.

CREATE USER 'relatorio_user'@'localhost' IDENTIFIED BY 'Relatorio_Pwd!000';
GRANT SELECT ON meu_banco.relatorios TO 'relatorio_user'@'localhost';