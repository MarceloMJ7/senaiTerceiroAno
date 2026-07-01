-- Banco do Sistema de Controle de Estoque.
-- Obs.: em produção, a senha deve ser guardada com hash (bcrypt).
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  role ENUM('admin', 'comum') NOT NULL DEFAULT 'comum'
);

CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  categoria VARCHAR(80),
  preco DECIMAL(10, 2) NOT NULL DEFAULT 0,
  quantidade INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS movimentacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  produto_id INT NOT NULL,
  tipo ENUM('entrada', 'saida') NOT NULL,
  quantidade INT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

INSERT INTO usuarios (nome, email, senha, role) VALUES
  ('Administrador', 'admin@estoque.com', 'admin123', 'admin'),
  ('Operador', 'operador@estoque.com', 'op123', 'comum');
