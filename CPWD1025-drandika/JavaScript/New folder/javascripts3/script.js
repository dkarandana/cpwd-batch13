console.log(body);
var courcersList = function(courcers){
	var htmlOut;

	if(courcers.length>0){
		var $ul=document.createElement('ul');
		
			courcers.forEach(function(cource){
				var $listitem=document.createElement('li');
				var $listItemTxt=document.createTextNode(cource);
					$listitem.appendChild($listItemTxt);
					$ul.appendChild($listitem);
					htmlOut = $ul;

			});
		
	}else{
		htmlOut=document.createElement('div');
		htmlOut.innerHTML="No Courcers Empty List";
	}
	return htmlOut;

};

var DOMReady = function(){
	var body=document.querySelector('body');
	var courcers=["js", "jsx", "html", "css", "React","React Native", "Anguler", "js", "c++"];

	
	/*console.log(body);*/
	var courcersListHTML = courcersList(courcers);

};

/*
document.addEventListener('DOMContentLoaded',DOMReady);
*/
