const jsForm = document.querySelector(".js-form"),
input = document.querySelector("input"),
greetings = document.querySelector(".js-greetings");
const SHOWING = 'showing';
const USERLS = "currentUser";

function paintName(text){
    greetings.innerHTML = `HELLO ${localStorage.getItem(USERLS)}.`;
    greetings.classList.add(SHOWING);
}

function getName(){
    jsForm.classList.add(SHOWING);
    jsForm.addEventListener("submit",(event) =>{
        event.preventDefault();
        const currentUser = input.value;
        localStorage.setItem(USERLS,currentUser);
        jsForm.classList.remove(SHOWING);
        paintName();
    })
}

function loadName(){
    const currentUser = localStorage.getItem(USERLS);
    if(currentUser === null){
        getName();
    }else{
        paintName();
    }

}
function init(){
    loadName();
}
init();