const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    img.src=`/images/${imgNumber}.jpg`
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
}

function init(){
    const randomNumber = genRandom();
    paintToDo(randomNumber);
}

init();