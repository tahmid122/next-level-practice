const USER_COUNT = 50000;
let usersA = [];
let usersB = [];
const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// first way

// const commonFriendsSlow = (usersA, usersB) => {
//   const startTime = performance.now();
//   const commonFriends = [];
//   usersA.forEach((userA) => {
//     usersB.forEach((userB) => {
//       if (userA.id === userB.id) {
//         commonFriends.push(userB);
//       }
//     });
//   });
//   const endTime = performance.now();
//   return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
// };
// console.log(commonFriendsSlow(usersA, usersB));

//second way
const commonFriendsFast = (usersA, usersB) => {
  const startTime = performance.now();
  const commonFriends = [];
  const idListA = new Set(usersA.map((user) => user.id));
  usersB.forEach((userB) => {
    if (idListA.has(userB.id)) {
      commonFriends.push(userB);
    }
  });
  const endTime = performance.now();
  return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
};
console.log(commonFriendsFast(usersA, usersB));
