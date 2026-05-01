// type UserRoles = "Admin" | "Editor" | "Viewer";
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);

//test
const course = [""];
console.log(typeof course);

const course2 = [""];
console.log(typeof course2);
