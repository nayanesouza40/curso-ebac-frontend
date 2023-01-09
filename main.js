// variáveis de globais
const form = document.getElementById('form-contato')
const nome = document.getElementById('nome')
const tel = document.getElementById('tel')
const nomes = []
const telefones = []
const erro = document.getElementById('erro')


// função que adiciona novos contatos
const adicionarContatos = () => {
    nome.style.border = 'solid 1px #03989E'
    tel.style.border = 'solid 1px #03989E'
    erro.style.display = 'none'
    // verifica se o contato já está cadastrado
    if(nomes.includes(nome.value)){
        erro.style.display = 'block'
        nome.style.border = 'solid 1px red'
        erro.innerText = 'contato já cadastrado'
    } else if(telefones.includes(tel.value)){
        tel.style.border = 'solid 1px red'
        erro.style.display = 'block'
        erro.innerText = 'número de telefone já cadastrado'
    } else {
    nomes.push(nome.value)
    telefones.push(tel.value)

    const contatos = document.getElementById('contatos')
    // cria uma nova linha na tabela e exibi o contato cadastrado
    const contato = document.createElement('tr')
    contatos.appendChild(contato)
    contato.innerHTML = `
        <tr>
            <td>
                ${nome.value}
            </td>
            <td>
                ${tel.value}
            </td>
        </tr>`

    nome.value = ''
    tel.value = ''
}}

// evento do formulário de cadastro de novo contato
form.addEventListener('submit', (e) => {
    e.preventDefault()

    
    adicionarContatos()
       
  
   
})
