const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoContent = toDoForm.querySelector("input");
let toDos =[];

const TODOS_KEY = "todos"

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const deletetext = event.target.parentElement
    deletetext.remove()
    toDos = toDos.filter((todo) => todo.id !== Number(deletetext.id));
    saveTodos()

}

function paintToDo(newTodo){
    const li = document.createElement("li");
        li.id = newTodo.id;
    const span = document.createElement("span");
        span.innerText = `${newTodo.text}  `;
    const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", deleteToDo)
        button.classList.add("delete")
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo= toDoContent.value;
    toDoContent.value = "";
    const newToDoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null){
    const parsedToDos = JSON.parse(savedTodos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
    };