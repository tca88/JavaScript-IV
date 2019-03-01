// CODE here for your Lambda Classes

// Person Class
class Person {
    constructor(attr) {
      this.name = attr.name;
      this.age = attr.age;
      this.location = attr.location;
      this.gender = attr.gender;
    }
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  // Instructor Class
  class Instructor extends Person {
    constructor(instructorattr) {
      super(instructorattr);
      this.specialty = instructorattr.specialty;
      this.favLanguage = instructorattr.favLanguage;
      this.catchPhrase = instructorattr.catchPhrase;
    }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeCalc(student) {
      let num = 0;
      let numTwo = 10;
      let random = Math.floor(Math.random() * (numTwo - num + 1)) + num;
      let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      random = random * plusOrMinus; 
      return student.grade - random + '%';
    }
  }
  
  // Student Class
  
  class Student extends Person {
    constructor(studentattr) {
      super(studentattr);
      this.previousBackground = studentattr.previousBackground;
      this.className = studentattr.className;
      this.favSubjects = studentattr.favSubjects;
      this.grade = studentattr.grade;
    }
    listsSubjects(student, arr) {
       return student[arr].forEach(function(item){
       console.log(item);
     });
      }
    PRAssignment(student, subject) {
      return `${student.name} has submitted a PR for ${subject}`;
      }
    sprintChallenge(student, subject) {
      return `${student.name} has begun sprint challenge on ${subject}`;
      }
    graduate(student) {
      if (student.grade > 70) {
        return `Congratulations, ${student.name}, you graduated!`;
      }
      return `Hey ${student.name}, looks like the assignment needs to be revisited because you got a ${student.grade}%`
    }
  }
  
  // ProjectManagers class
  class ProjectManager extends Instructor {
    constructor(pmattr) {
      super(pmattr);
      this.gradClassName = pmattr.gradClassName;
      this.favInstructor = pmattr.favInstructor;
    }
    standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }
  
  //Person objects
  
  const neil = new Person({
    name: "Neil",
    age: 29,
    location: "California",
    gender: "M"
  });
  
  const sarah = new Person({
    name: "Sarah",
    age: 26,
    location: "New Jersey",
    gender: "F"
  });
  
  //Instructor objects
  
  const josh = new Instructor({
    name: "Josh",
    age: 30,
    location: "Utah",
    gender: "M",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "What's up everybody?"
  });
  
  const fred = new Instructor({
    name: "Fred",
    age: 30,
    location: "Texas",
    gender: "M",
    specialty: "Web Development",
    favLanguage: "CSS",
    catchPhrase: "CSS 4 Lyfe!"
  });
  
  //Student objects
  
  const trish = new Student({
    name: "Trish",
    age: 30,
    location: "New Jersey",
    gender: "F",
    previousBackground: "Analytics",
    className: "WEB18",
    favSubjects: [
        'Advanced CSS',
        'JavaScript',
        'SQL'
      ],
    grade: 90
  });
  
  const allie = new Student({
    name: "Allie",
    age: 34,
    location: "Pennsylvaia",
    gender: "F",
    previousBackground: "Marketing",
    className: "DATASCI18",
    favSubjects: [
        'Python',
        'SQL',
        'R'
      ],
    grade: 68
  });
  
  //Project Manager objects
  
  const ben = new ProjectManager({
    name: "Ben",
    age: 30,
    location: "Texas",
    gender: "M",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "Ayyyyee let's go!",
    gradClassName: "WEB17",
    favInstructor: "Josh"
  });
  
  const dennis = new ProjectManager({
    name: "Dennis",
    age: 30,
    location: "California",
    gender: "M",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "You got this!",
    gradClassName: "WEB17",
    favInstructor: "Josh"
  });
  
  console.log(neil.speak());
  console.log(sarah.gender);
  console.log(josh.location);
  console.log(fred.grade(allie, "Intro to Statistics"));
  console.log(allie.PRAssignment(trish, "JavaScript III"));
  console.log(trish.sprintChallenge(trish, "JavaScript IV"));
  allie.listsSubjects(trish, "favSubjects");
  console.log(ben.standUp("#web18_ben"));
  console.log(ben.debugsCode(trish, "Responsive Design II" ));
  console.log(allie.graduate(allie));
  console.log(josh.gradeCalc(trish));