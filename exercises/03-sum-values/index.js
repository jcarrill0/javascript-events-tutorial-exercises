window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let result = document.getElementById('resultNumber');

	result.value = parseInt(stringA) + parseInt(stringB);
};
