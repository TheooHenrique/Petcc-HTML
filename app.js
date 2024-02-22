/*let n1 = Number(prompt ("Insira o primeiro número: "))
let n2 = Number(prompt ("Insira o segundo número: "))
let n3 = Number(prompt ("Insira o terceiro número: "))
let n4 = Number(prompt ("Insira o quarto número: "))

let med = (n1+n2+n3+n4)/3

if (med >= 7){
    console.log('Aprovado! Sua média é ' + med)
} else{
    console.log('Reprovado! Sua média é ' + med)
}



for (let i = 0; i < 20; i++){

}

while (contador < 5){
    console.log('Iteração ' + contador)
    contador++
}

do {
    console.log('Iteração '+ contador)
    contador++
} while (contador < 5)

*/

/*
====================================> REFAZER EN CASA
let string = ""
for (let i = 10; i > 0; i--){
    (string = i + ",")
}
console.log(string + ' e fogo!!')
*/
let botaojs = document.getElementById('botao')

function calcular(){
    let ling = Number(document.getElementById('ling').value)
    let mat = Number(document.getElementById('mat').value)
    let hum = Number(document.getElementById('hum').value)
    let nat = Number(document.getElementById('nat').value)
    let red = Number(document.getElementById('red').value)

    let media = Number(((ling)+(mat*3)+(hum)+(nat*2)+(red*1.5)) /8.5)

    if (media >= 649){
        document.getElementById("result").innerHTML = "Sua média: " + media + " Parabéns! Você passou!"
    } else{
        document.getElementById("result").innerHTML = "Sua média: " + media + " Infelizmente você não passou"
    }
    

}