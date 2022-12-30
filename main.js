const a = document.querySelector('#A')
const b = document.querySelector('#B')
const form = document.querySelector('#formulario')
const resposta = document.querySelector('#resposta')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    a.style.border= 'solid 1px gray'
    b.style.border= 'solid 1px gray'
    resposta.style.display = 'none'

    if (a.value == 0){
        resposta.style.display = 'block'
        resposta.innerText = `Digite o primeiro número`
        resposta.style.color = 'red'
        a.style.border= 'solid 1px red'
    } else if (b.value == 0){
        resposta.style.display = 'block'
        resposta.innerText = `Digite o segundo número`
        resposta.style.color = 'red'
        b.style.border= 'solid 1px red'
    } else if (b.value > a.value){
        resposta.style.display = 'block'
        resposta.innerText = `O primeiro número deve ser menor que o segundo`
        resposta.style.color = 'red'
        a.style.border= 'solid 1px red'
        b.style.border= 'solid 1px red'
    } else {
        resposta.style.display = 'block'
        resposta.innerText = `Está tudo certo!`
        resposta.style.color = 'green'
        a.value = ' '
        b.value = ' '
    }


})