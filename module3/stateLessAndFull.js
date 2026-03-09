//* Stateless VS Stateful

// const counter = (amount) => {
//   let count = 0;
//   count++;
//   return count;
// };
// const add = counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

const counter = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};

counter.add(5);
counter.add(2);
counter.print();
