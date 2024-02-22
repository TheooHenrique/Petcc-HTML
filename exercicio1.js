var soma = 0
function receber(){
    i = Number(document.getElementById('input').value)
    if (i != 0){ 
        soma = soma + i 
    } else{
        document.getElementById("result").innerHTML = "Soma dos números: " + (soma)
    }
}