window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let elmID = event.target.attributes.id.value
		alert('El ID del elemento seleccionado es: '+ elmID);
	});
};
