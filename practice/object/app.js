var person = {

  name: 'Gaurav',
  age : '27',

  greet : function(){
    console.log('Hello, '+ this.name);
  }
};

person.greet();

console.log(person['name']);