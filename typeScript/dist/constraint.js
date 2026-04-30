"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentToCourse = (studentInfo) => {
    return {
        course: "Next Level Course",
        ...studentInfo,
    };
};
const studentOne = {
    id: 1,
    name: "Tahmid Alam",
    class: "Honours",
};
const studentTwo = {
    id: 2,
    name: "JUbayer",
    hasWatch: true,
};
console.log(addStudentToCourse(studentTwo));
//# sourceMappingURL=constraint.js.map