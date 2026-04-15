-- Otimize uma consulta que filtra clientes usando UPPER(nome) para evitar
-- operações que impeçam o uso de índices. Explique a mudança feita

SELECT * FROM clientes WHERE nome = 'João Silva';