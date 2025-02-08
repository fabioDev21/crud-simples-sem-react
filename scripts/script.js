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
    const elementoLiParaMostrarNaTela = `<li class="listElementoNum${idLiElemento}"><button id="editBtn">Editar</button><p id="textElement">${texto}</p><button id="deleteBtn">Deletar</button></li>`

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


// Área relacionada a edição de elementos
const editBoxAserAdc = 
`   <div id="editBox">
        <h3>Caixa de Edição</h3>
        <label for="novoItemSetado">
            <p>Novo item: </p>
            <input id="novoItemSetado" type="text">
            </label>
            <button type='submit' id="submitEditbtn" >Enviar</button>
        <p id="editCloseBtn">Fechar</p>
    </div>`
// Elemento a ser finalizado, caixa de edição de itens

function editaElementTela(idLiElemento){
    const elementText = document.querySelector('#textElement')
    
    // adicionando a box no body do html
    const corpoHTML = document.querySelector('body')
    corpoHTML.insertAdjacentHTML('beforeend', editBoxAserAdc)
    
    // escutador de eventos para o botão de fechar a caixa, ele remove o elemento e dados da tela tbm
    const editCloseBtn = document.querySelector('#editCloseBtn')
    editCloseBtn.addEventListener('click', () => {
        document.querySelector('#editBox').remove()
    })

    // Envia o input para atualizar o elemento
    const submitEditbtn = document.querySelector('#submitEditbtn')
    submitEditbtn.addEventListener('click', () => {
        const novoItemSetado = document.querySelector("#novoItemSetado").value
        elementText.textContent = novoItemSetado        
        document.querySelector('#editBox').remove()
    })
}

function deletaElementoTela(idLiElemento){
    const liElemento = document.querySelector('.listElementoNum' + idLiElemento)
    liElemento.remove()
}