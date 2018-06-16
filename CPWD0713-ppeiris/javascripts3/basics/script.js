//console.log('script.js');

/*
var courcers = ["Aaa","Ba"];

var handler = function(cour,index){
	console.log(cour, index);

};

courcers.forEach(handler);
*/

/*
var courcers = ["Aaa","Ba"];
console.log(typeof courcers,courcers instanceof Array);
if (courcers instanceof Array) {
	courcers.forEach(function(cour,index){
	console.log(cour, index);	
	});
}
*/

/*
var H1Group = document.getElementsByTagName('h1');
var H1 = H1Group[0];
H1.innerText = "Hello World";

H1.style.color='red';
*/


//DOM Ready State
/*<script src="script.js"></script> SHOULD BE IN THE HEADER PORTION OF THE PAGE*/
/*Code not worked*//*
document.addEventListener('DOMContentLoaded',function(){
	var H1Group = document.getElementsByTagName('h1');
	console.log(H1Group instanceof object, H1Group);
	H1 = H1Group[1];
	H1.innerText = "2nd element of h1";
	H1.style.color="red";
});
*/
/*
document.addEventListener('DOMContentLoaded',function(){
	var body=document.querySelector('body');
	var para=document.createElement('p');
	var paraTxt=document.createTextNode('PARA JAVA');
	para.appendChild(paraTxt);
	body.appendChild(para);

});
*/




	var body=document.querySelector(body);

	var courses = ["CPWD","SQL","DCSD"];
console.log(course, index);
	document.addEventListener('DOMContentLoaded',function(){
	if (courses instanceof Array) {
		courses.forEach(function(course){
			console.log(course, index);	
			var	listItem=document.createElement('li');
			var listItemTxt=document.createTextNode(course);
			listItem.appendChild(listItemTxt);
			body.appendChild(listItem);
		});


var courses = ["CPWD","SQL","DCSD"];
var htmlOut;
if (courses.length > 0) {
		var	ul=document.createElement('ul');

		courses.forEach(function(course, index){
			console.log(course, index);	
			var	listItem=document.createElement('li');
			var listItemTxt=document.createTextNode(++index + ':' + course);

			listItem.appendChild(listItemTxt);
			ul.appendChild(listItem);
		});

		else
