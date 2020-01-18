(function () {
    //addButton()
})()

// 1° exercicio

//Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.

let addButton = () => {

    var buttonElement = document.createElement('button')
    var textElement = document.createTextNode('Adicionar quadrados')
    var containerElement = document.querySelector('#app')

    buttonElement.setAttribute('onclick', 'addButton()')
    buttonElement.setAttribute('class', 'quadrado')
    buttonElement.setAttribute('onmouseover', 'changeBg(this)')
    buttonElement.appendChild(textElement)

    buttonElement.style.cssText = 'width: 100px; height: 100px;display: inline-block; background-color: #FFF;border-radius: 20px; margin 3px;'

    containerElement.appendChild(buttonElement)

}

//2º exercício

//Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

let getRandomColor = () => {

    var letters = '0123456789ABCDEF'
    var color = '#'

    for (var i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

    return color;

}

let changeBg = (element) => {
    element.style.backgroundColor = getRandomColor()
}

//3° exercicio
//A partir do seguinte vetor:
//var nomes = ["Diego", "Gabriel", "Lucas"];
//Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:

var containerElement = document.querySelector('#app')
var listElement = document.createElement('ul')

var nomes = ['Diego', 'Gabriel', 'Lucas'];

let addLiElement = (nome) => {

    let liElement = document.createElement('li')
    let textElement = document.createTextNode(nome)

    liElement.appendChild(textElement)

    listElement.appendChild(liElement)
}

nomes.forEach((nome) => addLiElement(nome))

containerElement.appendChild(listElement)

//4° exercicio
//Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
//nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
//demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

let adicionar = () => {

    let inputElement = document.querySelector('input[name=nome]')
    let nome = inputElement.value

    addLiElement(nome)

    inputElement.value = ''

}