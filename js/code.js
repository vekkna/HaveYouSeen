const addForm = document.querySelector("form");
const list = document.querySelector("ul");

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        list.innerHTML += `<li class="todo">${todo}</li>`
        addForm.reset();
    }
});

list.addEventListener("click", e => {
    if (e.target.classList.contains("todo")) e.target.remove();
});
