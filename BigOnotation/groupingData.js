//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//Todo => Initiate empty object
//Todo => Check if the response already exist or not
//Todo => If it exist then increment the count
//Todo => If not then initialize it with 1

const count = surveyResponses.reduce((table, response) => {
  if (table[response]) {
    table[response] = table[response] + 1;
  } else {
    table[response] = 1;
  }
  return table;
}, {});
console.log(count);
