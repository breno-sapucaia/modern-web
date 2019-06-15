SELECT * FROM cidades c left JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT * FROM cidade c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;