## Exercício 1

```typescript
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public introduceYourself(): string {
   return `Olá, sou ${this.name}. Bom dia!`;
  }
}
```

- a. Seria possível imprimir a senha (password) atrelada a essa instância? Não

- b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? 1

## Exercício 2

```typescript
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
const customer = new Customer('1', 'email', 'name', 'pass', 'creditCard');
customer.introduceYourself()
```

- a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 1

- b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê? 1

## Exercício 3

- a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê? Não, a propriedade herdada password ainda continua sendo privada.

## Exercício 4
- implementado no código
## Exercício 5
- implementado no código
