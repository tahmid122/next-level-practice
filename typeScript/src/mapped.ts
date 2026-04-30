//mapped types

//map

const arrayOfNumbers: number[] = [1, 4, 6];

const arrayOfStrings: string[] = ["1", "4", "6"];

const arrayOfStrings2: string[] = arrayOfNumbers.map((n) => n.toString());
console.log(arrayOfStrings2);

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 50,
  width: "40",
};
