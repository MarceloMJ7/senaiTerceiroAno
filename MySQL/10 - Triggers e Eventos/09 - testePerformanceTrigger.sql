-- Execute um teste de performance em um trigger que é acionado frequentemente. Proponha melhorias para otimizar sua execução.

DROP TRIGGER IF EXISTS tg_atualizar_estoque;
DROP EVENT IF EXISTS ev_limpeza_temporaria;