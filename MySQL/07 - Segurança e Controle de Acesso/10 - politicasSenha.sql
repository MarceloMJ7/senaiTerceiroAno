-- Ative a política de senhas fortes no MySQL e aplique-a ao usuário usuario_local.

-- Usuário apenas para leitura (SELECT)
CREATE USER 'user_leitura'@'%' IDENTIFIED BY 'LeituraOnly_2026!';
GRANT SELECT ON producao.* TO 'user_leitura'@'%';

-- Usuário para manutenção de dados (INSERT, UPDATE, DELETE)
CREATE USER 'user_escrita'@'%' IDENTIFIED BY 'EscritaFull_2026!';
GRANT INSERT, UPDATE, DELETE ON producao.* TO 'user_escrita'@'%';