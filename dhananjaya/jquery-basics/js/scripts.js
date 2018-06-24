console.log( document );


jQuery(document).ready(function(){
    var $body = jQuery('body');
    var $languageSkills = jQuery('#language-skills');

   /*  $body.css('color','red');
    $body.css('backgroundColor','blue'); */

   /*  $languageSkills.css({
        color:'red',
        backgroundColor:'#ccc'
    }); */

    $languageSkills.find('li').each(function( index, ele ){

        /* ele - > native DOM Element */

        var $item = $(ele);

        console.log( index, ele, $item.text() );
    });

    
});