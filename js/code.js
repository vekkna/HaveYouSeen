const addForm = document.querySelector("#add");
const list = document.querySelector("ul");

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        document.querySelector("ul").innerHTML += `<li class="todo">${todo}</li>`
        addForm.reset();
    }
});

list.addEventListener("click", e => {
    console.log(e.target);
    if (e.target.classList.contains("todo")) e.target.remove();
});
