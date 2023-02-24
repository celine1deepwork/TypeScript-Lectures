let greeting = "Hello TypeScript ! ";
let greeting2 : string = "Hi TypeScript !";

// Defining Types  : Similar to the JSON 
const person = {
name : "Celine",
id : 0,
}

// Creating Object using ; .. This is contructor 
interface Person{ 
    name : string;
    id: number;
    age : number;
} 

// Declaring Person object 
const celinePerson : Person = {
    name : "Celine",
    id : 2,
    age : 20,
}

// Example Class 
interface User {
    name : string;
    id : number;
}
class UserAccount{
    name : string;
    id : number;
    age : number;

constructor(name: string , id: number){
    this.name = name;
    this.id = id;

}
constructorSecond(name: string , age : number){
    this.name = name;
    this.age = age;
}
}

// We're declaring object outside of the class. !! İmportant Detail.
const user :User = new UserAccount("Celine", 20);

// Function 
function getAdminUser(): User { // User shows the return type here.
return user;
}
function deleteUser() : User { // User shows the return type here.
return user;
}

//With a union, you can declare that a type could be one of many types.
type MyBool = true | false;

// Here's more example
type celineEmotionalStates = "sad" | "happy" | "neutral";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// also can be used in functions
function getName(obj: User | Person) {
    return obj.name;
  }

  // Here's another example : here we can learn 'typeof' 
  function getStringObj(obj : string | string[]){
    if(typeof obj == "string"){
        return obj;
    }
    else{ // you can write without else with directly returning.
        return [obj];
    }
  }

  // Generics Array : Only difference we use type & writing without putting end () :)
const StringArray = Array<string>;
const intArray = Array<number>;
const ObjectArray = Array<{name : string, age: number}>;
const ObjectArray2 = Array<typeof user>;



//We can declare your own types that use generics:
//There's two different ways to write this kind of code.
interface Backpack<Type>{
    add: (obj: Type) => void;
    get: () => Type;

}
// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
// You may think like declare is Casting. From type to string
declare const backpack: Backpack<string>;
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();
 
// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("CampingNeeds");

//Example 
class Car{
    brand: string;
    price: number;
    constructor(brand: string, price: number){
        this.brand = brand;
        this.price = price;
    }
}
function saveCarIntoList(car1  : Car ){
 type carList = Array <Car>; 
// OR type carList = Array <tyoeof car1 : Car>; 
//OR type carList = Array<{brand: string, price: number}>;
    console.log('Brand of this car is ${car1.brand} and price of it is ${car1.price}');
    //carList.push(car1);
    
}
//There's many ways to create an object.
const carReal2 = new Car("Mercedes", 563094);
const carReal = {brand : "Mercedes" , price : 12020};
saveCarIntoList(carReal);

//Second way to create the objects 
const obj =  {
name : "Carrot",
for : "Max",
details: {
color : "black",
weight : 10,
}
}
console.log(obj.details.color);
//also we're able to use the parameters inside the bracets ; like [ parameter ] without using " . "
console.log(obj["details"]["color"]); 
// creating array as usual
const animals = ["dog", "cat", "elephant"];
//OR Generic 
animals.push("Butterfly");// adds first element as Butterfly.
animals.pop(); //removes elephant.
// NOTE : unshift is pretty similar to the push array's first index like in queue's.
let animalls = Array<string>;
// For Loop
for(let i = 0; i < animals.length ; i++){
    console.log(animals.pop());
}
//Second way For Loop
for(const animal of animals){
    if(animal.charAt(0) == "B" ){
        console.log(animal);
    }
} // will return Butterfly...
// many type of array is possible via TypeScript...
const arr = [true, "animal", 34355];
//Fucntion 
function avg(...args){
    let sum = 0 ; 
    for(const item of args){
        sum += item;
    }
    return sum/ args.length; // get's the average.
}
avg(1,3,5,6,7,8,5,2);


// Tree's 
function countChars(elm) {
    if (elm.nodeType === 3) {
      // TEXT_NODE
      return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; (child = elm.childNodes[i]); i++) {
      count += countChars(child);
    }
    return count;
  }
