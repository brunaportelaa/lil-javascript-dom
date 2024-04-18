document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const removeFirstTaskButton = document.getElementById('removeFirstTaskButton');
    const prioritizeLastTaskButton = document.getElementById('prioritizeLastTaskButton');



    addTaskButton.addEventListener('click', () => {
        let newListItem = document.createElement('li')
        newListItem.textContent = newTaskInput.value
        todoList.appendChild(newListItem)
    })

    removeFirstTaskButton.addEventListener('click', () => {
        let firstItem =  todoList.querySelector('li')
       todoList.removeChild(firstItem)
    })

    prioritizeLastTaskButton.addEventListener('click', () => {
        let firstItem =  todoList.querySelector('li')
        let lastItem = todoList.lastChild
        todoList.insertBefore(lastItem, firstItem)
    })
});
