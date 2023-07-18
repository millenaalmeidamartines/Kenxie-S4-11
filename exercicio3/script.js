/*
function algarismosEmUmNumero(n) {
  let str = `$(n)`;
  let contagem = str.lenght;

  if (n != parseInt(n)) {
    contagem = contagem + 1;
  }

  return n;
}

//Ao receber 3.14159265 a função deve retornar 9.
*/

function algarismosEmUmNumero(n) {
    let str = `${n}`;  
    let contagem = str.length;
  
    if (n != parseInt(n)) {
      contagem = contagem - 1;
    }
  
    return contagem;
  }
  
console.log(algarismosEmUmNumero(3.14159265));