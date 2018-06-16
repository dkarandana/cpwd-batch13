//langages

var languages=["js","jsx,","html","css"];
var langList = function(languages){
	
var htmlOut;
	
	if(languages.length > 0) {
		var ul = document.createElement("ul");
		
			htmlOut="ul";

		languages.forEach(function(lang)){

			var ul = document.createElement("ul");
			var text = document.createTextNode("lang");

			ul.appendChild(text);
			text.appendChild(ul);
		};	


		//Empty List
	}else{

			htmlOut = document.createElement("div");
			htmlOut.innerHTML = "Empty List";

	}	

		return htmlOut;


};






	languages.forEach(function(lang){
	
	console.log(lang);
	});

	console.log(languages);

	
//DOM

var DOMReady = function(){
	var languages  = ["js","jsx,","html","css"];


	var body = document.querySelector("body");

	console.log(body);

}



document.addEventListener("DOMContentLoaded",DOMReady);