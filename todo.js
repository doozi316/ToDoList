const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

// 전달된 값을 li, button, span 요소와 함께 출력 
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span); //appendChild는 해당 요소에 자식 요소를 덧붙인다는 메소드
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

//form 요소를 사용하고 있기 때문에 submit event에 조치를 취해야함. 
//기존의 메소드를 막고 paintToDo 메소드 호출
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !==null){

    } else {

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); // submit event 가 실행될 때 handleSubmit 실행시키기
}

init();