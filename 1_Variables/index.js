// This is a comment.
/*
	This is also a comment.
*/

// These comments will have important information about the code so read through them carefully.

/*
* Our first module will be about basic variable assignment. A variable is just a fancy name for a place to store some value 
* that's useful to your program. Assignment is a fancy name for setting the variable to the value you want.
*/

// Exercise 1: Change a couple variables to pass the tests
// To run the tests run `npm test` in your console

export function nameFunction(){
	// You only need to modify this line to pass the tests
	let nameVar = "John";

	console.log("Name: ", nameVar);

	return nameVar;
}

export function numberFunction(){
	// You only need to modify this line to pass the tests
	let numberVar = 123;

	console.log("Number: ", numberVar);

	return numberVar;
}

export function booleanFunction(){
	// Add a line here to pass the tests

	console.log("Number: ", booleanVar);

	return booleanVar;
}