
/*resultado = 0
for(i = 1; i<11; i++){
    resultado +=5
    document.write('5 x '+i+ ' = '+resultado)
    document.write("<br>")
}




document.getElementById('num1').innerText = num1
document.getElementById('num2').innerText = num2

document.getElementById("resultado").innerText = (Number(num1) + Number(num2))


vaunr num1 = prompt('num1')
v ar  num2 = prompt('num2')*/
const numeroIntroducidoInput = document.getElementById('numeroIntroducidoInput')
const numeroIntentosP = document.getElementById('numeroIntentosP')
const acierto = document.getElementById('acierto')
const fallido = document.getElementById('fallido')
const error = document.getElementById('error')
const numeroCorrecto = document.getElementById('numeroCorrecto')

const intentar = document.getElementById('intentar')

let intentos = 0


intentar.addEventListener('click', function(){
    numeroCorrecto.innerHTML = ""
    numeroIntentosP.innerHTML = ""
    let numeroSecreto = Math.floor(Math.random() * 10) + 1 
    let numeroIntroducido = 0 
    error.style.display = 'none'
    acierto.style.display = 'none'
    fallido.style.display = 'none'
    numeroIntroducido = parseInt(numeroIntroducidoInput.value)
    intentos +=1
    console.log('numeroIntroducido: '+numeroIntroducido)
    console.log('numerosecreto: '+ numeroSecreto)
    numeroIntentosP.innerText = intentos
    if (numeroIntroducido < 1 || numeroIntroducido > 10){
        error.style.display = 'flex'
    }
    else if(numeroIntroducido === numeroSecreto) {
        acierto.style.display='flex'
    }
    else {
        fallido.style.display = 'flex'
        numeroCorrecto.innerText = numeroSecreto
    }
})

 