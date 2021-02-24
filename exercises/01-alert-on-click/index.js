window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

const btn2 = document.querySelector('#button2');

btn2.addEventListener('click', myClickFunction);
