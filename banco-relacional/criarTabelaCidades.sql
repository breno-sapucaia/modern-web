CREATE TABLE IF NOT EXISTS cidades (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  estado_id INT UNSIGNED NOT NULL,
  area DECIMAL(10,2),
  PRIMARY KEY(ID),
  FOREIGN KEY (estado_id) REFERENCES estados (id)
);

CREATE TABLE IF NOT EXISTS testes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

DROP TABLE IF EXISTS testes;

select * from teste;