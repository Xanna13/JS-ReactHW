document.addEventListener('DOMContentLoaded', () => {
    let todoListItems = [];
    
    let newForm = document.getElementById('newForm');
    newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newItem = document.getElementById('item').value;

        todoListItems.push({
            item: newItem,
            completed: false
        });

        output();
    });

    function output() {
        let todoItemsDiv = document.getElementById('todoItems');
        todoItemsDiv.innerHTML = '';

        for (let i = 0; i < todoListItems.length; i++) {
            todoItemsDiv.innerHTML += `<div class="item">${todoListItems[i].item}</div>`;
        }
    }
});