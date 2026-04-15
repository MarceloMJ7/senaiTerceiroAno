-- Escreva uma consulta que utilize NOW para exibir a data e hora atuais, formatando a saída para o formato DD/MM/AAAA HH:MM:SS com DATE_FORMAT.

SELECT DATE_FORMAT(NOW(), '%d/%m/%Y %H:%i:%s') AS data_hora_formatada;