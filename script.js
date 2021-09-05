 var txtInput = document.getElementById("txt-input")
        var txtOutput = document.querySelector("#txt-output")

        var btnTranslate = document.querySelector("#btn-translate")


       var serverURL = "https://api.funtranslations.com/translate/minion.json"
        //var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
btnTranslate.addEventListener("click",clickHandler)
        var countt =0;
        function clickHandler() {
            console.log("hi")
            var textt = constructURL(txtInput.value)
            
            fetch(textt)
            .then(response => response.json())
            .then(json => {
                txtOutput.innerHTML =  json.contents.translated;
            })
            .catch(errorHandler)
        }
        
function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${serverURL}?text=${encodedURI}`;
}

function  errorHandler(error) {
	 console.log("error occured",error);
	 alert("Something wrong with the server! Try again after some time!")
 }

