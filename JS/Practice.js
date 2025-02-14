// 1.What is Javascript?
/*
   Javascript is Interpreted language read code line by line. And a Single Thread Language.
   Which is mostly used for Web development.   
*/
// End of 1.
// 2.What is Variable?
// 3.Types of Variable?
// Variable has 3 types they are-sytax:| variable variable_name = data |
/*
   1.let(This is used as latest.)
   2.var(This is also used to define a variable but this is an old one.)
   3.const(This is used to define a constant(final) values.This cannot be changed)
*/
let a=5
let b=5
let c=a+b
console.log("a+b:+"+c)
// End of 3.

// Operations in Javascript?
/*
   Arithmetic operaions in Js are:Add(+),Sub(-),Multiplication(*),Division(/);
*/
var num1=5
var num2=6
let add=num1+num2
let sub=num2-num1
let multiplication=num1*num2
let division=num2/num1
console.log("Addition:"+add+"||"+"Subtraction:"+sub+"||"+"Multiplication:"+multiplication+"||"+"Division:"+division)

// 5.What is Datatypes in JS?
// The Javascript variable can hold anytypes of Data

let string="NP"
let num=2
let boolean=true

console.log("Numbers:"+num ||+"String:"+string||+"Boolean:"+boolean);

// 6.What is functions in Js?
/*
    A funtion is used to reduce to repeatative lines of code-
    syntax-
    function function_name()
    { 
    Body of the Funtion
    }
*/
function adds(a,b)
{
    console.log("Additon:"+(a+b));
    
}

adds(10,5)

// Advanced Function(Arrow Functions) is used in Js is:syntax- 
// variable function_name=() => { 
// Body of the funcion
// }

let subtract=(a,b) =>
{
   console.log(a-b);
   
}

// 7.if and else in JS?
if(a>b)
{
    console.log("a is greater than b")
}
else{
    console.log("b is greater than a")
}
// For Loop in JS?
for(let i=1;i<=5;i++)
{
    console.log(i);
}


