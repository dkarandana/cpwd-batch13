//console.log(jQuery,$);
var DOMLoaded = function(){/*2step*/
	console.log("DOM IS READY");

	var $body = jQuery('body');/*3step*/
	var $languageSkills = jQuery('#language-skills');
	console.log($languageSkills);
	console.log($body);



	/*$body.css('color','red');
	$body.css('backgroundColor','blue');*/

	$languageSkills.css({

		color:'green',
		background:'#ccc'
	});
	var colors = {
		red:'#f00',/*-----------object------*/
		white:'#fff',
		black:'#000'

	};
	/*For in type loops*//*----------loop--------*/
	for(var key in colors){
		var color = colors[key];
		console.log(key,colors)
		};
	
	//console.log($language-skills.find('li'));
	//$languageSkills.find('li');
		 $languageSkills.find('li').each(function(index,ele){

		 	var $item = $(ele);
			console.log(index,ele,$item.text());

		});
		



};
	
jQuery(document).ready(DOMLoaded);/*1step*/


	