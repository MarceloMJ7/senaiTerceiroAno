-- Habilite logs binários no MySQL e explique como usar o arquivo de log para criar um  backup incremental. 
mysqlbinlog mysql-bin.000001 > backup_incremental.sql