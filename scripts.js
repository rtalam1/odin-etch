const container = document.querySelector('#container')
let div1 = document.createElement('div')
div1.style.backgroundColor = 'blue'
div1.style.color = 'blue'
let content = document.createElement('p')
content.textContent = "Hello"
container.appendChild(div1)
div1.appendChild(content)