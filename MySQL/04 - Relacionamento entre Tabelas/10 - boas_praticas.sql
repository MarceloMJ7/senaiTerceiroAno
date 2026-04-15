-- Analise um banco de dados existente (pode ser fictício) e identifique como os
-- relacionamentos foram estruturados. Proponha melhorias para garantir integridade e eficiência.

-- 1 - Adicionar AUTO_INCREMENT
id_cliente INT AUTO_INCREMENT PRIMARY KEY
-- 2 - Definir NOT NULL
nome VARCHAR(100) NOT NULL
-- 3 - Adicionar ON DELETE / UPDATE
ON DELETE CASCADE
ON UPDATE CASCADE

