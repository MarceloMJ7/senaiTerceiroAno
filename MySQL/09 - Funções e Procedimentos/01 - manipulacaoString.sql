-- Crie uma consulta que utilize a função CONCAT para gerar um identificador único combinando o nome e o ID de um cliente.

SELECT CONCAT(id_cliente, '-', nome) AS identificador_unico 
FROM clientes;