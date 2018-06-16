
	
	document.addEventListener("DOMContenetLoaded",function () {
		
	})
		//para
	var body = document.querySelector("body");
	var para = document.createElement("p");
	var paraText = document.createTextNode("My First para");

	para.appendChild(paraText);
	body.appendChild(para);

	console.log(body);

		//list

		var list = document.querySelector("list");
		var list = document.createElement("li")
		var liText = document.createTextNode("ONE");

		list.appendChild(liText);
		body.appendChild(liText);

	console.log(list);	





	var h1Group = document.getElementsByTagName("h1");
	console.log(h1Group instanceof Object,h1Group);
	h1 = h1Group[0];
	console.log(h1);
	
 	h1.innerText = "WORLD";
 	h1.style.color = "red";


 	h2[0].setAttribute("style","color:green");
 	h2[0].style.color = "red";