var autorizado = new Boolean(1);
console.log(typeof autorizado);
console.log(autorizado instanceof Object);
console.log(autorizado instanceof Boolean);
console.log(autorizado instanceof Number);
console.log(autorizado.valueOf());

//objeto primitivo number
var idade = new Number(25);
console.log(typeof idade);
console.log(idade instanceof Object);
console.log(idade instanceof Boolean);
console.log(idade instanceof Number);
console.log(idade.valueOf());

//stings
var nome = new String("impacta");
var sobrenome = new String("tecnologia");
console.log(typeof nome);
console.log(nome instanceof Object);
console.log(nome instanceof String);
console.log(nome.valueOf());
console.log(nome.length);

var js ='javascript e usual'