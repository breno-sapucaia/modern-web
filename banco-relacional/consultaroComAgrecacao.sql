SELECT
    regiao AS 'Região',
    sum(populacao) as Total
FROM `estados`
GROUP BY regiao
ORDER BY TOTAL DESC


SELECT
    avg(populacao) as Total
FROM `estados`

