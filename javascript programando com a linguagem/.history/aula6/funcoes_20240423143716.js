function potencia(pot, num)
{
    var total = 1;
    for (i = 1; i <= pot; i++) { 
        total = total *num;
    }
    return total;
}
var resultado = potencia(2, 3) + potencia(3, 2);
console.log(resultado);
console.log(potencia(potencia(2, 3), 2));
// return array
console.log(resultado[0]);


