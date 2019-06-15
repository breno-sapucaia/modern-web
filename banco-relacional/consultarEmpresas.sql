SELECT
    e.nome as Empresa,
    c.nome as Cidade
FROM
    empresas e,
    empresa_unidades eu,
    cidades c
WHERE 
    e.id = eu.empresa_id 
and 
    c.id = eu.cidade_id

    desc empresa_unidades