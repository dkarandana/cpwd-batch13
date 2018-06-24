/*console.log(jQuery, typeof jQuery); */

/*
console.log(jQuery, $);

var DOMLoaded=function(){
	console.log("DOM Ready");
	var $body=jQuery('body');
	console.log($body);
}


jQuery(document).ready(DOMLoaded);

*/



console.log($);

var	DOMLoaded=function(){
	console.log("dsad");
	var $body = jQuery('body');
	/*console.log($body);*/
	var $languageSkills = jQuery('#language-skills');  /*css id*/
	console.log($languageSkills);
	

	$body.css('color','red');
	$body.css('backgroundColor','lightblue');
	/*$body.css{
		color:red;
		backgroundColor:lightblue;
	}*/

	console.log($languageSkills.find('li'));

/*
	var obj={
		red:'#f00',
		white:'#fff',
		black:'#000'
	};
		console.log(obj);

	for(var key in obj){
		var object	= obj[key];
		console.log(key,object);
	}

*/
$languageSkills.find('li').each(function(index){
console.log('li');
});


/*
$( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
*/
$languageSkills.find('li').each(function(index, ele){
	/*ele   Native DOM Element*/
console.log('li');
var $item = $(ele);
console.log(index, ele, $item.text());
});







	

}

jQuery(document).ready(DOMLoaded);