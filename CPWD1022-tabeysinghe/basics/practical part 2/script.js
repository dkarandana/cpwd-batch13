var langlist = function(languages){
	var htmlOut;

	if(languages.length>0){
		var $ul=document.createElement('ul');
		languages.forEach(function(lang){
			var	$li =document.createElement('li');
			var	textNode = document.createTextNode(lang);
			var $btn = document.createElement('button');

			$btn.innerText = "Display extention";
			$btn.setAttribute('value',lang.fileExt);

			$li.appendChild(textNode);
			$li.appendChild($btn);
			$li.style.color = "red";

			$ul.appendChild($li);

			/*Click*/
			$btn.addEventListener('click',function(e){
				var ext = this.value;

				alert("file extention" + ext);
				
			});
		htmlOut=$ul;

	}else{
		htmlOut=document.createElement('div');
		htmlOut.innerHTML = "Empty list";
	}

	return htmlOut;
};

var DOMReady = function(){

	/*var $body = document.querySelector('body');*/
	var languages = [
		"JS",
		"JSX",
		"React",
		"React Native",
	];

	var	body =document.querySelector('body');
	var	LangListHTML = langlist(languages);
	body.appendChild(LangListHTML)

};

document.addEventListener('DOMContentLoaded', DOMReady);