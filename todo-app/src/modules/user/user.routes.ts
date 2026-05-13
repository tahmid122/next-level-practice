import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

//-> /users
router.post("/", userControllers.createUser);
router.get("/", userControllers.getUsers);
router.get("/:id", userControllers.getSingleUser);
router.patch("/:id", userControllers.updateUserById);

export const userRoutes = router;
