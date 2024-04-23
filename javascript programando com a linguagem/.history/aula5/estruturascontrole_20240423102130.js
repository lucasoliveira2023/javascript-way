//if, if else
var nota  = 7;
    if (nota >= 7) {
        console.log("Aprovado");
    }
    else {
        console.log("Reprovado");
    }


//elseif
var nota = 5;
    if (nota >=7 && nota <= 10) {
        console.log("Aprovado");
    }else if (nota >=5 && nota < 7) {
        console.log("Recuperacao");
    }else if (nota>=0 && nota <7) {
        console.log("Reprovado");
    }else {
        console.log("valor invalido");
    }
    
// if cinducao de existencia
var note = true;
if (nota) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

// switch
var dia = new Date()