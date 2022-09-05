## Exercício 1

- a. Chave estrangeira faz referência a uma coluna de outra tabela, geralmente a coluna do id.

- b.

```sql

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Muito bom!", 7, "004");
```
- c. Não é possível relacionar a um id inexistente.

- d.

```sql
ALTER TABLE Movie DROP COLUMN rating;
```

## Exercício 2

- a. Cria a tabela intermediária entre Movie e Actor

```sql
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

- b.

```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);
```

- c. Não é possível relacionar uma das tabelas com outras que não possuam um id válido.

- d. Impedida de exluir por possuir uma chave estrageira

## Exercício 3

- a. Faz a intersecção entre tabelas onde movie.id é igual a rating.movie_id

```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

- b.

```sql
SELECT m.id as movie_id, m.title as movie_name, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
