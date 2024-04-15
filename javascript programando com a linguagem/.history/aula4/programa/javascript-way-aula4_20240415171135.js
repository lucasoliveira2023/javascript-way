var num1 = 1;  //operadores aritmeticos
var num = 30;

var result = num + num1;
console.log(result);

var num2 = 5;
var num3 = 20;

var result2 = num2 - num3;
console.log(result2);

// operadores de concatenacao

var num4 = "15";
var num5 = "20";

var result3 = num4 + num5;
console.log(result3);



var first_name = "Lucas";
var last_name = "franca";
console.log(first_name + " " + last_name);

//operadores de distribuicao

var idade = 28

console.log (idade);

idade2 = idade + 10;
console.log (idade2);

idade2 ++;

//operadores de comparacao
var idade = 24;
var age = '25';
var quant = 25;
var idademae = 63;

//igualdade
console.log(idade==age);

//identicas
console.log(idade===age);
console.log(idade===quant);

//diferente
console.log(idade != idademae);
console.log(idade != age);

//maior e menor 
console.log(idade >idademae);
console.log(idade < idademae);

//operadores lógicos
var idade = 24;
var age = '25';
var quant = 25;
var idademae = 63;

console.log(idade == quant && quant <idademae);//nao reconhece o end
console.log(idade == quant || quant > idademae);// nao reconhece o or

// operadores condicionais
var idade = 25;
var idademae = 63;

var retorno = (idade < idademae);
console.log(retorno);

//operador especial type of 
var idade = 25;
var idademae = 63;

var retorno = (idade < idademae);
console.log(retorno);
console.log(typeof retorno);

// operador especial this == aponta para o proprio objeto


// Definindo um objeto
const pessoa = {
    nome: "João",
    idade: 30,
    apresentar: function() {
      console.log("Olá, eu sou " + this.nome + " e tenho " + this.idade + " anos.");
    }
  };
  
  // Chamando o método apresentar
  pessoa.apresentar();
  