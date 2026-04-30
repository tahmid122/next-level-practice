// Source-> https://github.com/Apollo-Level2-Web-Dev/B6A1

//* Problem 1 -> SOLVED

const formatValue = (
  value: string | number | boolean,
): string | number | boolean => {
  return typeof value === "string"
    ? value.toUpperCase()
    : typeof value === "number"
      ? value * 10
      : !value;
};
// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

//* Problem 2 -> SOLVED

const getLength = (value: string | unknown[]) => {
  return typeof value === "string" ? value.length : value.length;
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

//* Problem 3 -> SOLVED

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

//* Problem 4 -> SOLVED
type Filter = {
  title: string;
  rating: number;
};
const filterByRating = (value: Filter[]) => {
  return value.filter((value) => value.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

//* Problem 5 -> SOLVED
type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: TUser[]): TUser[] => {
  return users.filter((user) => user.isActive);
};
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

//* Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`,
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
