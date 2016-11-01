var button = document.createElement('button')
var counter = 0
button.innerHTML = 'Click Me'
button.classList.add('btn', 'btn-default', 'btn-block')

var ul = document.createElement('ul')
ul.classList.add('list-group')

button.addEventListener('click', function(){
    counter++

    var li = document.createElement('li')
    li.classList.add('list-group-item')
    li.innerHTML = counter
    ul.appendChild(li)
})

document.getElementById('dom').appendChild(button)
document.getElementById('dom').appendChild(ul)
