import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

// create user route -> /users
router.post("/", userControllers.createUser);

export const userRoutes = router;
