// const createCounter = (amount) => {
//   let count = 0;
//   return (amount) => {
//     count += amount;
//     return count;
//   };
// };
// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(5));

//* class
class Person {
  constructor(name, age, lesson, wife) {
    this.name = name;
    this.age = age;
    this.lesson = lesson;
    this.wife = wife;
  }
  print() {
    console.log(
      `Hello ${this.name}. You are ${this.age} years old. You read in ${this.lesson}. Your wife name is ${this.wife}`,
    );
  }
}
const person = new Person("Tahmid", 21, "Honours 2nd year", "Medha");
console.log(person);
person.print();
