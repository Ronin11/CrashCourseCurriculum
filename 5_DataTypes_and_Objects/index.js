/*
* DataTypes are the different kinds of variables you can use.
* You've already used a bunch of these, in Javascript there are 9 different types, these 6 are the most important:
* 1. Booleans (true or false)
* 2. Numbers
* 3. Strings
* 4. Arrays
* 5. Object
* 6. Functions

* In most langauges there are a lot more, but these are good enough for now.

* Objects are the powerhouses of the programming world.
* They are similar to arrays, where values are "indexed" by strings. But dissimilar because
* arrays tend(but are not required) to be the same data type for each element, whereas objects tend to be different datatypes.

* Here's an example object:
let userObject = {
	"username": "johndoe",
	"password": "password",
	"age": 29,
	"isSubscribedToEmailList": true,
	"canPurchase": function(){}
}

* Functions inside a class are a "method"
* Variables inside a class are "properties"

* Objects can be accessed by using "dot notation":
 userObject.username -> "johndoe"

* Objects can also be accessed with keys like arrays:
 userObject["age"] -> 29
*/

// Exercise 1: Fix the functions to pass the tests
// To run the tests run `npm test` in your console
// This function checks if the username is "johndoe" and if password is "password", if so, then the login is successful.
export function login(userObject){
	// Fix the conditional
	if(userObject.username == "" && userObject.password == ""){

	}

	return false;
}

// This function sets the "isSubscribedToEmailList" property to false
export function unsubscribeFromEmailList(userObject){
	// Perform the operation on the object 

	return userObject;
}

// Heres an object representing the required age to for a purchase.
let restrictions = {
	"Alcohol": 21,
	"Cigarettes": 19
}

// This function will determine whether or not a person can purchase a product
export function canPurchase(userObject, purchase){
	// Fix the conditional
	if(userObject.age < restrictions[purchase]){

	}

	return false;
}

// You can also put functions in an object
// In Javascript there is a special keyword called "this"
// "this" generally refers to the object it is apart of.(But "this" in JS is the single source of the the most bugs IMO.)

let car = {
	"mpg": 30,
	"fuelCapacity": 18,
	"fuel": 15,
	"drive": function(miles){
		if(this.fuel * this.mpg > miles){
			this.fuel -= miles / this.mpg;
			return true;
		}else{
			return false;
		}
	}
}

function driveCar(){
	let miles = 10
	if(!car.drive(miles)){ // Checks if the function returns a false.
		console.log("Car doesn't have enough gas!");
	}else{
		console.log(`Car drove ${miles} miles`);
	}
}

// Now implement the checkStatus function with the following requirements:
// The heater is turned on when the currentTemp is below desiredTemp.
// The cooler is turned on when the currentTemp is above desiredTemp.
// The heater and cooler are not turned on at the same time.
let thermostat = {
	"desiredTemp": 69,
	"isHeaterOn": false,
	"isCoolerOn": false,
	"checkStatus": function(currentTemp){
		// Implement this function to pass the tests
	}
}

export function runThermostat(currentTemp){
	thermostat.checkStatus(currentTemp)

	console.log("Thermostat: ", thermostat);
	
	return thermostat;
}



// Example:
// Its often advantageous to create objects that contain other objects.
function createNode(value){
	return {
		value: value,
		next: null
	}
}

// This function creates a node list with the array values
export function convertArrayToNodes(array){
	let baseNode = createNode(array[0]);
	let previousNode = baseNode;
	for(let i = 1; i < array.length; i++){
		let node = createNode(array[i]);
		previousNode.next = node
		previousNode = node
	}
	return baseNode;
}

// Bonus Problem:
// Now create a node list that is linked both forwards and backwards with a next and a prev property
function createDoublyLinkedNode(value){
	return {
		value: value,
		next: null,
		prev: null,
	}
}

// This function creates a node list with the array values
export function convertArrayToDoublyLinkedNodes(array){
	let baseNode = createDoublyLinkedNode(array[0]);

	// Try to figure out the logic to make this work, don't worry if you don't get it!

	return baseNode;
}