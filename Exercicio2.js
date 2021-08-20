console.log("Jogo de adivinhação")
let numeros = Math.floor(Math.random(0,10) * 11);
let resultado = parseInt(prompt("Digite um número"));
console.log(`O computador escolheu ${numeros}`);

if (resultado === numeros) {
  console.log("ganhou");
} else { 
  console.log("perdeu");
}
