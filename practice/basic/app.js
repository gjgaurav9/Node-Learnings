// var a = 1;
// var b = 2;

// console.log(a+b);

function greet(){
  console.log('hi');
}

greet();

function takeFunction(fn){
  fn();
}

takeFunction(greet);

var greetMe = function(){
  console.log('Hello greet me');
}

greetMe();


takeFunction(greetMe);

takeFunction(function(){
  console.log("another type");
});