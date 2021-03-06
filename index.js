console.log("working");
//Q1. 
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//--------------------------------------------------------------------------------------------------------------------

//Q2.

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

//----------------------------------------------------------------------------------------------------------------------------

//Q3.

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 3 thrice
    }, 1000);
  }

//------------------------------------------------------------------------------------------------------------

//Q4.
// Print Output

var a = 12;
(function () {
  alert(a);
})();



//---------------------------------------------------------------------------------------------------------------


//Q5.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();



//--------------------------------------------------------------------------------------------------------------

//Q6.

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);



//----------------------------------------------------------------------------------------------------------------


//Q7.  Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.


function outer(length){
   function inner(breadth){
       console.log(`Area of rectangle is ${length * breadth} square meter`)
   }
   inner(90);
}
outer(200);

//---------------------------------------------------------------------------------------------------------------

//Q8.Take a variable in outer function and create an inner function to increase the counter every time it is called


function outside(){
    let  x = 0;
     return function inside(){
         x++;
         console.log(x);
    };
   
}

let y = outside();
y();
y();
y();
y();
y();