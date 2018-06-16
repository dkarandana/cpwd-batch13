/* var languages = new Array("Js", "JSx", "HTML","CSS","React","React Native","C++");

languages.forEach(function(lang){
	console.log(lang);
});

var DOMReady = function(){
	var body = document.querSelector
}*/

var LangList = function(languages){
	var htmlOut;

	if(languages,length>0){

		var $ul = document.createElement('ul');
			languages.forEach(function(lang){
				var $li = document.createElement('li');
				var TextNode = document.createElement('lang');
				$li.appendChild(TextNode);
				$ul.appendChild($li);
				console.log(lang);
			});

		htmlOut = $ul;

	} else{
		//Empty list
		htmlOut = document.createElement('div');
		htmlOut.innerHTML = "Empty list";
	}

	return htmlOut; 	 	 	
};

var	DOMReady = function (){
	var	languages = [
		"Js", 
		"JSx", 
		"HTML",
		"CSS",
		"React",
		"React Native",
		"C++"
	];

	var	body =document.querySelector('body');
	var	LangListHTML = LangList (languages);
	body.appendChild(LangListHTML)
};

document.addEventListener('DOMContentLoaded', DOMReady);


