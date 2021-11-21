'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    // add a static adult age property
    static adultAge = 18;

    // getters and setters live on the prototype
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
    // adding functions 
    isAdult() {
      return this.age >= 18;
    }
  }
  // display static property
  display(Person.adultAge);

  // inheritance w js classes
  class Student extends Person {
    constructor(firstName, lastName, age) {
      // call the constructor on the class we are extending
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    // declare function with keyword static
    static fromPerson(person) {
      return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
      this._enrolledCourses.push(courseId);
    }

    getCourses() {
      return this.fullName + "'s enrolled courses are : " +
        this._enrolledCourses.join(', ');
    }
  }

  let sofya = new Person('Sofya', 'Coolio', 43);
  // static function call
  let sofyaStudent = Student.fromPerson(sofya);

  display(sofyaStudent);

})();

/*
  
*/
