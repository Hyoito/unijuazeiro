const prompt = require("prompt-sync")();

let nota1 = prompt("Digite seu número")
let nota2 = prompt("Digite seu número")
let nota3 = prompt("Digite seu número")

const media = (nota1 + nota2 + nota3)/3

if media >= 0, media < 2.9{
    console.log("Reprovado")
}else if media >= 3, media < 6.9{
    console.log("Exame")
}else if media >= 7, media <= 10{
    console.log("Aprovado")
}else{
    console.log("Erro!Digite as notas novamente")
}


