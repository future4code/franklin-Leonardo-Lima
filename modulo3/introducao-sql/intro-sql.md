## Exercício 1

- a)
```
USE `franklin-leonardo-lima`; # Seleciona o schema

CREATE TABLE IF NOT EXISTS Actor ( # cria a tabela de nome actor
    id VARCHAR(255) PRIMARY KEY, # cria a coluna id do tipo varchar limitado a 255 caracteres como chave primária
    name VARCHAR (255) NOT NULL, # cria a coluna name do tipo varchar não nulo
    salary FLOAT NOT NULL, # cria a coluna salary do tipo decimal não nulo
    birth_date DATE NOT NULL, # cria a coluna birth_date do tipo data não nulo
    gender VARCHAR(6) NOT NULL # cria a coluna gender do tipo varchar limitado a 6 caracteres não nulo
);
```

- b)
```
DESCRIBE `Actor`; # Mostra a estrutura da tabela Actor

SHOW TABLES; # Mostra todas as tabelas existes no schema

SHOW DATABASES; # Mostra os schemas existentes
```

- c)
```
DESCRIBE `Actor`; # Mostra a estrutura da tabela Actor
```

## Exercício 2

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

- a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

- b)
```
INSERT INTO Actor (id, name, salary, birth_date, gender) # Entrada duplicada para a chave primária 002
VALUES(
  "002", 
  "Leandra",
  1200000,
  "1963-08-23", 
  "female"
);
```

- c)
```
INSERT INTO Actor (id, name, salary) # Os valores passados não correspondem ao numero de colunas
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

- d)
```
INSERT INTO Actor (id, salary, birth_date, gender) # coluna name não pode ser nula ou não tem um valor padrão
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Ricardo",
  400000,
  "1949-04-18", 
  "male"
);
```

- e)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, # formato de data inválido
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

- f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Camila Pitanga",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Sergio Reis",
  400000,
  "1949-04-18", 
  "male"
);
```

## Exercício 3

- a)
```
SELECT * from Actor WHERE gender = "female";
```

- b)
```
SELECT salary  from Actor WHERE name = 'Tony Ramos';
```

- c)
```
SELECT *  from Actor WHERE gender  = 'invalid';
```

- d)
```
SELECT
	id,
	name,
	salary
from
	Actor
WHERE
	salary < 500000;
```

- e)
```
SELECT id, nome from Actor WHERE id = "002"; # coluna nome não existe

SELECT id, name from Actor WHERE id = "002";

SELECT
	id,
	name
from
	Actor
WHERE
	id = "002";
```

## Exercício 4

- a)
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") # Seleciona onde name começa com A ou J
AND salary > 300000; # E salary maior do que 300000
```

- b)
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" AND name NOT LIKE "J%")
AND salary > 350000;
```

- c)
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
```

- d)
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%") OR (name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN  350000 AND 900000;
```

## Exercício 5

- a)
```
CREATE TABLE IF NOT EXISTS Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

- b)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-01",
    7
);
```

- c)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
)
```
- d)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
    "2017-11-02",
    8
);
```
- e)
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

## Exercício 6

- a)
```
SELECT id, title, rating FROM Movie WHERE id = "001";
```

- b)
```
SELECT * FROM Movie WHERE title = "Doce de mãe";
```

- c)
```
SELECT id, title, synopsis FROM Movie WHERE rating > 9;
```

## Exercício 7

- a)
```
SELECT * FROM Movie WHERE title LIKE  "%vida%";
```

- b)
```
SELECT * FROM Movie WHERE title LIKE  "%doce%" OR synopsis  LIKE  "%doce%";
```
- c)
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04";
```
- d)
```
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%doce%" OR
      synopsis LIKE "%doce%") AND rating > 7;
```