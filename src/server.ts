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

/**var sabores = new Array(4)

for (var i = 0; i < sabores.length; i++){
    sabores[i] = prompt(`Informe o ${i+1} sabor:`);
}
console.log(`Sorvete com o seguinte ${sabores}`);

let add = prompt(`Deseja adicioanar mais um sabor? 1 para sim e 0 para não: `);

if (add == 1){
    var novo = prompt(`Qual sabor deseja adicionar? `);
    
    sabores.push(novo)

    console.log(`Seu pedido ficou o seguinte:${sabores}`);
}else if (add == 0){
    console.log(`Ok pedido anotado.`);
}else{
    console.log(`Comece de novo!`);
}**/

/*var sabores = new Array(4)

for (var i = 0; i < sabores.length; i++){
    sabores[i] = prompt(`Informe o ${i+1} sabor:`);
}
console.log(`Sorvete com o seguinte ${sabores}`);

let add = prompt(`Deseja adicioanar mais um sabor? 1 para sim e 0 para não: `);

switch (Number(add)) {
    case add = 1:
        var novo = prompt(`Qual sabor deseja adicionar? `);
    
        sabores.push(novo)

        console.log(`Seu pedido ficou o seguinte:${sabores}`);
        break;
    
    case add = 0:
        console.log(`Ok pedido anotado.`);
        break;

    default:
        console.log(`Erro comece de novo!`)
        break;
}*/

/**1
 * let nota1 = prompt("Informe a nota do trabalho de laboratorio: ");
let nota2 = prompt("Informe a nota da avaliação semestral: ");
let nota3 = prompt("Informe a nota do exame final: ");

let peso1 = Number(nota1) * 2;
let peso2 = Number(nota2) * 3;
let peso3 = Number(nota3) * 5;

let media = peso1 + peso2 + peso3 / 3;

console.log(`Media ${media}`);

if (media >= 8){
    console.log(`Conceito A`)
}else if (media >= 7){
    console.log(`Conceito B`)
}else if (media >= 6){
    console.log(`Conceito C`)
}else if (media >=5){
    console.log(`Conceito D`)
}else{
    console.log(`Conceito E`)
}*/

/**2
 * let numero = new Array(3)


for (var i = 0; i < numero.length; i++){
    numero[i] = prompt(`Informe o ${i+1} numero:`);
}
console.log(`${numero.sort()}`);*/


 let numero = new Array(4)


for (var i = 0; i < numero.length; i++){
    numero[i] = prompt(`Informe o ${i+1} numero:`);
}
console.log(`${numero.reverse()}`);

/** 4 
 * let codigo = prompt("Informe o número")

switch (Number(codigo)) {
    case 1:
        console.log(`Escrituário: aumento de 50%`);
        break;
    case 2:
        console.log(`Secretário: aumento de 35%`);
        break;
    case 3:
        console.log(`Caixa : aumento de 20%`);
        break;
    case 4:
        console.log(`Gerente : aumento de 10%`);
        break;
    case 5:
        console.log(`Diretor : aumento de 0%`);
        break;
    default:
        break;
}*/


/**5
 * let soma = 0

let numero: string[] =  prompt("Informe os números:");
for (let i = 0; i < numero.length; i++){
    console.log(numero[i]);
}

numero.forEach(Number Array ){
    console.log(`soma += ${Number}`)
}*/