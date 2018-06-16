//console.log("script.js");

/*Names*/

var firstName = "Dhananjaya",

lastName = "Karandana",

email = "dkarandana@gmail.com",

fullName,

languages = [

"HTML",

"CSS", 

"JS", 

"JSX", 

"Angular",

["React","React Native","Redux"]

]

,langs = new Array("HTML","SCSS");

var myObj = {

"":"Empty String",

null:777,

undefined:"Und",

0:45,

false:34,

directory:"/home/httpd",

cache:false,

a:2,

b:["hint","lint"],

port:{

dev:3000,

prod:3030

}

};

var getFullName = function( firstName, lastName){

return firstName + " " + lastName;

};

function sayHi( person ){

return "Hi " + person;

}

console.log( sayHi(getFullName("Dhannajaya","Karandana")) );
