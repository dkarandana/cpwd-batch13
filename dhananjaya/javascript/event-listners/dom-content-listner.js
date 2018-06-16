var langList = function( languages ){
    var htmlOut;

    if( languages.length > 0 ){
        var $ul = document.createElement('ul');

        languages.forEach(function( lang ){
            /* Repeative Work */
            var $li = document.createElement('li');
            var textNode = document.createTextNode( lang );

                $li.appendChild( textNode );

                $ul.appendChild( $li );

            htmlOut = $ul ;
            /* Repeative Work */
        });

    }else{
        htmlOut = document.createElement('div');
        htmlOut.innerHTML = "Empty Data Set";
    }

    return htmlOut;
};

var DOMReady = function(){
    
    var $body = document.querySelector('body');
    var languages = [
        "JS",
        "JSX",
        "C++",
        "NodeJS"
    ];
    var langUL = langList( languages );

    $body.appendChild(langUL);
};

document.addEventListener("DOMContentLoaded",DOMReady);