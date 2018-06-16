
var langList = function(languages){

	var htmlOut;

	if(languages.length > 0){

		var $ul = document.createElement('ul');
		languages.forEach(function(){

		var $li = document.createElement('li');
		var text = document.createTextNode('lang');
			$li.appendChild('text');
			$ul.appendchild('$li');



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

};
document.addEventListener('DOMContentLoaded',DOMReady);




