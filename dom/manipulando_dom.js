var inputElement = document.querySelector('input[name=nome]')
var btnElement = document.querySelector('button.botao')

//document.getElementById('nome')
//document.getElementsByTagName('input')
//document.getElementsByClassName('nome')
//document.querySelector('div#app input') //referncia == css
//document.querySelector('input[name=nome]')

btnElement.onclick = () => alert(inputElement.value)
