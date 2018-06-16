/*console.log("ada");

var DOMReady = function(){
	var body=document.querySelector('body');
	console.log(body);
};




document.addEventListener('DOMContentLoaded',DOMReady);


var courcers=["js", "jsx", "html", "css", "React","React Native", "Anguler", "js", "c++"];

if (courcers instanceof Array) {
	courcers.forEach(function(cour){
	console.log(cour);	
	});

}


if(courcers.length>0){
	var ul=document.createElement('ul');

	courcers.forEach(function(courcers){
		var listitem=document.createElement('li');


	})


}
*/
/*
var courcersList = function(courcers){
	return "adsd";
};

var DOMReady = function(){

	var courcers=["js", "jsx", "html", "css", "React","React Native", "Anguler", "js", "c++"];

	var body=document.querySelector('body');
	/*console.log(body);*//*
	var courcersListHTML = courcersList(courcers);

};


document.addEventListener('DOMContentLoaded',DOMReady);
*/



/*ADD ERROR HANDLING*/

var courcersList = function(courcers){
	var htmlOut;

	if(courcers.length>0){
		var $ul=document.createElement('ul');
		
			courcers.forEach(function(cource){
				var $listitem=document.createElement('li');
				var $listItemTxt=document.createTextNode(cource);
				$listitem.appendChild($listItemTxt);
				body.appendChild($listitem);

			});
		
	}else{
		htmlOut=document.createElement('div');
		htmlOut.innerHTML="No Courcers Empty List";
	}
	return htmlOut;

};

var DOMReady = function(){

	var courcers=["js", "jsx", "html", "css", "React","React Native", "Anguler", "js", "c++"];

	var body=document.querySelector('body');
	/*console.log(body);*/
	var courcersListHTML = courcersList(courcers);

};


document.addEventListener('DOMContentLoaded',DOMReady);



/*

if (courcers instanceof Array) {
	courcers.forEach(function(cour){
	console.log(cour);	
	});

}


if(courcers.length>0){
	var ul=document.createElement('ul');

	courcers.forEach(function(courcers){
		var listitem=document.createElement('li');


	})


}
*/