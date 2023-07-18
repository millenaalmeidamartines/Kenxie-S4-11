/*
function calculaIMC(peso, altura) {
  let alturaAoQuadrado = altura * altura;
  let imc = peso / altura;
}

//Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358
*/


function calculaIMC(peso, altura) { 
    let alturaAoQuadrado = altura * altura; 
    let imc = peso / alturaAoQuadrado;  

    return imc;
  }

  console.log(calculaIMC(80, 1.80))
