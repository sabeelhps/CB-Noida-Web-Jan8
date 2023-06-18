const todos = document.querySelectorAll('.todo');

for (let todo of todos) {
    todo.addEventListener('click', (e) => {
        const todoText = todo.innerText;
        todo.innerText = todoText.toUpperCase();
    })
}
