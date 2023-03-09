
"use strict";

let inputTodo = document.getElementById('input');
let addText = document.getElementById('addText');
let todoContainer = document.getElementById('todoContainer')


addText.addEventListener('click', function() 
{
    let text = document.createElement('p')
    text.innerText = input.value;
    text.classList.add('toDoStyle')
    todoContainer.appendChild(text)
    input.value = "";

    text.addEventListener('click' , function() 
    {
      text.style.textDecoration = "line-through"
    });

    text.addEventListener('dblclick' , function() 
    {
      todoContainer.removeChild(text)
    })
});

