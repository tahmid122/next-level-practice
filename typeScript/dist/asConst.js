"use strict";
// type UserRoles = "Admin" | "Editor" | "Viewer";
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
Object.defineProperty(exports, "__esModule", { value: true });
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
//# sourceMappingURL=asConst.js.map