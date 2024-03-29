var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text  
   
}

function errorHandler()   {
   console.log("error occured" , error)
   alert("something wrong with server ! try again some time")
}

function clickHandler() 
{
   var inputText = textInput.value;  
   
   fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json =>
         {
            var translatedText =  json.contents.translated;
           outputDiv.innerText = translatedText;
         })
      .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler);