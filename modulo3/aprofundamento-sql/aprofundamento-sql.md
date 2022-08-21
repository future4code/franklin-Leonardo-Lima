### Exercício 1

 - a) 
```
ALTER TABLE Actor DROP COLUMN salary; # Exclui a coluna salary
```

 - b) 
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6); # altera o nome da coluna gender para sex varchar(6)
```

 - c) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255); # altera o tamanho limite de caracteres da coluna gender
```

 - d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

 - a) 
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

 - b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

 - c) 
```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

- d) Nem uma linha afetada

### Exercício 3

 - a) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

 - b) 
```
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

### Exercício 4

 - a) 
```
SELECT MAX(salary) FROM Actor
```

 - b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

 - c) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

 - d) 
```
SELECT SUM(salary) FROM Actor
```

### Exercício 5

 - a) 
```
SELECT COUNT(*), gender # conta o numero de atores e atrizes e exibe a coluna gender
FROM Actor # seleciona a tabela
GROUP BY gender # agrupa os resultados por gender
```

 - b) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

 - c) 
```
SELECT * FROM Actor
ORDER BY salary;
```

 - d) 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

 - e) 
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

 - a) 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

 - b) 
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

 - c) 
```
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```

 - d) 
```
DELETE FROM Movie WHERE id = "001"
```