-- Analise uma consulta complexa utilizando EXPLAIN, identifique possíveis gargalos
-- no desempenho e proponha melhorias usando índices ou reestruturação da consulta.

-- Executar o EXPLAIN na consulta.Procurar por campos type com valor ALL (Full Table Scan) ou rows com números muito elevados.
-- Proposta de Melhoria: Criar índices nas colunas usadas no WHERE ou JOIN, selecionar apenas as colunas necessárias e 
-- substituir subconsultas por JOINs quando possível.