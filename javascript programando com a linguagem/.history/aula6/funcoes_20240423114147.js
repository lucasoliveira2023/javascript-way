function potencia(pot, num)
{
    var total = 1;
    for (i = 1; i <= pot; i++) { 
        total = total *num;
    }
    console.log(total);
}
potencia(2, 3);