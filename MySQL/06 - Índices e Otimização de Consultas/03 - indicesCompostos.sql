-- Crie um índice composto nas colunas nome e cidade da tabela clientes. Em
-- seguida, explique como esse índice pode otimizar uma consulta que filtra clientes
-- por nome e cidade simultaneamente.

CREATE INDEX idx_nome_cidade ON clientes (nome, cidade);