
var langList = function(languages){

	var htmlOut;

	if(languages.length > 0){

		var $ul = document.createElement('ul');
		languages.forEach(function(){

		var $li = document.createElement('li');
		var text = document.createTextNode('languages');
			$li.appendChild('text');
			$ul.appendChild('$li');
			console.log = $ul;



		});

		htmlOut = $ul;
	}else{
		//Empty List
		htmlOut = document.createElement('div');
		htmlOut.innerHTML = "Empty List";

	}

	return htmlOut;

};

var DOMReady = function(){

var languages = [
"JS",
"JSX",
"Type Script",
"React",
"React Native",
"Angular",
"Node",
" C++"
];

var body = document.querySelector('body');
var langListHTML = langList(languages);
body.appendChild(langListHTML)
};
document.addEventListener('DOMContentLoaded',DOMReady);




