var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

console.log(textInput);
console.log(btnTranslate);

function clickHandler() 
{
        console.log("clicked");
        console.log("text",textInput);
};

btnTranslate.addEventListener("click",clickHandler);