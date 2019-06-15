INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', '95694186000132'),
    ('Vale', '27887138000146'),
    ('Cielo', '01598317000134');

SELECT * FROM empresas;

ALTER TABLE empresas MODiFY cnpj VARCHAR(14);

INSERT INTO empresa_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1)