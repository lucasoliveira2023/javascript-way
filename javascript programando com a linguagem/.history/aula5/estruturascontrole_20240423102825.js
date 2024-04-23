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
var dia = new Date();
var hoje = dia.getDay();
switch (hoje) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Dia invalido');
        break;
}

// while

