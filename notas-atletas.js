
let atletas = []; 

function adicionarAtleta(nome, notas) {
  atletas.push({
    nome: nome,
    notas: notas
  });
}

adicionarAtleta(/*adicione os nomes dos atletas*/"Nério Ribeiro", /*adicione as 5 notas dos atletas*/[1, 9.34, 8.42, 10, 7.88]);
adicionarAtleta(/*adicione os nomes dos atletas*/"Vivine oliveira", /*adicione as 5 notas dos atletas*/[8, 10, 10, 7, 9.33]);
adicionarAtleta(/*adicione os nomes dos atletas*/"Thales Oliveira", /*adicione as 5 notas dos atletas*/[7, 10, 9.5, 9.5, 8]);
adicionarAtleta(/*adicione os nomes dos atletas*/"Thierry oliveira", /*adicione as 5 notas dos atletas*/[10, 10, 10, 9, 9.5]);

for (let i = 0; i < atletas.length; i++) {

  let atleta = atletas[i];
  let notas = atleta.notas.sort((a, b) => a - b);
  console.log(notas + " Ordem das notas menores para a maiores ")

  let notasComputadas = notas.slice(1, 4);
  console.log(notasComputadas + " Notas que restarão depois de retirar a menor e a maior")

  let soma = 0;
  notasComputadas.forEach((nota) =>
    soma += nota);
  
  let media = soma / notasComputadas.length;

  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${notas.join(",")}`);
  console.log(`Média Válida: ${media.toFixed(2)}`);
  console.log();
};
