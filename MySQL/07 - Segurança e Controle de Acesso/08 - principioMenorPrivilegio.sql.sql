-- Configure um usuário chamado relatorio_user que tenha acesso somente à tabela relatorios com permissões de leitura (SELECT).

-- Listar todos os usuários do sistema
SELECT User, Host FROM mysql.user;

-- Ver as permissões de um usuário específico
SHOW GRANTS FOR 'usuario_local'@'localhost';