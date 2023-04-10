// Varablies
let a = 10;
const PI = 3.14;
var b = 15;
console.log(a, PI, b);

// Condition IF/ELSE
let firstNum = 5;
if(firstNum >= 0){
    console.log("Positive");
} else{
    console.log("Negative");
}

// Ternary Operator
let number = -5;
(number>=0)?console.log("Positive"):console.log("Negative");
// 1. function Declaration
function sumNums(num1,num2){
    return num1+num2
  }
  console.log(sumNums(2,3));
  
  // 2. function Expression
  let num=(a)=>{
      return a*2
  }
  console.log(num(2));
  
  let num2=function(b){
      return b*3
  }
  console.log(num2(3));
  
  //3. Imemediately invoked function Expression
  
  (function(a){
     console.log(a);
  })(2)