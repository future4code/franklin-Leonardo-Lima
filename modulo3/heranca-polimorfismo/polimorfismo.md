## Exercício 1

```typescript
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
```

- a. Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu? Todas as propriedades foram imprimidas por serem públicas por padrão

## Exercício 2

```typescript
abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
```
- a. Não é possível instanciar uma classe abstrata
- b. Precisamos criar uma classe nova e herdar da classe Place

## Exercício 3

- a. Não é possível instanciar uma classe abstrata
- b. Interfaces não podem ter implementações de lógicas, propriedades privadas e inicialização de propriedades dentro delas
- c. Acredito que foi para ter a implementação do método getCep

## Exercício 4

- a. Todos os métodos da classe Place, Residence e da interface Client. Propriedades das classes e interface anterior que forem públicas ou protegidas.

```typescript

export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
}
class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
```

## Exercício 5

```typescript
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}
```
- a. Quais as semelhanças dessa classe com a ResidentialClient? extende de uma classe e implementa de uma interface, possui um construtor padrão e também chama o construtor da classe mãe.

- a. Quais as diferenças dessa classe com a ResidentialClient? Implementações diferentes.

## Exercício 6

```typescript
class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
```
- a. Industry
- b. Client
- c. Para não serem alteradas as propriedades dessa classe