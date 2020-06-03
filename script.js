var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');



var todos= JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement=document.createElement('li');
        todoElement.classList.add('list-group-item');
        var todoText=document.createTextNode(todo);
        var linkElement= document.createElement('button');
        linkElement.classList.add('btn')
        linkElement.classList.add('btn-outline-danger');
        linkElement.classList.add('btn-sm');
        linkElement.classList.add('ml-3');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        var pos= todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();



function addTodo(){
    var todoText = inputElement.value;
    if(todoText==''){}
    else{    
        todos.push(todoText);
        inputElement.value='';}
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}