// Strong Typing
// Strong Typing means we are defining the datatypes for variables 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Types
// These are the types of data types which are available in Typescript
// string , number and boolean
var myName = "Nalla Perumal";
var num = 5;
var myBoolean = true;
// Inferred Typing 
// Inferred Typing means nomal javascipt declaration of a variable without define the specific type of the data
var name3 = "NP";
var nums = 5;
var is = true;
// Duck Typing 
// Duck Typing means we are define the object as it is we defined already 
var obj = { name: "nalla", id: 2 };
// obj={id:2}; this will throw an error because we are not to define like this we are define by obj={name:"np",id:4} this is correct;
// Arrays in Typescipt
// As in the javascript we are store different types of data in an single array but in typescript 
var arr = [2, 4, 6, 7];
// Any in Typescript
// Any in Typescript mean we are define the variable by different types as in the javascript there is not restriction on types.
var anyy = "Number";
// Enums in Typescript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving on ".concat(Direction[direction].toLowerCase()));
}
move(Direction.Left);
//   in Typescript
// In normal javascript function we are not defining any types but in Typescript we are defing the types of the  parameteres to accept the value.
function addNumber(a, b) {
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
function defaultParameters(a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
}
// We send only 2 parameters but it will take the cat as the default parameter so this will not show any errors
defaultParameters("meow", "by");
function greetUser(user) {
    console.log("User Details is: ".concat(user.firstName, " ").concat(user.middleName, " ").concat(user.lastName, ", Age:").concat(user.age));
}
function logUserDetails(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
// Class in Typescript
var User = /** @class */ (function () {
    // constructor()
    // {
    // }
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello ,".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user1 = new User("John", "Doe", 20);
var user2 = new User("Selvam", "Raj", 20);
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var User12 = /** @class */ (function (_super) {
    __extends(User12, _super);
    function User12(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return User12;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.greet = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, ",Role: ").concat(this.role);
    };
    Admin.prototype.manageUsers = function () {
        return "Managing users with role ".concat(this.role);
    };
    return Admin;
}(Person));
var admin = new Admin("NP", "M,", 20, "Trainee");
var admin1 = new Admin("Nalla", "Perumal", 30, "Trainee");
console.log();
// Closures in TS
// without closure
var counterValue = 0;
function incrementCounter() {
    counterValue++;
}
function getCounterValue() {
    return counterValue;
}
incrementCounter();
console.log(getCounterValue());
incrementCounter();
console.log(getCounterValue());
