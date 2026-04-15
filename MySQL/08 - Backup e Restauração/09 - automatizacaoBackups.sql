-- Configure um cron job para realizar backups automáticos do banco de dados biblioteca diariamente às 2h da manhã, salvando os arquivos em um diretório  /backups. 

0 2 * * * mysqldump -u usuario -p biblioteca > /backups/backup_$(date +\%F).sql