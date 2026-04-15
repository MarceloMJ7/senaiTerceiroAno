-- Liste todos os usuários criados no banco de dados e suas permissões utilizando os comandos adequados.

-- Ativar a política de senha forte globalmente
SET GLOBAL validate_password_policy = 'STRONG';

-- Aplicar alteração ao usuário para garantir que cumpre a nova política
ALTER USER 'usuario_local'@'localhost' IDENTIFIED BY 'Complexa_2026$';
