-- Crie índices nas colunas categoria e preco da tabela produtos. Explique como
-- esses índices podem melhorar consultas que envolvem filtros nessas colunas

CREATE INDEX idx_categoria ON produtos (categoria);
CREATE INDEX idx_preco ON produtos (preco);