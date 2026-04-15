-- Crie um índice na coluna nome da tabela clientes e compare o plano de execução
-- de uma consulta SELECT com e sem índice.

-- Antes (Sem índice)
EXPLAIN SELECT * FROM clientes WHERE nome = 'Maria Souza'; -- Gera Full Table Scan 

-- Depois (Com índice)
CREATE INDEX idx_nome ON clientes (nome);
EXPLAIN SELECT * FROM clientes WHERE nome = 'Maria Souza'; -- Acessa registros diretamente [