-- Ative o agendador de eventos no MySQL e verifique se ele está funcionando corretamente.

CREATE EVENT ev_backup_logs_diario
ON SCHEDULE EVERY 1 DAY
STARTS '2026-04-15 02:00:00'
DO
    INSERT INTO historico_logs SELECT * FROM logs_atuais;