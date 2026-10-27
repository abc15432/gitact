// teste.js: se algo falhar, o process.exit(1) faz o workflow ficar vermelho
const soma = (a, b) => a + b;
if (soma(2, 3) !== 5) {
  console.error("Falhou!");
  process.exit(1);
}
console.log("Teste passou!");