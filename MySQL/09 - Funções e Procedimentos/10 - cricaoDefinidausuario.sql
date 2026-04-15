-- Crie uma função que calcule o valor total de um pedido aplicando um desconto percentual e use-a em uma consulta.

CREATE FUNCTION calcular_total_com_desconto (valor DECIMAL(10,2), desconto_perc DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN valor - (valor * desconto_perc / 100);
END;

SELECT nome, calcular_total_com_desconto(preco, 15) AS preco_com_15_off 
FROM produtos;