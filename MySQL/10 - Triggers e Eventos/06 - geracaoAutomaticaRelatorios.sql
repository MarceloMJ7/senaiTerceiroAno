-- Configure um evento que gere relatórios
-- mensais de vendas, inserindo informações na tabela relatorios todo dia 1º de cada mês, à meia-noite.

CREATE EVENT ev_limpeza_temporaria
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
    DELETE FROM log_sessao WHERE data_fim < NOW();