const weatherDiv = document.querySelector(".js-weather");
const API_key = "3cfb39827b01ba00b21def9b8bd5918a";


const COORDS = "coords";


function getWeather(latitude,longitude){
    fetch(
        `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`
    ).then(function(json){
        return json.json();
    }).then(function(json){
        console.log(json);
        const list = json.list[0];
        const temp = Math.round(list.main.temp);
        const city = list.name;
        weatherDiv.innerText = `${temp}°C | ${city}`;
    });

}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log("it can not loaded");
}


function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    }

function askGeoLocation(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askGeoLocation();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();