import { Router } from "express";
import { userControllers } from "./user.controller";
import auth from "../../middlewares/auth";

const router = Router();

//-> /users
router.post("/", userControllers.createUser);
router.get("/", auth("admin"), userControllers.getUsers);
router.get("/:id", auth("admin", "user"), userControllers.getSingleUser);
router.patch("/:id", userControllers.updateUserById);
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
