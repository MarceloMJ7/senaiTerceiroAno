-- Conceda permissão de leitura (SELECT) na tabela clientes para o usuário usuario_local.
-- ○ Conceda todas as permissões em um banco de dados chamado loja para o usuário admin_user.

GRANT SELECT ON meu_banco.clientes TO 'usuario_local'@'localhost';

GRANT ALL PRIVILEGES ON loja.* TO 'admin_user'@'localhost';