const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";

let toDos = []; // todo 목록을 배열에 저장실 킬 것임

//삭제 된 뒤 나머지 배열의 id 값이 1부터 차례로 다시 정렬되기 위함
function deleteToDo(event){
    const btn = event.target; // 이벤트(클릭)이 실행된 곳을 찾는다.
    const li = btn.parentNode; // 클릭이 실행된 노드의 부모 노두를 찾는다.
    toDoList.removeChild(li); //해당 노드와 자식노드 모두 삭제
    const cleanToDos = toDos.filter(function(toDo){ //filterFn에 해당하는 요소를 새 배열로 만드는 함수 : filter
        return toDo.id !== parseInt(li.id); 
    }); 
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //자바스크립트 객체 -> 문자열 변환
}

// 전달된 값을 li, button, span 요소와 함께 출력 
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; //삭제 버튼 실행 시 어떤 항목이 지워지는 지 파악하기 위해 id 부여
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span); //appendChild는 해당 요소에 자식 요소를 덧붙인다는 메소드
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = { 
        text : text,
        id : newId  // 배열이 비어있을 경우 1. 저장된다면 1씩 증가. 
    };
 
    if (typeof toDoObj.text === "undefined" || toDoObj.text === null|| toDoObj.text === ""){
        return false;
    }
    toDos.push(toDoObj); //arry 안에 element 추가
    saveToDos();
}

//form 요소를 사용하고 있기 때문에 submit event에 조치를 취해야함. 
//기존의 메소드를 막고 paintToDo 메소드 호출
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    
}

//리스트 목록을 화면에 출력시키기
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //문자열 -> 자바스크립트 객체로 변환
        parsedToDos.forEach(function(toDo){ //paredToDos의 배열이 전부 한번씩 function 실행되게함
            paintToDo(toDo.text);
        });   
    } 
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); // submit event 가 실행될 때 handleSubmit 실행시키기
}

init();