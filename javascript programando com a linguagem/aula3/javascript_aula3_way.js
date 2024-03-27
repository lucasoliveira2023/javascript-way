//regras de declaração
//case sensitive, variaveis e tipos de dados
nome = 'impacta';
Nome = 'tecnologia';
var idade = 29;
console.log(nome);
console.log(Nome);

//conversão de dados
var idade = "30";
var salario = "123.45";

var soma = idade + salario;

console.log(typeof soma);
console.log(soma);


var soma =  idade + Number(salario);
console.log(typeof soma);
console.log(soma);

//tipos especiais

var nome = '';
var escola = 'impacta';
var idade = 1.7976931348623157  + 309;
var resultado = escola * 3
var curso = null

console.log(nome);
console.log(resultado); // e para gerar o not a number NaN
console.log(curso);
console.log(idade);

//constantes
const Escola = 'impacta';
console.log(Escola);


//escopo da variavel
var a = 9;
b = 7;
function escopo(){
    var a = 18;
    b = 14;
    //alert (a+''+b);
}
escopo();
console.log(a);
console.log(b);

//objeto
function aluno(nome,idade,curso){
    this.nome =nome;
    this.idade = idade;
    this.curso = curso;
}

var aluno1 = new aluno('Alexandre', 25, 'js');
var aluno2 = new aluno('Fabiano', 39, 'php');
console.log(aluno1);
console.log(aluno2);
console.log(aluno1.nome);

