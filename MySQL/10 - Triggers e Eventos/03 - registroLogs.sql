-- Crie um trigger que registre em uma tabela log_acoes toda vez que um registro for excluído da tabela clientes.
-- O log deve incluir a data/hora e a identificação do cliente excluído.

DELIMITER //
CREATE TRIGGER tg_auditoria_preco
AFTER UPDATE ON produtos
FOR EACH ROW
BEGIN
    IF OLD.preco <> NEW.preco THEN
        INSERT INTO auditoria_precos (id_produto, preco_antigo, preco_novo, data_alteracao)
        VALUES (OLD.id_produto, OLD.preco, NEW.preco, NOW());
    END IF;
END; //
DELIMITER ;