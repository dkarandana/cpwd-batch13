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

		color:'blue',
		background:'#ccc'
	});

	var colors = {
		red:'#f00',
		white:'#fff',
		black:'#000'
	};

	/*For in type loops*/
		for(var key in colors){
			var color = colors[key];
			console.log(key,color);
		};

		var $listItems = $languageSkills.find('li');


		$listItems.each(function(index,ele){
			console.log(index,ele);
		});

	$languageSkills.find('li').each(function(index,ele){
		/*ele->native DOM element*/

		var $item = $(ele);
		console.log(index,ele,$item.text());
	})
			
		
		
		


				

};
jQuery(document).ready(DOMLoaded);/*1step*/


	