
// html의 class가 js-form인것을 찾아 form 변수에 넣기
// form 하위의 input 요소를 찾아 input 변수에 넣기
// class가 js-greetings라는 요소를 찾아 greetings 변수에 넣기
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");


const USER_LS ="correntUser",
    SHOWING_CH ="showing";



// text자리에 들어온 USER_LS를 로컬 저장소에 저장하기
function saveName(text){
    localStorage.setItem(USER_LS, text); //setItem(key, value)
}


//form 요소 사용시 자동적으로 발생되는 submit 메소드를 지우고 paintGreeting과 saveName 메소드로 재 정의하기
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


//submit 이라는 event가 발생했을 때 handleSubmit이라는 메소드 불러오기
function askForName(){
    form.classList.add(SHOWING_CH);
    form.addEventListener("submit", handleSubmit);
}


//text에 들어온 이름을 Hello와 함께 출력 시키기
function paintGreeting(text){
    form.classList.remove(SHOWING_CH); // 목록으로 부터 문자열 제거 
    greetings.classList.add(SHOWING_CH); // 목록에 문자열 추가 
    greetings.innerText = `Hello ${text}!`
}

//로컬 저장소에서 가져온 유저 이름이 null이면 askForName 메소드 실행, 그렇지 않으면 paintGreeting 실행
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser ===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();