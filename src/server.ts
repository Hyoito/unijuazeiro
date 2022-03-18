const prompt = require("prompt-sync")();

/**let x = prompt("Informe um número: ");
let y = prompt("Informe um número: ");
let num1 = Number(x);
let num2 = Number(y);

let soma = num1+num2;
console.log("Soma: s ${soma}");**/

/**let numero = 0

for( let i = 1; i < 11; i++){
    let x = prompt(`Informe ${i} número:`);
    numero= numero+Number(x);
}

console.log(`Soma total: ${numero}`);

if(numero > 0){
    console.log(`Valor positivo`);
}else if (numero <0){
    console.log(`Valor negativo`);
}else{
    console.log(`nulo`);
}**/

/**let numero
while (numero!=0){
    numero = prompt(`informe um número: `);
    console.log(`Raiz quadrado`, Number(numero)*Number(numero))
}**/

let numero
do{
    numero = prompt(`informe um número:`);
    console.log(`Raiz quadrado`, Number(numero)*Number(numero))
} while (numero!=0);