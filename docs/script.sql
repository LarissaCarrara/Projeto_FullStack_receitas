DROP DATABASE IF EXISTS receitas;
CREATE DATABASE receitas;
USE receitas;

CREATE TABLE receita(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ingredientes TEXT NOT NULL,
    modofazer TEXT NOT NULL,
    rendimento VARCHAR(10) NOT NULL
);

INSERT INTO receita VALUES
("","brigadeiro", "leite condensado, chocolate em pó, manteiga", "colocar tudo na penela", "5");