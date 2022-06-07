// Javascript Todo App
const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// All Function
// Add Todo Function
const addTodo = (id, text) => {
    localStorage.setItem(id, text);
}


// Display Massage Function
const displayMassage = (type, message) => {
    const li = document.createElement('li');
        li.classList.add('todo');
        li.classList.add('massageLi');
        li.innerHTML = message;

        if(type === 'success'){
            li.style.color = '#289314';
        }else if(type === 'error'){
            li.style.color = '#ed3838';
        }

        todoList.prepend(li);

        setTimeout(() => {
            const massageLi = document.querySelector('.massageLi');
            massageLi.remove();
        }, 2000);
}


// Add Todo Function
const formSubmmit = (event) => {
    event.preventDefault();
    
    // Let Validate Form
    if(todoInput.value === ''){
        displayMassage('error', 'Please Enter A Todo');
    }else{
        unikId = localStorage.length + 1;
        addTodo(unikId, todoInput.value);
    }
}


// Form Submit Function
todoForm.addEventListener('submit', formSubmmit);























