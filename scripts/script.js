// parte relacionada ao form e seus elementos
const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const textoInputForm = document.querySelector('input[type="text"]')
    criaElementoTela(textoInputForm)
    textoInputForm.value = ''
})

function criaElementoTela({value: texto}){
    const idLiElemento = Date.now()
    const elementoLiParaMostrarNaTela = `<li class="listElementoNum${idLiElemento}"><button id="editBtn">Editar</button><p>${texto}</p><button id="deleteBtn">Deletar</button></li>`

    const listElementos = document.querySelector('ul')
    listElementos.insertAdjacentHTML('afterbegin', elementoLiParaMostrarNaTela)
    
    const btnEdit = document.querySelector('#editBtn')
    btnEdit.addEventListener('click', () => {
        editaElementTela(idLiElemento)
    })

    const btnDelete = document.querySelector('#deleteBtn')
    btnDelete.addEventListener('click', () => {
        deletaElementoTela(idLiElemento)
    })
}

function editaElementTela(idLiElemento){
    const liElemento = document.querySelector('.listElementoNum' + idLiElemento)
    const textoToUpdate = liElemento.childNodes[1]
    textoToUpdate.textContent = prompt("Qual o novo item?")
}

function deletaElementoTela(idLiElemento){
    const liElemento = document.querySelector('.listElementoNum' + idLiElemento)
    liElemento.remove()
}