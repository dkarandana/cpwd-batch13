var DOMloaded = function(){

	

	var $body = jQuery('body');

	

	$body.css('color','red');
	$body.css('backgroundColor','blue');

	var langSkills = jQuery('#lang_skills');

	

	//var li =$('#lang_skills li');

		

		/*for(var i in li){

			console.log(li[i]);
		}*/

	var $listItems = jQuery('#lang_skills').find("li");

	console.log($listItems,index);

	$listItems.each(function(index ,ele){

		var $item =$ (ele);

		console.log(index, ele, $item.text())
	});
};



jQuery(document).ready(DOMloaded);