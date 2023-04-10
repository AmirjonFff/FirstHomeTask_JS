"# FirstHomeTask_JS" 
![The San Juan Mountains are beautiful!](/img/js.jpg "San Juan Mountains")
# Java Script HomeTask_1

### History of Java Script

Java Script - один из самих популярний язык програмированы в мире. Это язык и его фреймворки исползуется для Fron-tend apps, Back-end apps, Native mobile applications, Native desktop applications.
Первый version Java Script создан в 1995 году. Он каждий год обновится. Самий болшой его обновление был в 2015 год. Java Script обявлни входит по имю ECMAScrip(ES2016, ES217,...).

### Java Script varablies and constands

1. let- локалный varablie 
2. var- глобалный varablie
3. const- константный varablie
let, var, const определяет област перемени.

### Objekts and Primitives

Value varablie разделится на две групи: **Object** and **Primitive** 
 #### Primitive data type
 1. Number
 2. String
 3. Booling
 4. Undefind
 5. Null
 6. Sumbol
 7. Bigint
 #### Object data type
 1. Object (Object, function, array)
 
 ### Operators in Java Script
 
 1. Арифметические Operators- +, -, *, /
 2. Comparison Operators- =, ===, <=, >=, !=, !==
 3. Логические Operators- ||, &&, !
      1. ||- возврашается true если один из значение является true
      2. &&- возврашается true если всех из значение является true
      3. !- возврашается противположение. Например !true возврашается false
 4. Type Conversions- Number("3.33")
 5.Assignment Operators- =, +=, *= ...
 
 ### Table of Contents
 
 1. **Conditions**
 2. **Loops**
 3. **Functions**
 #### 1. Condition **IF/ELSE**
 Condition if/else на Java Script синтаксис и ево исползовани похож на язык C++. 
 **Например: **
 let firstNum = 5;
  if(firstNum >= 0){
     console.log("Positive");
  } else{
     console.log("Negative");
  }
  
  ####  Condition **Ternary**
Очен удобно и понятно для написани код
 **Например:** 
 let number = -5;
(number>=0)?console.log("Positive"):console.log("Negative");

  #### 3. Condition **Switch**
Это Condition исползуется для не которих определенний условые.

#### Loops For и While
Loops For и While на Java Script синтаксис и ево исползовани похож на язык C++. 

#### 1. Function Declaration
Это Function создается по имя и параметри. Function визивается по имя и берет аргументи
Например:
function sumNums(num1,num2){
    return num1+num2
  }
  console.log(sumNums(2,3));
  
 #### 2. function Expression
 Это Function конвертироват varablie на Function
 Например:
   let num=(a)=>{
      return a*2
  }
  console.log(num(2));
  
  let num2=function(b){
      return b*3
  }
  console.log(num2(3));
 
#### 3. Imemediately invoked function Expression
 Это Function визивается сразу в консе Function
  Например:
(function(a){
     console.log(a);
  })(2)
 
 
 


