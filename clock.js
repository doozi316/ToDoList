

//html의 js-clock이라는 class 선택해서 clockContatiner 변수에 넣기
//클래스가 js-clock 요소의 하위 요소인 h1을 선ㅌ택해 clockTitle 변수에 넣기 

const clockContainer = document.querySelector(".js-clock"),
   clockTitle = clockContainer.querySelector("h1");


// 위에서 지정한 변수에 Date() 메소드를 활용해 실시간 출력하기

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 시간, 분, 초가 한자리 수 일 때 10의 자리에 0이 출력되도록 하기
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    
}

function init(){
    getTime();
    setInterval(getTime, 1000); // getTime 메소드 1초마다 refresh
}

init();