-- Revogue a permissão de leitura (SELECT) na tabela clientes do usuário usuario_local.

REVOKE SELECT ON meu_banco.clientes FROM 'usuario_local'@'localhost';
