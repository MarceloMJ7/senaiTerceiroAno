-- Extraia os três primeiros caracteres do nome de um produto na tabela produtos.

SELECT SUBSTRING(nome_produto, 1, 3) AS iniciais 
FROM produtos;