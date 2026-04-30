"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myCar = "car";
const user = {
    id: 222,
    name: "Tahmid",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const myName = user.name;
const myId = user["id"];
const getPropertyFromObject = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObject(user, "id");
console.log(result);
const result2 = getPropertyFromObject({ name: "Tahmid", class: "Honours" }, "class");
console.log(result2);
//# sourceMappingURL=keyOfContstraint.js.map