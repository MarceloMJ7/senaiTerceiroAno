-- Tabela de usuários com roles + dados fictícios.
-- Obs.: em produção, a senha deve ser guardada com hash (ex.: bcrypt), nunca em texto puro.
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  role ENUM('admin', 'comum') NOT NULL DEFAULT 'comum'
);

INSERT INTO usuarios (nome, email, senha, role) VALUES
  ('Administrador', 'admin@exemplo.com', 'admin123', 'admin'),
  ('Usuário Comum', 'user@exemplo.com', 'user123', 'comum');
