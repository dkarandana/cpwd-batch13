var langList = function( languages ){
    var htmlOut;

    if( languages.length > 0 ){
        var $ul = document.createElement('ul');

            $ul.setAttribute('class','language-list');

        languages.forEach(function( lang ){

            /* Repeative Work */
            var $li = document.createElement('li');
            var textNode = document.createTextNode( lang.name );
            var $btn = document.createElement('button');

                $btn.innerText = "Show Extension";
                $btn.setAttribute('value',lang.fileExt);
    
                $li.appendChild( textNode );
                $li.appendChild($btn);
                $li.style.color = "red";

                $ul.appendChild( $li );

                /*  Button Vlick Listner */
                $btn.addEventListener('click',function( e ){
                    var ext = this.value; // e.target.value
            
                    alert("File Extension is " + ext );
                });

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
        {
            name:"JavaScript",
            fileExt:".js"
            
        },
        {
            name:"JSX",
            fileExt:".jsx"
        },
        {
            name:"PHP",
            fileExt:".php"
        },
        {
            name:"Type Script",
            fileExt:".ts"
        }
    ];
    var langUL = langList( languages );

    $body.appendChild(langUL);
};

document.addEventListener("DOMContentLoaded",DOMReady);