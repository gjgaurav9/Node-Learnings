function Person(firstName , lastName) {

  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function(){
  console.log('Hello '+this.firstName);
}

var mahesh = new Person('mahesh','manoj');
mahesh.greet();

var bablu = new Person('bablu','manoj');
bablu.greet();

console.log(mahesh.__proto__);

