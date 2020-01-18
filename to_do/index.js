var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
]

var renderTodos = () => {

    listElement.innerHTML = ''

    for (todo of todos) {

        var pos = todos.indexOf(todo)// procura o valor no array

        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)
        linkElement.setAttribute('href', '#')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)

    }
}

var addTodo = () => {
    var todoText = inputElement.value

    todos.push(todoText)

    inputElement.value = ''

    renderTodos()
}

var deleteTodo = (pos) => {

    todos.splice(pos, 1)//remove do array splice(posicao, quantidade)

    renderTodos()
}

renderTodos()
buttonElement.onclick = addTodo
