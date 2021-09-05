// 1
// create the new repository and clone it to the local environ me

// 2 step-2 
// setting up dev environment
// set up title and do the initial commit

// 3 Postman
// 	a. Install and setup postman
// 4. Step - 4 - Create a JS file and make sure the linking is working.

// 5. try alert("hello") and prompt("gimme ur name")
// 6. create a button in html 
// 7. create a button in js
 		 const btn = document.queryselector(' ')
        // listen to the click event 
    	bitnTranslate.addEventListener('click',function clickHandler() {

			function clickHandler() {
			console.log("clicked")
			}
		})
// 8. What is api
//  when you want to talk to program you use api 
//  when you talkingn to application and want to program it 
//  that is application programming interface
// checkout javascript.info
// also read eloquent javascript

// 9. add a text area in the html area 
// add some styling as well
// width , hieght ,somme margin
// add some placeholder
 
// 10. Now we have one text area and we have to refer things inside js
// give text area some id , and access it in js

var txtinput = document.getElementById('text-input');

// just double check whther you are accessing right id by consolingn the assigned the variable
// queryselector - which returns the first element which matches 
// queryselectorAll - which returns alll the element which matches in a vector

// when a function is inside a function it is called method in js
// any function which has function which takes function internalyy 
// it is called callback
// known so because function is called internally
 
// 11. Exercise.
var textarea = document.queryselector(".textarea")
queryselector(".input-btn")

queryselector("#input-btn")

queryselector("input[name='translator]")

// 12. now add a div for output in html 
//    add some styling as well 
// remember to add a div with an id="output" to

///////////now coming to the main course

var btnTranslate = document.queryselector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output")

function clickHandler() {
	outputDiv.innerHTML = "ajajsjsjalsdkjfasldfj";
}

// its okay to feel overwhelmed 
// its okay to feel to feel tiring 
// its not okay to give up

 // we dont need to know 100%
 // sometimes we just have to see and sometimes try yourselfjj

// how do we do api call in js
// using fetch(url)

// what to do after getting response??
// first of all response is in json
// why response is in json?? cz we created that in the server in json 
// so now we have to convert it to json
// now convert it to json value;

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=i am manoj"

fetch(url)
.then(response => Response.json())
.then(json => console.log(json))

// now comes to js part 

 var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

 function getTranslationURL(text) {
	 return serverURL + "?" + "text=" + text; 
 }

 function  errorHandler(error) {
	 console.log("error occured",error);
	 alert("Something wrong with the server! Try again after some time!")
 }
 function clickHandler() {
	 
	 var inputText = txtInput.value;

	 // callign server for processing 

	 fetch(getTranslationURL(inputText))
	 .then(response => response.json())
	 .then(json => console.log(json.contents.translated))
	 .catch(errorHandler)
 }

btnTranslate.addEventListener("click",clickHandler);
// you dont need to understand all, you need to understand some pieces of it
// now we have to output the translated the text html div

