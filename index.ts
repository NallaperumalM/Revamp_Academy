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
    greet():string{
        return `Hello, ${this.firstName} ${this.lastName},Role: ${this.role}`;
    }
    manageUsers()
    {
        return `Managing users with role ${this.role}`;
    }
}

let admin=new Admin("NP","M,",20,"Trainee");

let admin1=new Admin("Nalla","Perumal",30,"Trainee");

console.log()


// Closures in TS
// without closure
let counterValue=0;

function incrementCounter(){
     counterValue++;
}
function getCounterValue(){
    return counterValue;
}
incrementCounter();
console.log(getCounterValue());
incrementCounter();
console.log(getCounterValue());

// with Closure by using Closure function in closure method and non-closure method to reduce the code usability so we can use this counter varaiable in any place of our code base
function createCounter(){ 
    let counter=0;

    return {
        increment:function()
        {
            counter++;
        },
        getValue:function()
        {
            return counter;
        }
    };
}
 
const counter1=createCounter();
console.log(counter1.increment);
console.log(counter1.getValue);

// Access Modifiers in TS--> By using the Access modifiers in 
// typescript we are able to restrict the user to change the value by 
// define the variable by using the access modifiers like ->Public,Private,Protected.

class AccessModifier{
    private name:string;
    private age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    // For access those restricted data we are using the getter and setter methods to access those datas
    public getName(){
        return this.name;
    }
    public getAge(){
        return this.age;
    }

    // For setting or change the value we use the setter methods to achieve this
    public setName(name:string){
        this.name=name;
    }
    public setAge(age:number){

        this.age=age;
    }
}


const accesModifier=new AccessModifier("Np",30);
console.log(accesModifier.getName());
console.log(accesModifier.getAge);

accesModifier.setName("Selvam");
accesModifier.setAge(20);

// Static Functions in TS
// By using the Static Function we are not need to create the object for that class we are access the function by the class name itself
class UserStatic{
    name:string;
    age:number;
    constructor(name:string, age:number)
    {
        this.name=name;
        this.age=age;
    }
    static isAdult(age:number){
        return age>=30;
    }
}

// const userStatic=new UserStatic("Np",30);
// console.log(userStatic.isAdult());
console.log(UserStatic.isAdult(20));


// Static Properties in TS
//  Without Static property

// class UserStaticProp{
//     name:string

//     constructor(name:string){
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
// }

// let totalUser=0;

// function createUser(name)
// {
//     totalUser++;
//     return new UserStaticProp(name);
// }

// const userStaticProp=createUser("Nalla");
// const userstaticProp2=createUser("Bob");

// console.log(userStaticProp.getName());
// console.log(userstaticProp2.getName());
// console.log(totalUser);

// with Static Property

class UserStaticProp{
    name:string
    static totalUser:number=0;
    constructor(name:string){
        this.name=name;
        UserStaticProp.totalUser++;
    }
    getName(){
        return this.name;
    }
    static getTotalUser()
    {
        return UserStaticProp.totalUser;
    }
}

// console.log(userStaticProp.getName());
// console.log(userstaticProp2.getName());
console.log(UserStaticProp.totalUser);

// Generics

// Without Using Generics
/*
class NumberStack{
    private items:number[]=[]
    
    push(item:number)
    {
        this.items.push(item);
    }

    pop(){
        return this.items.pop;
    }
}

class StringStack{
    private items:string[]=[]

    push(item:string)
    {
        this.items.push(item)
    }

    pop(){
        return this.items.pop;
    }

}

const numberStack=new NumberStack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());

const stringStack=new StringStack();
stringStack.push("Hello");
stringStack.push("World");

console.log(stringStack.pop());
 */

// With Generics
// By using the Generic we are reduce the repeated code base to attain reliability we can use any types of data 
class Stack<T>{

    private items:T[]=[]

    push(item:T)
    {
        this.items.push(item);
    }

    pop()
    {
        return this.items.pop();
    }

}

const numberStack=new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop());

const stringStack=new Stack<string>();
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop());


// TypeCasting in TS
// without using the Typecasting we are use the any field in the user but define the user as to be in
//  the types of UserTypeCasting Class so we are define this user is to be in the type of UserTypeCasting
interface UserTypeCasting{
    name:string;
    age:number;
}

const jsonData='{"name":"Alice", "age":"30"}';

const user=JSON.parse(jsonData) as UserTypeCasting

console.log(`Name: ${user.name}, Age: ${user.age}`)


// TypeAssertion in TS 
// TypeAssertion in Typescript is used to assign a type of the HTML Element  as HTMLInputElement
const element=document.getElementById('myElem') as HTMLInputElement;
element.value="Hello Typescript";

const elem=document.getElementById('select') as HTMLSelectElement;
elem.value="Velu";

// Insertion Type
interface Employee{
    id:number;
    name:String;
}

interface Admmin{
    isAdmin:boolean;
    accessLevel:number;
}

type AdminEmployee= Employee & Admmin

let adminEmployee:AdminEmployee={
    id:1,
    name:"Np",
    isAdmin:true,
    accessLevel:2
}

console.log(adminEmployee.id);
console.log(adminEmployee.name);
console.log(adminEmployee.isAdmin);
console.log(adminEmployee.accessLevel);

//Decorator in TS
// Decorator is a special declaration

// Without Decorator
/*
class Calculator{
    add(a:number,b:number)
    {
        console.log(`Calling add method with arguments ${a} and ${b}`)
        const result=a+b;
        console.log(`Result:${result}`)
        return result;
    }
    subtract(a:number,b:number)
    {
        console.log(`Calling add method with arguments ${a} and ${b}`)
        const result=a-b;
        console.log(`Result:${result}`)
        return result;

    }
} */
 
const calculator=new Calculator();
calculator.add(5,3);
calculator.subtract(7,2);

// With Decorator

function logMethod(target:any,propertyKey:string,descriptor:PropertyDecorator){
    const originalMethod=descriptor.value;

    descriptor.value=function(...args:any[]){
        console.log(`Calling ${propertyKey} method with arguments ${a} and ${b}`)
    }
}