/* 
function diaDaSemana(n) {
  let resultado = "";

  if (n === 1 && n === '1') {
    resultado = 'Domingo';
  } else if(n == 2 ) {
    resultado = 'Segunda-feira';
  } else if(n == '3') {
    resultado = 'Terça-feira';
  } else if(n === 4 || n === '4') {
    resultado = 'Quarta-feira';
  } else if(n = 5) {
    resultado = 'Quinta-feira';
  } else if(n = '6') {
    resultado = 'Sexta-feira'; 
  } else(n == 7) {
    resultado = 'Sábado';
  } else if() {
    resultado = 'Valor Inválido';
  }

  return resultado;
}

//Ao receber '1' a função deve retornar 'Domingo'
//Ao receber 3 a função deve retornar 'Terça-feira'
//Ao receber 0 a função deve retornar 'Valor Inválido'
*/


function diaDaSemana(n) {
    let resultado = "";

    if (n == 1) {
        resultado = 'Domingo';
    } else if (n == 2) {
        resultado = 'Segunda-feira';
    } else if (n == 3) {
        resultado = 'Terça-feira';
    } else if (n == 4) {
        resultado = 'Quarta-feira';
    } else if (n == 5) {
        resultado = 'Quinta-feira';
    } else if (n == 6) {
        resultado = 'Sexta-feira';
    } else if (n == 7) {
        resultado = 'Sábado';
    } else {
        resultado = 'Valor inválido'
    }

    return resultado;
}

console.log(diaDaSemana(1));