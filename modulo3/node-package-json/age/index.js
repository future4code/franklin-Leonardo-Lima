// como fazemos para acessar os parâmetros passados na linha de comando para o Node?
const args = process.argv;

console.log(
  `Olá, ${args[2]}! Você tem ${args[3]} anos. Em sete anos você terá ${
    Number(args[3]) + 7
  }`
);
