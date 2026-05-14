import { Router } from "express";
import { todoControllers } from "./todo.controller";

const router = Router();
//-> /todos/
router.post("/", todoControllers.createTodo);
router.get("/:id", todoControllers.getAllTodos);
router.patch("/:id", todoControllers.updateTodo);
export const todoRoutes = router;
