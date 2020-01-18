var linkElement = document.createElement('a')
var textElement = document.createTextNode('Acessar google')
var containerElement = document.querySelector('#app')
var inputElement = document.querySelector('#nome')

linkElement.setAttribute('href', 'google.com')
linkElement.setAttribute('title', 'site do google')
linkElement.appendChild(textElement)

containerElement.appendChild(linkElement)
containerElement.removeChild(inputElement)