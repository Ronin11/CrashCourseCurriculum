/*
* Most programs will need to perform some logic to correctly do what you want them to.
* These are if, else if, and else statements.
*/


// Exercise 1: Add/change conditionals to pass the tests
// To run the tests run `npm test` in your console

export function nameFunction(switchingVar){
	// switchingVar is either true or false in this example.
	let nameVar = "John";

	// "==" is the equals operator, this checks if switchingVar is the value of "true"
	if(switchingVar == true){
		// You only need to modify this line to pass the tests
		nameVar = "Doe";
	}

	console.log("Name: ", nameVar);

	return nameVar;
}

export function booleanFunction(switchingVar){
	// switchingVar is either true, false or null in this example.
	let booleanVar;

	// "!=" is the not equals operator, this checks if switchingVar is NOT the value of "true"
	// Fix the logic below:
	if(switchingVar != false){
		booleanVar = true;
	}else if(switchingVar == false){
		booleanVar = false;
	}else{
		booleanVar = null;
	}
		

	console.log("Number: ", booleanVar);

	return booleanVar;
}

export function lessThanZeroFunction(num){
	// num is some number between -1000 and 1000
	let isLessThanZero;

	// "<" is the less than operator, this checks if num is less than -1000. 
	// Ex: {(-1001 < -1000) -> true} or {(-1000 < -1000) -> false}
	// Fix the conditional here
	if(num < -1000){

	}

	console.log("Number: ", num);

	return isLessThanZero;
}

export function numberFunction(switchingVar){
	let numberVar = 123;


	// Add the conditional here


	console.log("Number: ", numberVar);

	return numberVar;
}


/*
* Most logic is done with some basic boolean operations:
* The And operator: "&&" {(true && true) -> true}, {(true && false) -> false}
* The Or operator: "||" {(true || true) -> true}, {(true || false) -> true}, {(false || false) -> false}
* The Greater Than operator: ">" {(0 > 0) -> false}, {(100 > 0) -> true}
* The Greater Than Or Equals To operator: ">=" {(0 >= 0) -> true}, {(100 >= 0) -> true}, {(-1 >= 0) -> false}
* The Less Than operator: "<" {(0 < 0) -> false}, {(0 < 100) -> true}
* The Less Than Or Equals To operator: "<=" {(0 <= 0) -> true}, {(0 <= 100) -> true}, {(0 <= -1) -> false}
*/
