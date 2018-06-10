
document.addEventListener('DOMContentLoaded',function(){

    function getCoursesList( courses ){
        var htmlOut;
    
        if( courses.length > 0){
            var ul = document.createElement('ul');
    
            courses.forEach(function( course , index){
                var li =  document.createElement('li');
                var text = document.createTextNode( ++index + ' : ' + course );
            
                li.appendChild(text);
                ul.appendChild(li);
            });
    
            htmlOut = ul;
    
        }else{
            var empty = document.createElement('p');
    
            empty.appendChild( document.createTextNode('No any courses yet !!'));
            htmlOut = empty;
        }
    
        return htmlOut;
    }

    var getCoursesList = getCoursesList( ["CPWD","RHCE","RHCSA","DMI"] );
    var body = document.querySelector('body');

    body.appendChild( getCoursesList );

});