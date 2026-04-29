const addStudentToCourse = <T extends { id: number; name: string }>(
  studentInfo: T,
) => {
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
