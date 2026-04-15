-- Use FLOOR para arredondar para baixo e CEIL para arredondar para cima o valor de um campo de total de vendas.

SELECT FLOOR(total_vendas) AS arredondado_baixo, 
       CEIL(total_vendas) AS arredondado_cima 
FROM vendas;