const args = process.argv;

switch (args[2]) {
  case "add":
    console.log(Number(args[3]) + Number(args[4]));

    break;
  case "sub":
    console.log(Number(args[3]) - Number(args[4]));

    break;

  case "mult":
    console.log(Number(args[3]) * Number(args[4]));

    break;
  case "div":
    console.log(Number(args[3]) / Number(args[4]));

    break;
  default:
    break;
}
