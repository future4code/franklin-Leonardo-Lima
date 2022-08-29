class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];
  // a. Construtores são basicamente funções de inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas
  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

// b. Construtor chamado 1x
new UserAccount("123", "Leonardo", 30);

// c. Para ter acesso a propriedades privates pricisamos criar métodos públicos de acesso.
