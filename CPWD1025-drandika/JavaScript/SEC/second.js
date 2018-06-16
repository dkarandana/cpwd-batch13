
// body
var courcersList = function(courcers){
	var htmlOut;


	if(courcers.length>0){
		var ul=document.createElement("ul");
		
		courcers.forEach(function("cource"){
				var listitem=document.createElement("li");
				var listItemTxt=document.createTextNode("courcers");
					
					listitem.appendChild("listItemTxt");
					ul.appendChild("listitem");
					
					htmlOut = ul;

			});

		
	}else{
		htmlOut=document.createElement('div');
		htmlOut.innerHTML="No Courcers";
	}
	return htmlOut;

};
  	console.log(courcers);
	
	var DOMReady = function(){
	var body=document.querySelector('body');
	var courcers=["js", "jsx", "html", "css", "react","rn", "angular", "jss", "c plus"];

	
	console.log(body);
	var courcersListHTML = courcersList(courcers);

};



};


//DOM
document.addEventListener('DOMContentLoaded',DOMReady);
var DOMReady = function(){
	var body = document.querySelector("body");
	var languages = ["html";"css";"js";"jsx"];

};
document.addEventListener("DOMContentLoader",function(){

};