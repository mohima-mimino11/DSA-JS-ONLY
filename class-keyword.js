class Student{
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.absent = 0;
    this.scores = [];
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate(){
    this.absent += 1;
    if(this.absent >= 3){
      return "You are expelled!!!"
    }
    return`${this.firstName} ${this.lastName} has been late ${this.absent} times`
  }
  addScore(score){
    this.scores.push(score);
    return this.scores;
  }
}

let firstStudent = new Student("Mimino", "Codingbee", 1);
let secondStudent = new Student("Colt", "Steele", 3);
console.log(firstStudent);
// console.log(secondStudent);
// secondStudent.grade = 4;
console.log(secondStudent);
console.log(firstStudent.fullName());

console.log(firstStudent.markLate());
console.log(firstStudent.absent);

console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

