-- Execute uma consulta que retorne apenas os 5 primeiros clientes da tabela
-- clientes, ordenados por nome. Explique como o uso de LIMIT pode melhorar a
-- performance.

SELECT * FROM clientes ORDER BY nome LIMIT 5;