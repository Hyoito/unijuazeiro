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
    numero = prompt(`Informe um número: `);
    console.log(`Raiz quadrado`, Number(numero)*Number(numero))
}**/

/**let numero
do{
    numero = prompt(`Informe um número:`);
    console.log(`Raiz quadrado`, Number(numero)*Number(numero))
} while (numero!=0);**/

/**let numero = prompt(`Informe um número:`)

switch (Number(numero)) {
    case 1:
        console.log("Você é um aluno");
        break;
    case 2:
        console.log("Você é um professor");
        break;
    case 3:
        console.log("Você é um coordenador");
        break;
    default:
        console.log("Você é um funcionário");
        break;
}**/

/**let fruits1: string[] = ['Apple', 'Orange', 'Banana'];

for (let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]);
}**/

let sabores = new Array(4)

for (let i = 0; i < sabores.length; i++){
    sabores[i] = prompt(`Informe o ${i+1} sabor:`);
}
console.log(`Sorvete com o seguinte ${sabores}`);