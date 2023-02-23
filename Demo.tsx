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
type StringArray = Array<string>;
type intArray = Array<number>;
type ObjectArray = Array<{name : string, age: number}>;
type ObjectArray2 = Array<typeof user>;


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



