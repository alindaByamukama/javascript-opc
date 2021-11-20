'use strict'; 
(function() {

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, 'fullName', {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this._enrolledCourses = [];

    this.enroll = function(courseId) {
      this._enrolledCourses.push(courseId);
    };

    this.getCourses = function() {
      return this.fullName + "'s enrolled courses are: " +
      this._enrolledCourses.join(', ');
    };
  }
// create a prototype inheritance chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// create a new student
let sofya = new Student('Sofya', 'Carter', 34);

sofya.enroll('AH101');
sofya.enroll('AD205');
sofya.enroll('CM301');

display(sofya.getCourses());

// display(sofya);
// display(sofya.__proto__); // Student { }
// display(sofya.__proto__.__proto__); // Person { }

})();

/*
  
*/
