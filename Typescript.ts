// Strong Typing
// Strong Typing means we are defining the datatypes for variables 


//Types
// These are the types of data types which are available in Typescript
// string , number and boolean


var myName: string = "Nalla Perumal";
var num: number = 5;
var myBoolean: boolean = true;

// Inferred Typing 
// Inferred Typing means nomal javascipt declaration of a variable without define the specific type of the data
let name3 = "NP";
let nums = 5;
let is = true;

// Duck Typing 
// Duck Typing means we are define the object as it is we defined already 

let obj = { name: "nalla", id: 2 }
// obj={id:2}; this will throw an error because we are not to define like this we are define by obj={name:"np",id:4} this is correct;


// Arrays in Typescipt
// As in the javascript we are store different types of data in an single array but in typescript 

let arr: number[] = [2, 4, 6, 7];

// Any in Typescript
// Any in Typescript mean we are define the variable by different types as in the javascript there is not restriction on types.
var anyy: any = "Number";

// Enums in Typescript

enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction) {
    console.log(`Moving on ${Direction[direction].toLowerCase()}`)
}

move(Direction.Left)

//   in Typescript
// In normal javascript function we are not defining any types but in Typescript we are defing the types of the  parameteres to accept the value.
function addNumber(a: number, b: number) {
    return a + b;
}

//  Options Parameters
// in normal javascript function are not demand to give the parameter but in typescript we are forced to give the parameters we are mention in the funtion
// normal syntax: function add(a,b,c){ return a+b+c;}; add(a,b);
function addd(a, b, c) {
    return a + b + c;
}
// addd(5,6) this will throws an error if incase we want to give like this
//  we follow this syntax by adding ? function addd(a,b,c?){} so as of now we are not forced to give the value of c
//  as a parameter
addd(5, 6, 7);

// default parameters in TS
function defaultParameters(a: string, b: string, c: string = "cat") {
    return a + b + c;
}
// We send only 2 parameters but it will take the cat as the default parameter so this will not show any errors
defaultParameters("meow", "by");

// Interface in Typescript
// Without Interface 
// function greetUser(user:{firstName:string,lastName:string}){
//     return `Hello ${user.firstName} ${user.lastName}`;

// }

// function logUserDetails(user:{firstName:string,lastName:string,age:number}){
//     console.log(`User: ${user.firstName} ${user.lastName}, Age:${user.age}`);
// }
// let user1={firstName:"John",lastName:"Doe",age:20};

// console.log(greetUser(user1));

// logUserDetails(user1);
// ------------------------------------------
// With Interface
// by using the interface we are not need to define the user at every time instead of that ,
// we are use the user interface we are use that in any place we want.
interface User {
    firstName: string;
    lastName: string;
    age: number;
    middleName: string
}
function greetUser(user: User) {
    console.log(`User Details is: ${user.firstName} ${user.middleName} ${user.lastName}, Age:${user.age}`);
}

function logUserDetails(user: User) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

// Class in Typescript

class User {
    firstName: string;
    lastName: string;
    age: number

    // constructor()
    // {

    // }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello ,${this.firstName} ${this.lastName}`
    }
    getAge() {
        return this.age;
    }
}

let user1 = new User("John", "Doe", 20);
let user2 = new User("Selvam", "Raj", 20);
// let user3=new User();
// user3.firstName="Np"

console.log(user1.greet());
console.log(user1.getAge());

// Inheritance in Typescript

// without inheritance

// class Userer{
//     firstName:string;
//     lastName:string;
//     age:number;

//     constructor(firstName:string, lastName:string, age:number){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     greet(){
//         return `Hello, ${this.firstName} ${this.lastName}`;
//     }

//     getAge()
//     {
//         return this.age;
//     }
// }
// class Admin{
//     firstName:string;
//     lastName:string;
//     age:number;
//     role:string

//     constructor(firstName:string, lastName:string, age:number,role:string){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//         this.role=role;
//     }
//      greet(){
//         return `Hello, ${this.firstName} ${this.lastName} Role:${this.role}`;
//     }

//     getAge()
//     {
//         return this.age;
//     }

//     manageUsers(){
//         return `Managing this role: ${this.role}`
//     }
// }

// let user11=new User("N","p",25)
// let admin=new Admin("Alice","Smith",35,"PG Tl");

// console.log(user11.greet());
// console.log(admin.manageUsers());

// ---------------------------------------
// With Inheritance
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }
}
class User12 extends Person
{ 
    constructor(firstName: string, lastName: string, age: number) {
         super(firstName,lastName,age); 
    }
}

class Admin extends Person{
    role:string;
    constructor(firstName: string, lastName: string, age: number,role:string){
        super(firstName,lastName,age); 
        this.role=role;
    }  
}

let admin=new Admin("NP","M,",20,"Trainee");
