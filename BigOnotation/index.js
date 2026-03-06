// //sort
// const numbers = [40, 100, 1, 5, 25, 10];
// const fruits = ["banana", "apple", "cherry", "date"];
// const bigToSmall = numbers.sort((a, b) => b - a);
// console.log("🚀 ~ bigToSmall:", bigToSmall);
// const alphaSort = fruits.sort((a, b) => b.localeCompare(a));
// console.log("🚀 ~ alphaSort:", alphaSort);
// console.log("🚀 ~ numbers:", numbers);

// //nested array flat
// const tagsFormPosts = [
//   ["javascript", "react", "css"],
//   ["node", "express"],
//   ["css", "html", "react"],
// ];
// const flatArr = [...new Set(tagsFormPosts.flat())];
// console.log("🚀 ~ flatArr:", flatArr);

// //some
// const currentUserRoles = ["user", "editor"];
// const featuresAccessRoles = ["admin", "manager"];
// console.log(currentUserRoles.some((v) => v === "user"));
// console.log(
//   currentUserRoles.some((role) => featuresAccessRoles.includes(role)),
// );
// // array from
// const arr = Array.from({ length: 5 }).map((_, i) => i);
// console.log(arr);

// const range = (start, stop, step) =>
//   Array.from({ length: Math.ceil(stop - start / step) }).map(
//     (_, i) => start + i * step,
//   );

// console.log(range(1, 20, 2));
