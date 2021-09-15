/*
* Arrays are simply a list of variables.
* Loops are a good way of interacting with arrays, and doing other things.

* Arrays are "indexed" meaning that each element can be accessed by its position in the list, starting at 0
* For example:
* let array = ["John", "Jane", "Bob", "Joe"]
* array[0] -> "John"
* array[2] -> "Bob"

* In Javascript there are some useful functions and variables built-in to arrays. 
* For this exercise you will need to use the following:
* array.length -> the full length of the array (Also can be used on strings.)
* array.push(element) -> this adds the element to the end of the array.
* 

*/

// Working Example:
// This function adds all of the numbers together in an array and returns the sum.
export function sum(numArray){
	let sum = 0;

	// Loop through all of the array elements and add it to the sum variable.
	for(let i = 0; i < numArray.length; i++){
		sum += numArray[i];
	}
	console.log("numArray: ", numArray);
	console.log("sum: ", sum);

	return sum;
}


// Exercise 1: Fix the helper function to pass the tests
// To run the tests run `npm test` in your console

// This function will loop through the array and give us the max number in the array.
export function maxNumber(numArray){
	let maxNumber = 0;
	for(let i = 0; i < numArray.length; i++){
		// Fix and implement the conditional to pass the tests
		if(maxNumber > numArray[i]){

		}
	}
	console.log("numArray: ", numArray);
	console.log("maxNumber: ", maxNumber);

	return maxNumber;
}

// This function will return true if there's a zero in the array.
export function containsZero(numArray){
	// Another type of loop is a "for each loop". This allows us to look at the element and not worry about the index.
	for(let num of numArray){
		// Fix the conditional to pass the tests
		if(num != 0){
			return
		}
	}
	console.log("numArray: ", numArray);

	return false;
}

// This function will add each element of the two arrays together and return the new array.
export function arraySum(array1, array2){
	let returnArray = [];

	// Implement the loop to pass the tests

	return returnArray;
}


// Bonus problem:
// This function will return the nth fibbonaci number as given in the parameter.
export function fibonnaciFunction(nthFibbonaciNum){
	let fibbonaci = [0, 1]

	for(let i = 2; i < nthFibbonaciNum; i++){
		// Add the previous 2 elements together and push it onto the end of the array.
	}

	console.log("nthFibbonaciNum: ", fibbonaci[nthFibbonaciNum]);

	return fibbonaci[nthFibbonaciNum];
}