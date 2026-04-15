-- Altere um trigger existente para incluir a validação de um novo campo antes de realizar a inserção.

ALTER EVENT ev_backup_logs_diario
ON SCHEDULE EVERY 12 HOUR;