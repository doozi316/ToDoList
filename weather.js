const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("Cant access");
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,  // latitude만 적어도 됨
        longitude: longitude
    };
    saveCoords(coordsObj);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        //get Weather
    }
}

function init(){
    loadCoords();
}

init();