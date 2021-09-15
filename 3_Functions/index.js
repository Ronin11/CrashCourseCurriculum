/*
* Functions are a way to break down functionality into small chunks.
* This helps code be more readable and understandable.

* Functions will have special variables passed to them called "parameters"
* They sit in the parenthesis of the function => "function nameFunction(param1, param2, param3)"
* These are given by the invoker(whoever executes the function)
* "nameFunction("John", "Jane", "Doe")" could be execution of that function.

* Return statements are special ways of getting variables back out of a function.
* Return statements end the function execution whenever they are called.

* Parameters pass data into the functions, returns get the data back out.

*/


// Exercise 1: Fix the helper function to pass the tests
// To run the tests run `npm test` in your console

// You only need to fix this helper function for this example
// This function adds the two numbers together
function add(number1, number2){
	let sum = number1 - number2;
	return sum
}

// This function calls the sum function and does some logging
export function addFunction(){
	let testNumber1 = 2;
	let testNumber2 = 1;

	let testSum = add(testNumber1, testNumber2);
	console.log("testSum: ", testSum);

	return testSum;
}

// You only need to fix this helper function for this example
// This function requres that purchases of "Alcohol" must be 21 and above, and "Cigarettes" be 19 and above.
function isAgeValid(age, purchase){
	// Validates if the purchase is valid for the buyers age.
	if(purchase == "Alcohol"){
		return age < 21;
	}else if(purchase == "Cigarettes"){
		return age > 50;
	}else{
		return true;
	}
}
// This function calls the isAgeValid function and does some logging
export function validAgeFunction(age, purchase){
	let validAge = isAgeValid(age, purchase);

	console.log("validAge: ", validAge);

	return validAge;
}

// Exercise 2: Write the function to pass the tests.
// This function squares the parameter and returns it.
// Hint, it can be accomplished in one line.
export function squareFunction(number){

}
