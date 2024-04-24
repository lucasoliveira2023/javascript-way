var regexp1 = new RegExp('imp');
var string1 = 'impacta';

console.log(regexp1.test(string1));



var regexp2 = /imp/;
var string2 = 'O Rato roeu a roupa do rei de Roma';
console.log(string2.match(/Ro/ig));
var a = string2.match(/Ro/ig);
console.log(a.length);



var regexp3 =  new RegExp('pre');
var string3 = 'Edu pretel foi preferencialmente atendido na previa do filme';
console.log(regexp3.test(string3));
console.log(regexp3.test(string3))

var a = string2.match(/Ro/ig);
console.log(a.length);