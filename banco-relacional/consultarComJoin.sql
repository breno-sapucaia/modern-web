select e.nome as Estado,c.nome as Cidade,e.regiao as Regiao from estados e, cidades c WHERE e.id = c.estado_id;

select * from estados where sigla="RJ";

select * from estados;

select * from cidades;
UPDATE cidades set estado_id = 19 where id = 2 


Select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e
INNER JOIN cidades c on e.id = c.estado_id


-- sem join...
SELECT
    e.nome AS 'Estado',
    c.nome AS 'Cidade',
    regiao AS 'Região do estado',
    e.sigla AS 'Sigla',
    c.area AS 'Area da Cidade',
    e.populacao AS 'População da Cidade'
FROM
    estados e, 
    cidades c
where 
e.id = c.estado_id;


-- com join
    SELECT
        c.nome AS 'Cidade',
        e.nome AS 'Estado',
        e.regiao AS 'Região'
    FROM 
        estados e
    INNER JOIN
        cidades c
    ON
        e.id = c.estado_id;

    SELECT 
        *
    FROM
        estados e
    RIGHT JOIN
        cidades c
    ON
        e.id = c.estado_id