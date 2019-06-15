select * from estados;

select nome, sigla as 'Estados sul' from estados where regiao = 'Sul';

select 
    * 
from 
    estados 
where 
    populacao >= 10 
order by 
    populacao 
desc;




