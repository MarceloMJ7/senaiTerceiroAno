-- Arredonde o valor de um campo de preço para duas casas decimais usando a função ROUND.

SELECT ROUND(preco, 2) AS preco_arredondado 
FROM produtos;