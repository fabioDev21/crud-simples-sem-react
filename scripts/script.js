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

    const listElementos = document.querySelector('ul')
    listElementos.insertAdjacentHTML('afterbegin', `<li class="listElementoNum${idLiElemento}"><button id="editBtn">Editar</button>${texto}<button id="deleteBtn">Deletar</button></li>`)
    
    // FIXME: corrigir erro ao editar elemento. Ele não abre o modal para editar o item
    const btnEdit = document.querySelector('#editBtn')
    btnEdit.addEventListener('click', () => {
        const liElemento = document.querySelector('.listElementoNum' + idLiElemento)
        listElementos.insertAdjacentElement('afterbegin', `<div class="modalEditItem"></div>`)
    })

    const btnDelete = document.querySelector('#deleteBtn')
    btnDelete.addEventListener('click', () => {
        const liElemento = document.querySelector('.listElementoNum' + idLiElemento)
        liElemento.remove()
    })
}

// refatorar código após conclusão prévia...