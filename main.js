// Get All Needed Element
const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');


// Display Todo Function
const displayTodo = () => {
    todoList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        
        let li = document.createElement('li');
            li.classList.add('todo');
            li.setAttribute('todoId', i.toString());
            li.innerHTML = `<span class="todo-massage">${localStorage.getItem(localStorage.key(i))}</span>
                           <span class="delete-todo-btn" onclick = "deleteTodo(${localStorage.key(i)});">🗑</span>`;

        todoList.appendChild(li);

    }

}


// Check If Todo Exist Function
const checkTodo = (text) => {
    const todoArr = new Array();

    for (let i = 1; i <= localStorage.length; i++) {
        const element = localStorage.getItem(i);
        todoArr.push(element);
    }

    if(todoArr.includes(text)){
        return true;
    }else{
        return false;
    }
}


// Add Todo Function
const addTodo = (id, text) => {
    const todoId = id.toString();
    const todoText = text.toString();

    if(!checkTodo(todoText)){
        localStorage.setItem(todoId, todoText)
        
        displayTodo();
        displayMassage('success', 'Todo Added Successfully');
    }else{
        displayMassage('error', 'This Todo Are Allready Seted');
    }
}


// Delete Todo Function
const deleteTodo = (id) => {
    const todoId = id.toString();

    localStorage.removeItem(todoId);

    displayTodo();
    displayMassage('success', 'Todo Deleted Successfully');
}


// Display Massage Function
const displayMassage = (type, message) => {
    const li = document.createElement('li');
        li.classList.add('todo');
        li.classList.add('massageLi');
        li.innerHTML = message;

        if(type === 'success'){
            li.style.color = '#289314';
            todoInput.value = '';
        }else if(type === 'error'){
            li.style.color = '#ed3838';
            todoInput.focus();
        }

        todoList.prepend(li);

        setTimeout(() => {
            const massageLi = document.querySelector('.massageLi');
            massageLi.remove();
        }, 2000);
}


// Form Submit Function
const formSubmmit = (event) => {
    event.preventDefault();
    
    // Let Validate Form
    if(todoInput.value === ''){
        displayMassage('error', 'Please Enter A Todo In Input Box');
    }else{
        unikId = localStorage.length + 1;
        addTodo(unikId, todoInput.value);
    }
}


// Form Submit
todoForm.addEventListener('submit', formSubmmit);

// Display Todo Reset Fucntion
displayTodo();





















