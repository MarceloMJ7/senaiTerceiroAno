-- Crie dois usuários no MySQL:
-- ○ Um usuário chamado usuario_local com acesso apenas local (localhost).
-- ○ Um usuário chamado usuario_remoto com acesso remoto (%).

-- Usuário com acesso apenas local
CREATE USER 'usuario_local'@'localhost' IDENTIFIED BY 'Senha';

-- Usuário com acesso remoto
CREATE USER 'usuario_remoto'@'%' IDENTIFIED BY 'Remota_456';