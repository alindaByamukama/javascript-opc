'use strict'; 
(function() {

  let person = {
    name: {
      first: 'Susan',
      last: 'Alinda'
    },
    age: 28
  };
  // what if we want to know this persons full name?

  Object.defineProperty(person, 'fullName', 
  {
    get: function() {
      return this.name.first + ' ' + this.name.last;
      },
      // a set function thats going to set proprties on our person object
      set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
      }

  });
// now we can change a persons full name using the set function

  person.fullName = 'firstName lastName';

  display(person.fullName);
  display(person.name.first);
  display(person.name.last);


})();

/*
getters and setters!

*/
