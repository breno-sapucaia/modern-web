START TRANSACTION;

UPDATE estados
SET nome = 'Paraná' , populacao = 11.32
WHERE sigla = 'PR';


select * from estados where sigla = 'PR';

ROLLBACK;

COMMIT;



-- WHERE sigla = 'MA';
