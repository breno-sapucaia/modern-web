CREATE TABLE empresas (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cnpj INT unsigned,
    PRIMARY KEY (ID),
    UNIQUE KEY (cnpj)
)


-- cidades_empresas

CREATE TABLE IF NOT EXISTS empresa_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
);

