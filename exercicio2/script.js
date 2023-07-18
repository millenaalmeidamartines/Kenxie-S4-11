/*
function calculaIdade(nome, anoFuturo, anoNascimento) {
  let idade = anoNascimento + anoFuturo;
  return "Em ${anoFuturo} $(nome) terá $(idade) anos de idade";
}

//Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".
*/

function calculaIdade(nome, anoNascimento, anoFuturo) {
    let idade = (anoFuturo - anoNascimento) % 100; 

    return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
  }

  console.log(calculaIdade("Pedro", 2002, 2030));