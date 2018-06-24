
var DOMLoaded = function (){

	console.log("DOM is ready");

	var $body = jQuery('body');
	console.log($body);  

	$body.css ('color', 'red');   
	$body.css ('backgroundColor', 'blue'); 

	/*$body.css({
		color : 'red';
		backgrounColor : 'blue';
	
	}); */

	var languageSkills = jQuery('#language-skills');
	

	/* for in types loops*/

 	/*var colors = {
 		red : "#f00",
 		blue : "F66",
 		pink : "#f77",
 	};

 	for (var key in colors){
 		var color =colors[key];
 		console.log(key.color);
 	}*/

	/*console.log($languageSkills.find('li'));*/

 	var $listItems = $languageSkills.find('li');

 	$listItems.each(function(index,ele){
 		var $item = $(ele);
	console.log(index,ele, $item.text() );
 	});

 	
};

jQuery(document).ready(DOMLoaded);