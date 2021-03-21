const jsClock = document.querySelector(".jsClock"),
jsClockContainer = document.querySelector(".js-clock__container");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    jsClockContainer.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}
function init(){
    setInterval(getTime,1000);
}
init();